import { StyleSheet } from 'react-native'
import colors from './Colors.js'
  
  const buttons = StyleSheet.create({
    
    unpressedList: {
      backgroundColor: colors.yellow,
      paddingVertical: 8,
      paddingHorizontal: 16,
      elevation: 2,
      borderRadius: 4,
      justifyContent: "center"
    },

    picture: {
      backgroundColor: "purple",
      width: 48,
      height: 48,
      borderRadius: 50,
      marginRight: 16
    },

    FAB: {
      backgroundColor: colors.yellow,
      position: "absolute",
      bottom: 16,
      right: 16,
      width: 54,
      height: 54,
      elevation: 6,
      borderRadius: 50
    }
  
  });
  
export default buttons;