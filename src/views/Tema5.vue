<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Herramientas de producción

    .row.mb-5.align-items-stard
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/temas/tema_5/img_1.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-left").mb-3 La producción de contenidos narrativos no se limita a la creatividad: demanda la correcta utilización de herramientas digitales que permitan integrar imagen, sonido y texto de forma coherente y emocionalmente significativa.
        p.mb-3 En entornos digitales saturados de estímulos, hay que destacar que se requiere no solo de ideas potentes, sino también de una ejecución técnica que respalde el mensaje, por eso, es importante el manejo de recursos de producción que, más allá de facilitar el proceso, elevan la calidad narrativa.
        .row.mb-5.align-items-center
          .col-lg-2.mb-0
            figure
              img(src="@/assets/curso/temas/tema_5/img_3.svg", data-aos="zoom-in")
          .col-lg-10
            p.mb-3 Cada recurso de producción es una herramienta que amerita el estudio correspondiente, a continuación presentamos algunas de ellas, e invitamos para que se estudien a profundidad a fin de que la producción de contenidos narrativos cobre un alto valor de calidad; antes de entrar en detalle, cabe mencionar que el contenido narrativo se presenta en diversos tipos, y que para cada uno de ellos, se podrán usar diferentes herramientas, los tipos más comunes incluyen:

    .row.justify-content-center.align-items-center.mb-0
        .col-12.col-lg-10.mb-4(data-aos="fade-left")
          p.mb-0 Existen múltiples tipos de contenido digital, cada uno con características específicas que determinan su funcionalidad dentro de una estrategia de comunicación.
        .col-12.col-lg-10.mb-3(data-aos="fade-left")
          .titulo-sexto.color-acento-contenido
            h5 Figura 5.
            |    Tipos de contenido visual y auditivo
          figure
            img(src="@/assets/curso/temas/tema_5/img_4.svg", class="img-fluid d-none d-lg-block img100")
            img(src="@/assets/curso/temas/tema_5/img_5.svg", class="img-fluid d-block d-lg-none img100")
          figcaption 
            p <b>Fuente:</b> SENA, 2025.

    separador  

</template>

<script>
export default {
  name: 'Tema5',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
