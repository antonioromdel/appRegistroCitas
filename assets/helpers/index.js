export const formatFecha = (fecha) => {
        const nuevaFecha = new Date(fecha)
        const opciones = {
            weekDay: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        }

        return nuevaFecha.toLocaleDateString('es-ES', opciones)
}