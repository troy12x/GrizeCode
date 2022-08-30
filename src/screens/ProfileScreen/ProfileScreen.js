// In App.js in a new project

import * as React from 'react';
import { View, Text, Image, FlatList } from 'react-native';
import GradientView from '../../components/GradientView';
import AppButton from '../../components/AppButton/AppButton';
import AppInput from '../../components/AppInput/AppInput';
import { colors, globalStyle } from '../../../theme';

function ProfileScreen({navigation}) {
  return (
    <View style={{ flex: 1, padding: 25,backgroundColor:colors.white}}>
      <View style={globalStyle.row}>
        <Image source={require("../../../assets/images/boy.png")} style={{height: 90, width: 90, borderRadius: 20}} resizeMode={"contain"}/>
        <View style={{flex: 1}}>
          <Text style={globalStyle.heading1} >Eyad Gomaa</Text>
          <Text style={[globalStyle.p,{color: colors.gray}]} >123 Items on waitng </Text>
        </View>
      </View>
      <View style={{marginTop: 20}}>
        <Text style={globalStyle.heading1}>Items</Text>
        <FlatList
          showsVerticalScrollIndicator = {false}
          data={[1,2,3,4,5]}
          keyExtractor = {key => key}
          ListFooterComponent = {()=>(<View style={{height: 100}} />)}
          renderItem = {({item})=>(
            <View style={[globalStyle.row,{marginBottom: 20}]}>
              <View style={{flex: 1}}>
                <Image source={require('../../../assets/images/meter.png')} style={{width: "100%", height: 100, tintColor: colors.red}} resizeMode={"contain"}/>
                <Text style={[globalStyle.heading1,{textAlign: 'center'}]}>20$</Text>
              </View>
              <View style={{flex: 1, marginLeft: 15}}>
                <Text style={[globalStyle.heading1,{textAlign: 'center'}]}>Apple Watch</Text>
                <Image source={require('../../../assets/images/watch.png')} style={{width: "100%", height: 130, marginVertical: 10, backgroundColor: colors.lightGray,borderRadius: 10}} resizeMode={"contain"}/>
                <View style={[globalStyle.row]}>
                  <Text style={globalStyle.heading1}></Text>
                  <AppButton containerStyle={{paddingVertical: 0,paddingHorizontal: 15,borderRadius: 100}} title={"Reume"} onPress={()=>{
                    navigation.navigate('CartScreen')
                  }} />
                </View>
              </View>
            </View>
          )}
        />
      </View>
    </View>
  );
}


export default ProfileScreen;