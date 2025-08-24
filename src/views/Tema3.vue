<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Planificación estratégica

    .row.justify-content-center.align-items-center.mb-0
      .col-8.col-lg-3.mb-lg-0.mb-3(data-aos="fade-left")
        figure
          img(src="@/assets/curso/temas/tema_3/img_1.png", class="img-fluid")
      .col-12.col-lg-7
        p.mb-3(data-aos="fade-left") La planificación estratégica de contenidos es el proceso mediante el cual se estructuran, organizan y programan los mensajes que una marca o negocio desea compartir con su audiencia. Esta planificación permite garantizar coherencia en la comunicación, optimizar la producción de contenido y aumentar su impacto.
        .bloque-texto-b.color-acento-contenido-5.p-4(data-aos="fade-left")
          .bloque-texto-b__texto
            i.fas.fa-quote-left
            h4.mb-0 Según <em>Pulizzi</em> (2018), la planificación de contenidos consiste en el diseño de estrategias organizadas para la creación, publicación y distribución de información, con el objetivo de cumplir metas comerciales y comunicacionales.
            i.fas.fa-quote-right



</template>

<script>
export default {
  name: 'Tema3',
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
