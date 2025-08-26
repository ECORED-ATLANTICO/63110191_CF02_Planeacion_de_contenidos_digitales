<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .row.justify-content-center.align-items-center.mb-3
      .col-12.col-lg-9
        p.mb-2 El componente formativo Monitoreo estratégico del transporte terrestre, explora en profundidad la movilidad inteligente, abordando su concepto, vital importancia y las tendencias que la definen. Se vincula estrechamente con la sostenibilidad en la movilidad, detallando igualmente su concepto, importancia y tendencias para un futuro eficiente y responsable. Un pilar central es el monitoreo vial, desglosando su concepto, los diversos sistemas y tipos de monitoreo, la política que lo rige, los criterios de medición, los métodos empleados y las herramientas disponibles. La planificación se materializa en el plan de monitoreo vial, explicando su concepto, tipos, elementos clave y el procedimiento de elaboración.
        .row.justify-content-cente0r.align-items-center.mb-3
          .col-3.col-lg-3.mb-lg-0.mb-0.d-flex
            figure.w-100.d-flex.flex-column
              img(src='@/assets/curso/introduccion/img_2.png', class="img-fluid")
          .col-9.col-lg-9
            p.mb-  Para llevar a cabo este monitoreo, se estudian los dispositivos de seguimiento, sus tipos, modelos y la crucial automatización de sus funciones. Es por ello que se aborda el procedimiento operativo, diferenciando entre el proceso continuo - el proceso sistemático y presentando como resumen final la elaboración de un informe de seguimiento periódico que detalla los resultados de la ejecución.
      .col-12.col-lg-3.mb-lg-0.mb-0.d-flex
        figure.w-100.d-flex.flex-column
          img(src='@/assets/curso/introduccion/img_1.png', class="img-fluid").height-100
    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/X-HAyBJi1MI?si=FsYSgWCUXctMSAtO" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

      
</template>

<script>
export default {
  name: 'Introduccion',
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
