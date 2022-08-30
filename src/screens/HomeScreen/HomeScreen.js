// In App.js in a new project

import * as React from 'react';
import { View, Text, Image, SafeAreaView, FlatList } from 'react-native';
import GradientView from '../../components/GradientView';
import AppButton from '../../components/AppButton/AppButton';
import AppButtonLater from '../../components/AppButton/AppButtonLater';
import ImageButton from '../../components/AppButton/ImageButton';
import AppInput from '../../components/AppInput/AppInput';
import { colors, globalStyle } from '../../../theme';

const data = [
  {id: 1, image: require("../../../assets/images/watch.png"), price: "25$", label: "Apple Watch", status: "Buy Later" },
  {id: 2, image: require("../../../assets/images/watch.png"), price: "50$", label: "Apple Mobile", status: "Buy Later" },
  {id: 3, image: require("../../../assets/images/watch.png"), price: "50$", label: "Apple Mobile", status: "Buy Later" },
  {id: 4, image: require("../../../assets/images/watch.png"), price: "50$", label: "Apple Mobile", status: "Buy Later" },
]

function HomeScreen({navigation}) {
  return (
    <View style={{ flex: 1,padding: 20, backgroundColor: colors.white}}>
      <SafeAreaView style={{flex: 1}}>
        
        <FlatList
          showsVerticalScrollIndicator = {false}
          data={data}
          keyExtractor = {item => item.id}
          numColumns = {2}
          ListHeaderComponent = {()=>(
            <>
              <View style={globalStyle.row}>
                <Text style={globalStyle.heading4 }>Grize</Text>
                <ImageButton 
                containerStyle = {{paddingHorizontal: 10,paddingVertical: 5, backgroundColor: colors.white, borderRadius: 8}}
                textStyle = {{fontSize: 12, color: colors.black}}  onPress={()=>{
                  navigation.navigate('ProfileScreen')
                }}/>
              </View>
              <View style={{width: "60%", marginVertical: 20}}>
                <Text style={[globalStyle.heading1,{fontSize: 30}]}>What do you Want to <Text style={{color: colors.primary}}>buy</Text> ?</Text>
              </View>
              <AppInput placeholder={"Search"}/>
            </>
          )}
          renderItem = {({item})=>(
            <View style={{flex: 1, marginHorizontal: 5, padding: 10, marginVertical: 5, backgroundColor: "rgba(247,247,247,.5)", borderRadius: 5}}>
              <Text style={[globalStyle.heading1,{fontSize: 12}]}>{item.label}</Text>
              <Image source={item.image} style={{marginTop: 20,height: 100, width: "100%", backgroundColor: "rgba(225,225,225,.1)"}} resizeMode={"contain"}/>
              <View style={{alignSelf: 'flex-end'}}>
                <Text style={[globalStyle.heading1,{fontSize: 18}]}>{item.price}</Text>
              </View>
              <View style={[globalStyle.row,{marginTop: 10}]}>
              <AppButtonLater 
              containerStyle = {{paddingHorizontal: 15,paddingVertical: 5}}
              textStyle = {{fontSize: 12}} title={"Buy later"} onPress={()=>{
                navigation.navigate('ProfileScreen')

              }}/>
                <AppButton 
                  containerStyle = {{paddingHorizontal: 15,paddingVertical: 5}}
                  textStyle = {{fontSize: 12}} title={"Start"} onPress={()=>{
                    navigation.navigate('Preview')

                  }}/>
              </View>
            </View>
          )}
        /> 
      </SafeAreaView>
    </View>
  );
}


export default HomeScreen;