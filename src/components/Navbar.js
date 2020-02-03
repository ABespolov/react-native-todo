import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {THEME} from "../theme";

export const Navbar = (props) => {
  return (
    <View style={styles.navbar}>
      <Text style={styles.text}>Todo App</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 70,
    backgroundColor: THEME.MAIN_COLOR,
    paddingTop: 20,
  },
  text: {
    color: '#fff',
    fontSize: 20,
  }
});
