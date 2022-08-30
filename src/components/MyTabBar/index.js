import React from 'react'
import { View, Text, TouchableOpacity, Image, SafeAreaView } from 'react-native';
import { colors } from '../../../theme';

function MyTabBar({ state, descriptors, navigation }) {
    return (
    <SafeAreaView>
      <View style={{ flexDirection: 'row', paddingHorizontal: 10,paddingVertical: 12 , backgroundColor: colors.white}}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;
  
          const isFocused = state.index === index;
  
          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });
  
            if (!isFocused && !event.defaultPrevented) {
              // The `merge: true` option makes sure that the params inside the tab screen are preserved
              navigation.navigate({ name: route.name, merge: true });
            }
          };
  
          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };
  
          return (
            <>
                <TouchableOpacity
                accessibilityRole="button"
                accessibilityState={isFocused ? { selected: true } : {}}
                accessibilityLabel={options.tabBarAccessibilityLabel}
                testID={options.tabBarTestID}
                onPress={onPress}
                onLongPress={onLongPress}
                style={{ flex: 1, alignItems: 'center' ,}}
                >
                    {
                        options?.tabBarIcon === "home"?
                        <Image source={require(`../../../assets/images/home.png`)} style={{height: 25,width: 25, tintColor: isFocused?colors.primary: colors.black}} resizeMode={"contain"} />
                        :
                        options?.tabBarIcon === "cart"?
                        <Image source={require(`../../../assets/images/cart.png`)} style={{height: 25,width: 25, tintColor: isFocused?colors.primary: colors.black}} resizeMode={"contain"} />
                        :
                        options?.tabBarIcon === "user"?
                        <Image source={require(`../../../assets/images/user.png`)} style={{height: 25,width: 25, tintColor: isFocused?colors.primary: colors.black}} resizeMode={"contain"} />
                        :
                        options?.tabBarIcon === "setting"?
                        <Image source={require(`../../../assets/images/setting.png`)} style={{height: 25,width: 25, tintColor: isFocused?colors.primary: colors.black}} resizeMode={"contain"} />
                        :
                        <Text style={{ color: isFocused ? colors.red : colors.black }}>{label}</Text>
                    }
                </TouchableOpacity>
                {
                    index === 1?
                        <TouchableOpacity style={{flex: 1,alignItems: 'center', justifyContent: 'center'}} onPress={()=>navigation.navigate("AddMoney")}>
                            <View style={{height: 50, width: 50, borderRadius: 100, backgroundColor: colors.primary, alignItems: 'center', justifyContent: 'center', bottom: 10, position: 'absolute'}}>
                                <Image source={require(`../../../assets/images/plus.png`)} style={{height: 25,width: 25, tintColor: colors.white}} resizeMode={"contain"} />
                            </View>
                        </TouchableOpacity>:
                    <></>
                }
            </>
          );
        })}
      </View>
    </SafeAreaView>
    );
  }


export default MyTabBar