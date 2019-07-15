import { StyleSheet } from 'react-native'
import colors from './Colors.js'
  
  const fonts = StyleSheet.create({
    
    listPrimary: {
      fontSize: 16,
      fontWeight: 'bold',
      color: colors.black
    },

    listSecondary: {
      fontSize: 14,
      fontWeight: 'bold',
      color: colors.grayDark
    },

    listButton: {
      fontSize: 14,
      fontWeight: "bold",
      color: colors.black,
      textAlign: "center"
    }
    
  });
  
export default fonts;