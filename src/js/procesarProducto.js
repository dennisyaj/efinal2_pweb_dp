import axios from "axios";

export const ingresarProductoFachada = async (body) => {
     await ingresarProducto(body)
}
const ingresarProducto = async (body) => {
    const data = axios.post(`http://localhost:8081/API/Facturacion/V1/productos`, body).then(r => r.data)
}

