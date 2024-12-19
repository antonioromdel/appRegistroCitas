import { stylesPaciente } from "../styles/stylesPaciente";
import { Text, View, Pressable } from "react-native";
import { formatFecha } from "../helpers";

export default function Paciente ({item, setShowModal, pacienteEditar, pacienteEliminar, setModalPaciente, setPaciente}) {

    const { nombrePaciente, date, id} = item

    

    return (
        <Pressable
            onLongPress={() => {
                setModalPaciente(true)
                setPaciente(item)
            }}
            
        >
            <View style={stylesPaciente.contenedor}>
                <Text style={stylesPaciente.textPacientes}>Nombre del paciente: </Text>
                <Text style={stylesPaciente.textVariables}>{nombrePaciente}</Text> 
                <Text style={stylesPaciente.textPacientes}>Fecha de alta: </Text>
                <Text style={stylesPaciente.textVariables}>{formatFecha(date)}</Text>

                <View style={stylesPaciente.contenedorBtns}>
                    <Pressable style={[stylesPaciente.btn, stylesPaciente.btnEditar]}>
                        <Text 
                        style={stylesPaciente.textBtn}
                        onPress={() => {
                            setShowModal(true)
                            pacienteEditar(id)
                        }}
                        >
                            Editar
                        </Text>
                    </Pressable>
                    <Pressable 
                        style={[stylesPaciente.btn, stylesPaciente.btnEliminar]}
                        onPress={() => pacienteEliminar(id)}
                        >
                        <Text style={stylesPaciente.textBtn}>Eliminar</Text>
                    </Pressable>
                </View>


            </View>
        </Pressable>
    )
}