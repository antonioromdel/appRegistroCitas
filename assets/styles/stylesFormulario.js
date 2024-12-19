import { StyleSheet } from "react-native";

export const stylesFormulario = StyleSheet.create({
    closeButton: {
        backgroundColor:'white',
        padding: 10,
        justifyContent: 'center'
      },
      textButtonClose: {
        color:'black',
        fontSize: 20,
        fontWeight: 700
      },
      titulo: {
        fontSize: 30,
        fontWeight: 600,
        textAlign: 'center',
        marginTop: 30,
        color:'white'

      },
      tituloBold: {
        fontWeight:900,
        color:'white'
      },
      contenido: {
        backgroundColor: '#6d28d9',
        flex: 1
      },
      input: {
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 10
      },
      campo:{
        marginTop:10,
        marginHorizontal: 30
      },
      label: {
        color: '#fff',
        marginBottom: 10,
        fontSize: 20,
        fontWeight: 600
      },
      contenedorFecha: {
        backgroundColor:'white',
        borderRadius: 15,
        overflow:'hidden'
      },
      btnGuardar: {
        justifyContent:'center',
        marginHorizontal: '100',
        marginTop: 50,
        backgroundColor: '#f59e0b',
        paddingVertical: 10,
        borderRadius: 50
      },
      textBtnGuardar: {
        textAlign:'center',
        fontSize: 18
      }
})