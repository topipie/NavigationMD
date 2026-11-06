import { useEffect, useLayoutEffect } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import * as React from 'react';
import { View, Text, StyleSheet, BackHandler } from 'react-native';
import { RootStackParamList } from '../navigation';
import { useFonts } from 'expo-font';



type Props = NativeStackScreenProps<RootStackParamList,'SecondScreen'>;

export default function SecondScreen({ navigation }: Props) {

const [fontsLoaded] = useFonts({
    LatoBoldItalic: require('../assets/fonts/Lato-BoldItalic.ttf'),
    });
    if (!fontsLoaded) {
    return <Text> Loading...</Text>;
      }
    
return (
<View style={styles.container}>
<Text style={styles.heading}>Second Screen</Text>
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
fontFamily: 'LatoBoldItalic',
fontSize: 36,
color: '#6200ee',
},
});

