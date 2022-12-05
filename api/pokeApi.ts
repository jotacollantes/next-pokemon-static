import axios from 'axios'
//!Creamos una instancia de axios
const pokeApi=axios.create({
    baseURL:'https://pokeapi.co/api/v2',
    //!La respuesta viene codificada y hay que decodificarla
    headers:  { 'Accept-Encoding': 'identity' }
})
//! La exportacion por defecto no tiene nombre
export default pokeApi