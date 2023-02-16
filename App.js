import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { gStyle } from './styles/style';
import * as Font from 'expo-font'
import { useEffect, useState } from 'react';
import AppLoading from 'expo-app-loading';
import MainStack from './navigate';

const fonts =()=> Font.loadAsync({
  'mt-italic': require('./assets/fonts/Montserrat-Italic-VariableFont_wght.ttf'),
  'mt': require('./assets/fonts/Nunito-VariableFont_wght.ttf')

})

export default function App() {
  const [font,setFont] =useState(false)

  useEffect(() => {
    const getAsyncData = async () => {
        await fonts()
        setFont(true);
    }
    getAsyncData();
}, [])


if (font) {
  return (
    <SafeAreaView style={gStyle.main} >
        <MainStack/>
    </SafeAreaView>
  );
}else{
  <AppLoading startAsync={fonts} onFinish={()=>setFont(true)} onError={console.warn}/>
}

}

const styles = StyleSheet.create({

});
