import React from 'react';
import {
  View,
  TouchableOpacity
} from 'react-native';

import ListItem from './App/Components/ListItem.js';
import buttons from './App/Components/Styles/Buttons.js'

const App = () => {
  return (
    <View style={{flex: 1}}>
      <ListItem name="Ross" trades="etc etc etc"/>
      <ListItem name="Nathanael" trades="more more more"/>
      <ListItem name="Etc" trades="yada yada"/>

      <TouchableOpacity style={buttons.FAB}></TouchableOpacity>
    </View>
  );
};

export default App;
