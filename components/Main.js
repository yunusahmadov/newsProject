
import { useState } from 'react';
import { StyleSheet, Text, View, Button,TouchableOpacity,FlatList,Image } from 'react-native';
import { gStyle } from '../styles/style';


export default function Main({navigation}) {
  // const loadScene =()=>{
  //   navigation.navigate('Contacts')

  // }


    const [news,setNews]=useState([
      {name:'Google',anons:'Google!!!',full: 'Google is good!',key:'1',img:'https://s.abcnews.com/images/Technology/ht_google_lb_150901_16x9_992.jpg'},
      {name:'Apple',anons:'Apple!!!',full: 'Apple is good!',key:'2',img:'https://beloved-brands-mini-mba.b-cdn.net/wp-content/uploads/2022/06/Apple-Logo.png'},
      {name:'Facebook',anons:'Facebook!!!',full: 'Facebook is good!',key:'3',img:'https://logos-world.net/wp-content/uploads/2020/04/Facebook-Logo.png'}

    ]);

  return (
<View style={gStyle.main}>
    <Text style={gStyle.title}>Главная страница</Text>
    {/* <Button title='Открыть страницу' onPress={loadScene}/> */}
    <FlatList data={news} renderItem={({item})=>(
      <TouchableOpacity onPress={()=>navigation.navigate('FullInfo',item)}>
        <Image source={{
          width:'100%',
          height:200,
          uri:item.img

        }}
        />
      <Text>{item.name}</Text>
      <Text>{item.anons}</Text>
  </TouchableOpacity>
    )}/>
</View>
  );
}

const styles = StyleSheet.create({

});