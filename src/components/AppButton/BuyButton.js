import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { buttonRadious, colors, fonts } from '../../../theme'

const BuyButton = ({navigation,title, onPress,textStyle = {},containerStyle={}}) => {
  return (
    <TouchableOpacity style={[styles.container,containerStyle]  } onPress = {onPress}>
      <Text style={[styles.text,textStyle]}>{title}</Text>
    </TouchableOpacity>
  )
}

export default BuyButton


const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.buttonColor,
        borderRadius: buttonRadious,
        paddingHorizontal: 30,
        paddingVertical: 10,
        alignItems: 'center',
    },
    text: {
        color: colors.white,
        fontSize: 18,
        fontFamily: fonts.bold
        
    }
})