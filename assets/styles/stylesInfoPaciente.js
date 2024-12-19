import { StyleSheet } from "react-native";

export const stylesInfoPaciente = StyleSheet.create({
    contenedor: {
        backgroundColor: '#f59e0b',
        flex: 1,
    },
    textSalir: {
        padding: 10,
        backgroundColor: 'white',
        fontSize: 15,
        fontWeight: 'bold'
    },
    title: {
        textAlign: 'center',
        marginTop: 20,
        fontSize: 30,
        color: 'white',
        fontWeight: 'bold'
    },
    contenido: {
        marginTop: 30,
        backgroundColor: '#fff',
        marginHorizontal: 30,
        borderRadius: 10,
        padding: 20
    },
    shadows: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        elevation: 24
    },
    campo: {
        marginBottom: 10
    },
    label: {
        textTransform: 'uppercase',
        color: '#374151',
        fontWeight: '600',
        marginBottom: 3,
        fontSize: 12

    },
    valor: {
        fontWeight: '700',
        fontSize: 20,
        color: '#334155'
    }
})