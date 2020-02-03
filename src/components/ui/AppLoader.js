import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import {THEME} from "../../theme";

export const AppLoader = (props) => {
  return (
    <View style={styles.center}>
      <ActivityIndicator size='large' color={THEME.MAIN_COLOR}/>
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
