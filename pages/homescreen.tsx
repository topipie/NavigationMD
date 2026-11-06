import { View, Text, StyleSheet } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../navigation'
import { useFonts } from 'expo-font';


type Props = NativeStackScreenProps<RootStackParamList,'Home'>;

export default function HomeScreen({ navigation }: Props) {

const [fontsLoaded] = useFonts({
  LatoThinItalic: require('../assets/fonts/Lato-ThinItalic.ttf'),
});
if (!fontsLoaded) {
return <Text> Loading...</Text>;
  }
    
return (
    <View style={styles.container}>
    <Text style={styles.heading}>Home Screen</Text>
    </View>
    
    );
};
const styles = StyleSheet.create({
container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
},
heading: {
fontFamily: 'LatoThinItalic',
fontSize: 36,
color: '#6200ee',
},

});

