import React from 'react';
import { Appbar } from 'react-native-paper';
import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import { StyleSheet } from 'react-native';


interface MainAppbarProps {
title: string;
}

const MainAppbar = ({ navigation, back }: NativeStackHeaderProps) => {
  return (
    <Appbar.Header mode="center-aligned" elevated style={styles.bar}>
      {back ? (
        <Appbar.Action 
        icon="arrow-left"
        onPress={navigation.goBack} 
        iconColor={styles.icon.color}
        
        />
      ) : (
        <Appbar.Action
          icon="arrow-right"
          iconColor={styles.icon.color}
          style={{ position: 'absolute', right: 6, }}
          onPress={() =>
            navigation.navigate('SecondScreen' , {
            })
          }
        />
      )}

      <Appbar.Content 
      title="MD NAV DEMO"
      titleStyle={styles.title}
      style={{position: 'absolute',left: 0,right: 0,}}
      />
      
    </Appbar.Header>
  );
};


const styles = StyleSheet.create({
  bar: {
   backgroundColor: '#6200ee',
  },
  title: {
    color: '#9afa00',
  },
  icon: {
    color: '#ff0000',
  },
});

export default MainAppbar;