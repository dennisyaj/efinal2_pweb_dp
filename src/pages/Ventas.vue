<template >
  <div class="encabezado">
    <div class="form-floating mb-3">
      <input class="form-control" type="text" placeholder="numeroVenta" v-model="numeroVenta">
      <label for="">NumeroVenta</label>
    </div>
    <div class="form-floating mb-3">
      <input class="form-control" type="text" placeholder="cedula" v-model="cedula">
      <label for="">cedula</label>
    </div>
    <button class="btn btn-primary" type="submit" v-on:click="">Guardar</button>
  </div>

  <div class="encabezado2">
    <div class="form-floating mb-3">
      <input class="form-control" type="text" placeholder="codigoBarras" v-model="codigoBarras">
      <label for="">codigoBarras: </label>
    </div>
    <div class="form-floating mb-3">
      <input class="form-control" type="text" placeholder="cantidad" v-model="cantidad">
      <label for="">cantidad:</label>
    </div>
    <button class="btn btn-primary" type="submit" v-on:click="agregar">Agregar</button>
    <ul>
      <li>"codigoBarras nombre cantidad precioUnitariosubtotal"</li>
      <li v-for="(item, index) in listProductos" :key="index">{{ item }}</li>
    </ul>

  </div>
</template>
<script>
import { buscarProductofachada } from '@/js/procesarVenta';
export default {
  data() {
    return {
      numeroVenta: null,
      cedula: null,
      codigoBarras: null,
      cantidad: null,
      listProductos: []
    }
  }, methods: {
    async agregar() {
      const { codigoBarras, nombre, cantidad, precioUnitario, subtotal } = await buscarProductofachada(this.codigoBarras, this.cantidad)

      const data = await buscarProductofachada(this.codigoBarras, this.cantidad)

      if (cantidad == null) {
        alert("stock insuficiente")
      } else {
        this.listProductos.push(data)
      }

      this.limpiar()
    },
    limpiar() {
      this.codigoBarras = null,
        this.cantidad = null
    }
  },
}
</script>
<style >
.encabezado2 {
  display: grid;
  grid-template-columns: auto auto auto;

}

.encabezado2 div {

  margin: 10px;

}

</style>
