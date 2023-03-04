import axios from "axios";

export const buscarProductofachada = async (codigo, cantidad) => {
     const data = await buscarProducto(codigo, cantidad)
        return data
}

const buscarProducto = async (codigo, cantidad) => {
    const data = axios.get(`http://localhost:8081/API/Facturacion/V1/ventas/${codigo}?cantidad=${cantidad}`).then(r=>r.data)
    return data
}