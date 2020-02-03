import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {THEME} from "../theme";

export const AppCard = (props) => {
  return (
    <View style={{...styles.default, ...props.style}}>
      {props.children}
    </View>
  );
};

const styles = StyleSheet.create({
  default: {
    flexDirection: 'row',
    padding: 15,
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: THEME.GRAY_COLOR,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.16,
    shadowRadius: 16,
    elevation: 5,
    backgroundColor: '#fff'
  }
});
