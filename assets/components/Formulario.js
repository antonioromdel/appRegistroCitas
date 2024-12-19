import { stylesFormulario } from "../styles/stylesFormulario";
import { Modal, Text, Pressable, View, ScrollView, Alert } from "react-native";
import Input from "./Input";
import { useEffect, useState } from "react";
import DatePicker from "@dietime/react-native-date-picker";

export default function Formulario({setPacientes, pacientes, paciente, setPaciente, cerrarModal, showModal}) {

    const [id, setId] =useState('')
    const [nombrePaciente, setNombrePaciente] = useState('')
    const [email, setEmail] = useState('')
    const [telefono, setTelefono] = useState('')
    const [sintomas, setSintomas] = useState('')
    const [date, setDate] = useState(new Date())

    useEffect(() => {
      if(Object.keys(paciente).length > 0){
        const {id, nombrePaciente, email, telefono, sintomas, date} = paciente
        setId(id)
        setNombrePaciente(nombrePaciente)
        setEmail(email)
        setTelefono(telefono)
        setSintomas(sintomas)
        setDate(date)
      }

    }, [paciente])

    const handleCita = () => {
      if([nombrePaciente, email, telefono, sintomas].includes('')){
        Alert.alert(
          'Error',
          'Todos los campos son obligatorios',
          [{text: "Cancelar"}, {text: 'OK'}]
        )
      } else {

        const nuevoPaciente = {
          nombrePaciente,
          email, 
          telefono,
          sintomas,
          date
        }

        if(id){
          nuevoPaciente.id = id
          const pacientesActualizados = pacientes.map( pacienteState => pacienteState.id === nuevoPaciente.id ? nuevoPaciente : pacienteState)

          setPacientes(pacientesActualizados)
          setPaciente({})
          
        } else {
          nuevoPaciente.id = Date.now()

          setPacientes([...pacientes, nuevoPaciente])
        }
        setId('')
        setNombrePaciente('')
        setEmail('')
        setTelefono('')
        setSintomas('')

        Alert.alert(
          '¡Guardado con éxito!',
          `Cliente ${paciente.id ? 'editado' : 'guardado'} correctamente en la base de datos`
        )

        cerrarModal()
      }
    }
        
    return (
        <Modal
      visible={showModal}
      animationType='slide'
      >
        <Pressable style={stylesFormulario.closeButton} onPress={() => {
          cerrarModal()
          setPaciente({})
          setId(id)
          setNombrePaciente('')
          setEmail('')
          setTelefono('')
          setSintomas('')
          }}>
          <Text style={stylesFormulario.textButtonClose}>X Cancelar</Text>
        </Pressable>
        <View style={stylesFormulario.contenido}>
          <Text style={stylesFormulario.titulo}>{paciente.id ? 'Editar' : 'Nuevo'} <Text style={stylesFormulario.tituloBold}>paciente</Text></Text>
          <ScrollView>
            <Input  
              label={'Paciente'}
              placeholder={'Nombre del nuevo paciente'}
              keyboard={'default'}
              value={nombrePaciente}
              setValue={setNombrePaciente}
            />
            <Input 
              label={'Email'}
              placeholder={'Email del paciente'}
              keyboard={'email-address'}
              value={email}
              setValue={setEmail}
            />
            <Input 
              label={'Teléfono'}
              placeholder={'Teléfono del paciente'}
              keyboard={'number-pad'}
              value={telefono}
              setValue={setTelefono}
              maxLength={10}
            />
            <Input 
              label={'Síntomas'}
              placeholder={'Síntomas del paciente'}
              keyboard={'default'}
              value={sintomas}
              setValue={setSintomas}
              line={true}
              numberOfLines={4}
            />

            <View style={stylesFormulario.campo}>
              <Text style={stylesFormulario.label}>Fecha de Alta</Text>
              <View style={stylesFormulario.contenedorFecha}>
              <DatePicker 
                value={date}
                onChange={setDate}
                format="dd-mm-yyyy"
                height={100}
                markColor="#2778ec"
                markHeight={30}
                fadeColor="#fff"
                textColor="black"
              />
              </View>
            </View>

            <Pressable style={stylesFormulario.btnGuardar} onPress={handleCita}>
              <Text style={stylesFormulario.textBtnGuardar}>Guardar datos</Text>
            </Pressable>

          </ScrollView>

        </View>
      </Modal>
    )
}