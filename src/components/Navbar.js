import React from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';
import {THEME} from "../theme";

export const Navbar = (props) => {
  return (
    <View style={{...styles.navbar, ...Platform.select({
        ios: styles.navbarIOS,
        android: styles.navbarAndroid
      })}}>
      <Text style={styles.text}>Todo App</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 70,
    paddingTop: 20,
  },
  text: {
    color: '#fff',
    fontSize: 20,
  },
  navbarAndroid: {
    backgroundColor: THEME.MAIN_COLOR,
  },
  navbarIOS: {
    backgroundColor: THEME.MAIN_COLOR,
    borderBottomWidth: 1
  }
});
