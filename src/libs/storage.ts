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

        await AsyncStorage.setItem('@plantmanager:plants',
            JSON.stringify({
                ...newPlant,
                ...oldPlants
            }));


    } catch (error) {
        throw new Error(error);
    }
}

export async function loadPlants(): Promise<StoragePlantProps> {
    try {

        const data = await AsyncStorage.getItem('@plantmanager:plants');
        const plants = data ? (JSON.parse(data) as StoragePlantProps) : {};

        return plants;


    } catch (error) {
        throw new Error(error);
    }
}