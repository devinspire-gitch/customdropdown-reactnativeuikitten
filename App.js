import React from 'react';
import { StyleSheet } from 'react-native';
import { CustomDropDown } from './CustomDropDown';
import * as eva from '@eva-design/eva';
import {ApplicationProvider } from '@ui-kitten/components';
import { default as mapping } from './mapping.json'; 


export default () => {
return (
  <ApplicationProvider
    {...eva}
    customMapping={mapping}
    theme={eva.light}>
      <CustomDropDown />
  </ApplicationProvider>
  );
};

const styles = StyleSheet.create({
  container: {
 
  },
});


