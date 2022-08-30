import * as React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Platform, StatusBar } from 'react-native';
import { colors, globalStyle } from '../../../theme';
import AppButton from '../../components/AppButton/AppButton';
import AppInput from '../../components/AppInput/AppInput';
import GradientView from '../../components/GradientView';

function Index({navigation}) {
  return (
    <GradientView>
        <StatusBar translucent backgroundColor={"transparent"} />
        <View style={{flex: 1}}>
          <Image source={require("../../../assets/images/boy.png")} style={{height: "100%", width: "100%",  zIndex: 10}} resizeMode = {"contain"} />
        </View>
        <View style={{flex: 2, backgroundColor: colors.white, borderTopLeftRadius: 30, borderTopRightRadius: 30}}>
          <View style = {styles.container}>
            <View style={{flex: 1,justifyContent: 'center'}}>
              <Text style={[globalStyle.heading1,{marginBottom: 20}]}>Login</Text>
              <AppInput placeholder={"Type your Email"} />
              <AppInput placeholder={"Type your Password"} />
              <View style={{alignSelf: 'center'}}>
                <AppButton title={"Login"} onPress={()=>navigation.replace("HomeStack")}/>
              </View>
            </View>
          </View>
          <View style={[globalStyle.row,{margin: 30}]}>
            <Text style={globalStyle.text1}>Forget?</Text>
            <TouchableOpacity onPress={()=>navigation.navigate("SignupScreen")}>
              <Text style={globalStyle.heading1}>Register?</Text>
            </TouchableOpacity>
          </View>
        </View>
    </GradientView>
  );
}


export default Index;


const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: colors.white, 
    zIndex: Platform.OS === "ios"? -1: 0, 
    borderTopRightRadius: 60, 
    borderTopLeftRadius: 60,
    padding: 25,
    justifyContent: 'center',
    bottom: 25
    
  }
})