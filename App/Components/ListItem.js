import React, {Component} from 'react'
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text
} from 'react-native'

import fonts from './Styles/Fonts.js'
import colors from './Styles/Colors.js'
import buttons from './Styles/Buttons.js'



pressedButton = () => {
  return null;
}

class ListItem extends Component {
  render () {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={buttons.picture}></TouchableOpacity>
        <View style={{flex:1}}>
          <Text style={fonts.listPrimary}>{this.props.name}</Text>
          <Text style={fonts.listSecondary}>{this.props.trades}</Text>
        </View>
        <TouchableOpacity>
          <Text style={[buttons.unpressedList, fonts.listButton]}>CONNECT</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default ListItem

const styles = StyleSheet.create({
  container: {
    padding: 16,
    maxHeight: 80,
    flexDirection: 'row',
    alignItems: 'center',
    //backgroundColor: colors.yellowLight
  }
})