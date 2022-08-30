// In App.js in a new project

import * as React from 'react';
import { Image, SafeAreaView, StyleSheet, Text, Touchable, TouchableOpacity, View ,FlatList} from 'react-native'
import GradientView from '../../components/GradientView';

import { colors, globalStyle } from '../../../theme'
import AppButton from '../../components/AppButton/AppButton';
import BuyButton from '../../components/AppButton/BuyButton';


function Preview({navigation}) {
  return (
 <GradientView>
 <View style={styles.container}>
 <TouchableOpacity onPress={()=>navigation.goBack()} >
     <Image source={require("../../../assets/images/back.png")} style={{height: 20, width: 20, tintColor:colors.white}}/>
 </TouchableOpacity>
</View>
    
      <View style={{flex: 1.5, backgroundColor: colors.white, padding: 20}}>
        <Text style={globalStyle.heading1}>Apple Phone</Text>
        <View style={[globalStyle.rowx,{marginTop:20}]}>
         <View >
            <Image source={require("../../../assets/images/watch.png")} style={{width: 400, height: 400}} resizeMode = {"contain"} />
          </View>
          <View >
            <Text style={globalStyle.p}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took </Text>
          </View>
         
        </View>
      </View>
      <View style={[globalStyle.row,{backgroundColor: colors.white,padding: 20}]}>
      <BuyButton containerStyle={{paddingVertical: 0,paddingHorizontal: 0,borderRadius: 100}} title={""}  />

        <BuyButton containerStyle={{paddingVertical: 2,paddingHorizontal: 15,borderRadius: 100}} title={"Start"}  onPress={()=>{
          navigation.navigate('CartSection')

        }} />
      </View>
    </GradientView>


  
  );
}


export default Preview;

const styles = StyleSheet.create({
  container: {
      height: 50,
      padding: 20,
      ...globalStyle.row
  },
  bg: {
      height: 40, width: 40, backgroundColor: colors.white,
      borderRadius: 100,
      alignItems: 'center',
      justifyContent: 'center'
  }
})