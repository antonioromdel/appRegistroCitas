import { useState } from 'react';
import { Text, View, Pressable, FlatList, ScrollView, Alert, Modal } from 'react-native';
import { styles } from './assets/styles/styles';
import Formulario from './assets/components/Formulario';
import Paciente from './assets/components/Paciente';
import InformacionPaciente from './assets/components/InformacionPaciente';

export default function App() {

  const [showModal, setShowModal] = useState(false)
  const [pacientes, setPacientes] = useState([])
  const [paciente, setPaciente] = useState({})
  const [modalPaciente, setModalPaciente] = useState(false)

  const pacienteEditar = id => {
    const pacienteEditar = pacientes.filter(paciente => paciente.id === id)
    setPaciente(pacienteEditar[0])

  }

  const pacienteEliminar = id => {
    Alert.alert(
      '¿Deseas eliminar este paciente?',
      'Un paciente eliminado no se puede recuperar',
      [
        { text: 'Cancelar'},
        { text: 'Sí, eliminar', onPress: () => {
          const pacienteEliminar = pacientes.filter(pacienteDelete => pacienteDelete.id !== id)
          setPacientes(pacienteEliminar)
        }}
      ]
    )
  }

  const cerrarModal = () => {
    setShowModal(false)
  }

  return (
    <View style={styles.micontenedor}>
      <Text style={styles.title}>Administrador de pacientes</Text>
      <Text style={styles.subTitle}>Gestiona tus propios pacientes</Text>

      <Pressable style={styles.myButton} onPress={() => {setShowModal(!showModal)}}>
        <Text style={styles.textButton}>Añadir paciente</Text>
      </Pressable>
      <ScrollView style={styles.scroll}>
      {pacientes.length === 0 ? <Text style={styles.textNoPacientes}>No hay pacientes registrados.</Text> : 
        <View style={styles.listaPacientes}>
          <Text style={styles.textListaPacientes}>Lista de pacientes: {pacientes.length} </Text>
          <FlatList 
            data={pacientes}
            keyExtractor={ (item) => item.id }
            renderItem={({item}) => {
              return (
                <Paciente 
                  item={item}
                  setShowModal={setShowModal}
                  setPaciente={setPaciente}
                  pacienteEditar={pacienteEditar}
                  pacienteEliminar={pacienteEliminar}
                  setModalPaciente={setModalPaciente}
                />
              )
            }}

          />
        </View>
      }
      </ScrollView>

      {showModal && (
        <Formulario 
          cerrarModal={cerrarModal}
          setPacientes={setPacientes}
          pacientes={pacientes}
          paciente={paciente}
          setPaciente={setPaciente}
        />
      )}

      <Modal
        visible={modalPaciente}
        animationType='fade'  
      >
        <InformacionPaciente
          paciente={paciente}
          setPaciente={setPaciente}
          setModalPaciente={setModalPaciente}
        />
      </Modal>

    </View>

  );
}