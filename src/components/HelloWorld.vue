<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      Para referencias detalladas, consulte los siguientes documentos:
    </p>
    <ul class="list-unstyled">
      <li>
        <a
          href="https://www.inti.gob.ar/publicaciones/descargac/348"
          target="_blank"
          rel="noopener"
        ><i class="fas fa-hand-point-right" /> Manual de buenas practicas para producir compost hogareño</a>
      </li>
      <li>
        <a
          href="https://www.argentina.gob.ar/sites/default/files/instructivo_para_la_produccion_de_compost_domiciliario.pdf"
          target="_blank"
          rel="noopener"
        ><i class="fas fa-hand-point-right" /> Instructivo para la produccion de Compost Domiciliario</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: {
      type: String,
      required: true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  color: white;
}
</style>
