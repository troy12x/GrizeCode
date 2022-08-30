import * as React from 'react';
import { View, Text, Image, StyleSheet,Platform, StatusBar } from 'react-native';
import { colors, globalStyle } from '../../../theme';
import AppButton from '../../components/AppButton/AppButton';
import AppInput from '../../components/AppInput/AppInput';
import AppHeader from '../../components/AppHeader/AppHeader';
import GradientView from '../../components/GradientView';

function Index() {
  return (
    <GradientView>
        <View style={{marginTop: StatusBar.currentHeight}}>
          <AppHeader hasBg/>
        </View>
        <View style = {[styles.container]}>
          <View style={{flex: 1}}>
            <Text style={[globalStyle.heading1,{marginVertical: 30}]}>Register</Text>
            <AppInput placeholder={"Type your Name"} />
            <AppInput placeholder={"Type your Email"} />
            <AppInput placeholder={"Type your Password"} />
            <AppInput placeholder={"Type your Password"} />
            <View style={{alignSelf: 'center'}}>
              <AppButton title={"Register"} />
            </View>
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
    padding: 25,
    // justifyContent: 'center',
    marginTop: 20
  }
})