import { StyleSheet } from "react-native";

export const stylesPaciente = StyleSheet.create({
    contenedor: {
        marginTop: 20,
        marginHorizontal: 20,
        justifyContent: 'flex-start',
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10
    },
    textPacientes: {
        fontWeight: '500',
        fontSize: 12,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        marginBottom: 5
    },
    textVariables: {
        fontWeight: 'bold',
        marginBottom: 5,
        color: 'blue',
        fontSize: 15
    },
    contenedorBtns: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginTop: 10,
        padding: 5
    },
    btn: {
        paddingVertical: 5,
        paddingHorizontal: 20,
        borderRadius: 20

    },
    btnEditar: {
        backgroundColor: '#f59e0b'
    },
    btnEliminar: {
        backgroundColor: '#ef4444'
    },
    textBtn:{
        textTransform: 'uppercase',
        fontWeight: '700',
        fontSize: 15
    }




}) 