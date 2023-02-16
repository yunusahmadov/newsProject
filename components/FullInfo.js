import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { gStyle } from '../styles/style';


export default function FullInfo({route}) {
// const loadScene =()=>{
//     navigation.goBack();
// }
  return (
<View style={gStyle.main}>
       <Text style={gStyle.title}>{route.params.name}</Text>
       <Text >{route.params.full}</Text>

    {/* <Button title='Открыть страницу' onPress={loadScene}/> */}

</View>
  );
}

const styles = StyleSheet.create({

});