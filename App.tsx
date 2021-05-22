import React, { useEffect } from 'react';
import AppLoading from 'expo-app-loading';
import * as Notifications from 'expo-notifications';

import { useFonts, Jost_400Regular, Jost_600SemiBold } from '@expo-google-fonts/jost';

import Routes from './src/routes';
import { PlantProps } from './src/libs/storage';

export default function App() {

  const [fontsLoaded] = useFonts({
    Jost_400Regular,
    Jost_600SemiBold
  });

  useEffect(() => {
    const subscription = Notifications.addNotificationResponseReceivedListener(
      async notification => {
        console.log('Plant ======================>>>>');
        const data = notification.notification.request.content.data.plant as PlantProps;
        console.log(data);
      }
    );

    return () => subscription.remove();

    // async function showNotificationsScheduled() {

    //   await Notifications.cancelAllScheduledNotificationsAsync();

    //   const data = await Notifications.getAllScheduledNotificationsAsync();

    //   console.log('====================== NOTIFICAÇÕES AGENDADAS ======================');
    //   console.log(data);
    // }

    // showNotificationsScheduled();
  });

  if (!fontsLoaded) {
    return <AppLoading />
  }
  return (
    <Routes />
  )
}

