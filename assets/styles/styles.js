import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    micontenedor: {
      flex: 1,
      backgroundColor: '#d9e6f9',
      alignItems: 'center',
      marginTop: '70'
    },
    title: {
      fontSize:30,
      color: 'black'
    },
    subTitle: {
      fontWeight: 700,
      color: '#6D28D9',
      fontSize:20
    },
    myButton: {
      marginTop:30,
      backgroundColor: 'blue',
      paddingHorizontal: 20,
      paddingVertical: 10,
      borderRadius:50
    },
    textButton: {
      color: 'white',
      fontSize:17,
      fontWeight: 500
    },
    textNoPacientes: {
      fontSize: 20,
      marginTop: 40,
      fontWeight: 'bold'
    },
    listaPacientes: {
      marginTop: 10,
      width: '100%'
    },
    textListaPacientes: {
      fontSize: 30,
      fontWeight: 'bold',
      textAlign: 'center'
    },
    scroll: {
      marginTop: 20,
      marginBottom: 50
    }
  });