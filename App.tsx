import React from 'react';
import {ThemeProvider} from 'styled-components/native';
import {
  useFonts,
  Karla_400Regular,
  Karla_700Bold,
} from '@expo-google-fonts/karla';
import theme from './src/theme';
import {StatusBar} from 'react-native';
import {Loading} from '@components/Loading';
import {Routes} from './src/routes';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

export default function App() {
  const [fontsLoaded] = useFonts({Karla_400Regular, Karla_700Bold});

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <ThemeProvider theme={theme}>
        <StatusBar
          barStyle={'dark-content'}
          translucent
          backgroundColor={'transparent'}
        />
        {fontsLoaded ? <Routes /> : <Loading />}
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}
