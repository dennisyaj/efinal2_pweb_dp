<template >
  <div class="form-floating mb-3">
    <input v-model="codigoBarras" class="form-control" type="text" placeholder="codigoBarras" />
    <label>codigoBarras: </label>
  </div>
  <div class="form-floating mb-3">
    <input class="form-control" type="text" placeholder="codigoBarras" v-model="nombre">
    <label for="">nombre</label>
  </div>
  <div class="form-floating mb-3">
    <input class="form-control" type="text" placeholder="codigoBarras" v-model="categoria">
    <label for="">categoria</label>
  </div>
  <div class="form-floating mb-3">
    <input class="form-control" type="text" placeholder="codigoBarras" v-model="stock">
    <label for="">stock</label>
  </div>
  <div class="form-floating mb-3">
    <input class="form-control" type="text" placeholder="codigoBarras" v-model="precio">
    <label for="">precio</label>
  </div>
  <button class="btn btn-primary" type="submit" v-on:click="registrarProducto">Registrar Producto</button>
</template>
<script>
import { ingresarProductoFachada } from '@/js/procesarProducto';
export default {
  data() {
    return {
      codigoBarras: null,
      nombre: null,
      categoria: null,
      stock: null,
      precio: null,
    }
  },
  methods: {
    registrarProducto() {
      const body = {
        "codigoBarras": this.codigoBarras,
        "nombre": this.nombre,
        "categoria": this.categoria,
        "stock": this.stock,
        "precio": this.precio
      }
      ingresarProductoFachada(body)
      this.limpiar()
    },
    limpiar() {
      this.codigoBarras = null
      this.nombre = null
      this.categoria = null
      this.stock = null
      this.precio = null
    }
  },
}
</script>
<style ></style>
