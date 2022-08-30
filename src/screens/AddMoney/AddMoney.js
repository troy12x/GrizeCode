// In App.js in a new project

import * as React from 'react';
import { View, Text, Image, ImageBackground, SafeAreaView } from 'react-native';
import GradientView from '../../components/GradientView';
import AppButton from '../../components/AppButton/AppButton';
import AppInput from '../../components/AppInput/AppInput';
import { colors, globalStyle } from '../../../theme';

function AddMoney({navigation}) {
  return (
    <GradientView>
      
      <ImageBackground 
        source = {require("../../../assets/images/add-money-hero.png")} 
        style={{height: "100%",width: "100%", padding: 20}} 
        resizeMode={"contain"}>
          <SafeAreaView>
            <View style={globalStyle.row}>
              <Text style={[globalStyle.heading1,{color: colors.white}]}>Grize</Text>
              {/* <Image source = {require("../../../assets/images/boy.png")} style={{height: 50, width: 50, borderRadius: 10}}/> */}
            </View>
          </SafeAreaView>
          <View style={{flex: 1, justifyContent: 'flex-end'}}>
            <View style={{width: "60%", marginVertical: 20}}>
              <Text style={[globalStyle.heading1,{fontSize: 30,color: colors.white}]}>Can’t Save your money ?</Text>
            </View>
            <View style={[globalStyle.row,{marginTop: 10}]}>
              <Text style={[globalStyle.heading1,{color: colors.white}]}>{""}</Text>
              <AppButton 
                containerStyle = {{paddingHorizontal: 10,paddingVertical: 5, backgroundColor: colors.white, borderRadius: 8}}
                textStyle = {{fontSize: 12, color: colors.black}} title={"Start"} onPress={()=>{
                  navigation.navigate('LoginScreen')
                }}/>
            </View>
          </View>
      </ImageBackground>
    </GradientView>
  );
}


export default AddMoney;