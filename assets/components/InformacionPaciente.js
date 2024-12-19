import React from "react";
import { stylesInfoPaciente } from "../styles/stylesInfoPaciente";
import { Pressable, Text, View } from "react-native";
import { formatFecha } from "../helpers";

export default function InformacionPaciente({ paciente, setModalPaciente, setPaciente }){

    return (
        <View style={stylesInfoPaciente.contenedor}>
            <Pressable
                onPress={() => {
                    setModalPaciente(false)
                    setPaciente({})
                }}
            >
                <View>
                    <Text style={stylesInfoPaciente.textSalir}>Salir</Text>
                </View>
            </Pressable>
            <Text style={stylesInfoPaciente.title}>Información Paciente</Text>
            
            <View style={[stylesInfoPaciente.contenido, stylesInfoPaciente.shadows]}>
                <View style={stylesInfoPaciente.campo}>
                    <Text style={stylesInfoPaciente.label}>Nombre: </Text>
                    <Text style={stylesInfoPaciente.valor}>{paciente.nombrePaciente}</Text>
                </View>
                <View style={stylesInfoPaciente.campo}>
                    <Text style={stylesInfoPaciente.label}>Telefono: </Text>
                    <Text style={stylesInfoPaciente.valor}>{paciente.telefono}</Text>
                </View>
                <View style={stylesInfoPaciente.campo}>
                    <Text style={stylesInfoPaciente.label}>Email: </Text>
                    <Text style={stylesInfoPaciente.valor}>{paciente.email}</Text>
                </View>
                <View style={stylesInfoPaciente.campo}>
                    <Text style={stylesInfoPaciente.label}>Síntomas: </Text>
                    <Text style={stylesInfoPaciente.valor}>{paciente.sintomas}</Text>
                </View>
                <View style={stylesInfoPaciente.campo}>
                    <Text style={stylesInfoPaciente.label}>Fecha Alta: </Text>
                    <Text style={stylesInfoPaciente.valor}>{formatFecha(paciente.date)}</Text>
                </View>
            </View>
        </View>
    )

}