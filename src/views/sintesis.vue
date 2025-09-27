<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .row.justify-content-center.align-items-stard.mb-3
      .col-8.col-lg-3.mb-lg-0.mb-3(data-aos="fade-left")
        figure
          img(src="@/assets/curso/sintesis/img_1.png", class="img-fluid")
      .col-12.col-lg-8.mb-lg-0.mb-0(data-aos="fade-left")
        .row.justify-content-center.align-items-stard.mb-2
          .col-12.col-lg-10.mb-0
            p.mb-0 Este componente ofrece una visión integral del <i>storytelling</i> como herramienta estratégica para la creación de contenidos digitales con propósito. A lo largo de sus seis unidades temáticas, se abordan los fundamentos narrativos, su impacto en la comunicación y el <i>marketing</i>, así como las conexiones emocionales que fortalecen el vínculo entre marca y audiencia.
          .col-12.col-lg-2.d-none.d-lg-block.mb-0
            figure
              img(src="@/assets/curso/sintesis/img_2.png", class="img-fluid")  
        p.mb-0 Se exploran diversos tipos de narrativas y se analizan casos de éxito como Airbnb, Dove y Spotify, que demuestran cómo las historias bien construidas generan confianza, fidelización y posicionamiento. Además, se presentan técnicas para fortalecer el <i>engagement</i>, adaptando los relatos a formatos digitales como <i>blogs</i>, redes sociales, videos y experiencias interactivas.

    .row.justify-content-center.align-items-stard.mb-3
      .col-12.col-lg-9.order-2.order-lg-1(data-aos="fade-left")
        .cita-decorada
          blockquote.cita-decorada__caja.cita-decorada__caja--fondo-6
            p.mb-0.p-4 El resto del componente se enfoca en la planificación y producción de contenidos, incorporando herramientas como mapas narrativos, calendarios editoriales y plataformas digitales como Canva, CapCut y Trello. Se abordan los tipos y características del contenido digital, junto con las etapas clave del proceso de producción, desde la definición de objetivos hasta la edición final. Además, se desarrollan técnicas de redacción persuasiva y narrativa digital que permiten construir mensajes coherentes, emocionales y adaptados a distintos formatos. El componente también incluye criterios para evaluar la calidad técnica y narrativa de los recursos, asegurando que cada pieza cumpla con los estándares comunicacionales. Finalmente se menciona los aspectos relacionados con las diferentes tecnicas de escritura para los contenidos narrativos.
      .col-8.col-lg-3.order-1.order-lg-2.mb-lg-0.mb-3(data-aos="fade-left")
        figure
          img(src="@/assets/curso/sintesis/img_3.png", class="img-fluid")

    
    .row.justify-content-center
      .col-12.col-lg-12.mb-5.bgs.p-4.brad
        figure
          img(
            src="@/assets/curso/sintesis/sintesis.svg", 
            alt='El componente "Estrategias de contenido", desarrolla seis temáticas, storytelling en donde se aborda elementos narrativos, importancia y conexiones emocionales; estrategias de contenido, compuesta por narrativas comunes, adaptación de narrativas, casos de éxito y engagement; planificación estratégica con objetivos, calendarios, mapas de contenidos y herramientas; producción de contenidos con tipos, proceso, técnicas y adaptación; herramientas de producción con texto, imagen y sonido, y calidad de recursos; finaliza con técnicas de escritura, donde se aborda redacción persuasiva y creativa, captación de atención y mensajes breves.'
          )
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
