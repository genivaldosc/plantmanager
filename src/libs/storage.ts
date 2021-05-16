import AsyncStorage from "@react-native-async-storage/async-storage"
import * as Notifications from "expo-notifications";
import { format } from "date-fns"

export interface PlantProps {
    id: string;
    name: string;
    about: string;
    water_tips: string;
    photo: string;
    environments: [string];
    hour: string;
    frequency: {
        times: number;
        repeat_every: string;
    },
    dateTimeNotification: Date;
}

export interface StoragePlantProps {
    [id: string]: {
        data: PlantProps;
        notificationId: string;
    }
}

export async function savePlant(plant: PlantProps): Promise<void> {
    try {

        const data = await AsyncStorage.getItem('@plantmanager:plants');
        const oldPlants = data ? (JSON.parse(data) as StoragePlantProps) : {};

        const newPlant = {
            [plant.id]: {
                data: plant
            }
        }

        const plats = { ...newPlant, ...oldPlants };

        console.log(plats);

        await AsyncStorage.setItem('@plantmanager:plants', JSON.stringify(plats));


    } catch (error) {
        throw new Error(error);
    }
}

export async function loadPlants(): Promise<PlantProps[]> {
    try {

        const data = await AsyncStorage.getItem('@plantmanager:plants');
        const plants = data ? (JSON.parse(data) as StoragePlantProps) : {};

        const plantsSorted = Object
            .keys(plants)
            .map((plant) => {
                return {
                    ...plants[plant].data,
                    hour: format(new Date(plants[plant].data.dateTimeNotification), 'HH:mm')
                }
            })
            .sort((a, b) =>
                Math.floor(
                    new Date(a.dateTimeNotification).getTime() / 1000 -
                    Math.floor(new Date(b.dateTimeNotification).getTime() / 1000)
                )
            )

        return plantsSorted;


    } catch (error) {
        throw new Error(error);
    }
}