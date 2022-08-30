// In App.js in a new project

import * as React from 'react';
import { View, Text, Image, StatusBar } from 'react-native';
import GradientView from '../../components/GradientView';
import AppButton from '../../components/AppButton/AppButton';
import AppInput from '../../components/AppInput/AppInput';
import { colors, globalStyle } from '../../../theme';
import AppHeader from '../../components/AppHeader/AppHeader';

function CartScreen() {
  return (
    <GradientView>
      <View style={{ flex: 1, paddingVertical: 10}}>
        <Image source={require("../../../assets/images/meter.png")} style={{width: null, height: null, flex: 1}} resizeMode = {"contain"}/>
        <View style={{alignItems: 'center'}}>
          <Text style={[globalStyle.heading1,{color: colors.white}]} >Total</Text>
          <Text style={[globalStyle.heading1,{color: colors.white}]} >30$</Text>
        </View>
      </View>
      <View style={{flex: 1.5, backgroundColor: colors.white, padding: 20}}>
        <Text style={globalStyle.heading1}>Apple Phone</Text>
        <View style={globalStyle.row}>
          <View style={{flex: 1}}>
            <Text style={globalStyle.p}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took </Text>
          </View>
          <View style={{flex: 1}}>
            <Image source={require("../../../assets/images/watch.png")} style={{width: "100%", height: '100%'}} resizeMode = {"contain"} />
          </View>
        </View>
      </View>
      <View style={[globalStyle.row,{backgroundColor: colors.white,padding: 20}]}>
        <AppButton containerStyle={{paddingVertical: 2,paddingHorizontal: 15,borderRadius: 100}} title={"Add Money"} />
        <AppButton containerStyle={{paddingVertical: 2,paddingHorizontal: 15,borderRadius: 100}} title={"Buy"} />
      </View>
    </GradientView>
  );
}


export default CartScreen;