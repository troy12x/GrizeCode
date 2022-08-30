import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native'
import React from 'react'
import { colors, fonts, inputRadious } from '../../../theme'

const AppInput = ({placeholder,onChangeText,value}) => {
  return (
    <TextInput
        onChangeText={onChangeText}
        placeholder = {placeholder}
        value = {value}
        style={styles.container}
        placeholderTextColor = {colors.inputTextSearch}
        
    />
  )
}

export default AppInput


const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.inputBgSearch,
        borderRadius: inputRadious,
        padding: 15,
        placeholderTextColor:colors.inputBgSearch,
        color: colors.inputTextSearch,
        fontFamily: fonts.bold,
        marginBottom: 20,
        fontSize: 20

    },
    
})