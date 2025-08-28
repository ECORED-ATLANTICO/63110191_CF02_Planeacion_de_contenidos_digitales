<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 <em>Storytelling</em>
    .bg_img_1.mb-3
      .row.justify-content-center.align-items-center.mb-0
        .col-8.col-lg-3.mb-lg-0.mb-3(data-aos="fade-left")
          figure
            img(src="@/assets/curso/temas/tema_1/img_1.png", class="img-fluid")
        .col-12.col-lg-7
          p.mb-3(data-aos="fade-left") El <em>Storytelling</em> es una técnica de comunicación utilizada para transmitir mensajes a través de historias persuasivas, generando conexiones emocionales con el público; su aplicación en el <em>marketing</em> y la gestión de contenido digital permite captar la atención de la audiencia y mejorar la experiencia del usuario.
          .bloque-texto-b.color-acento-contenido-5.p-4(data-aos="fade-left")
            .bloque-texto-b__texto
              i.fas.fa-quote-left
              h4.mb-0 Según Kotler y Keller (2016), el <em>Storytelling</em> consiste en la construcción de relatos estratégicos que buscan influir en las percepciones, emociones y decisiones del consumidor.
              i.fas.fa-quote-right

        .col-12.col-lg-10.mb-3

          separador

          #t_1_1.titulo-segundo.color-acento-contenido
            .h2(data-aos="fade-right") 1.1	Elementos narrativos 
          .mb-3
          
          p.mb-5(data-aos="fade-left") Para desarrollar una historia efectiva, es importante incluir los siguientes elementos narrativos:

        .row.justify-content-center.align-items-stretch.mb-5
          .col-12.col-lg-5.mb-3(data-aos="fade-left")
            .tarjeta-numerada.color-secundario.p-5.pb-3.pt-3.h-100.d-flex.flex-column
              .tarjeta-numerada__numero
                figure
                  img(src="@/assets/curso/temas/tema_1/img_2.png", class="img-fluid")
              h6.mb-1 Personajes
              p.mb-0 Son el eje central de la historia y representan valores con los que la audiencia se identifica.
          .col-12.col-lg-5.mb-3(data-aos="fade-left")
            .tarjeta-numerada.color-secundario.p-5.pb-3.pt-3.h-100.d-flex.flex-column
              .tarjeta-numerada__numero
                figure
                  img(src="@/assets/curso/temas/tema_1/img_3.png", class="img-fluid")
              h6.mb-1 Trama 
              p.mb-0 Secuencia de eventos que construyen la historia y generan interés.
          .col-12.col-lg-5.mb-3(data-aos="fade-left")
            .tarjeta-numerada.color-secundario.p-5.pb-3.pt-3.h-100.d-flex.flex-column
              .tarjeta-numerada__numero
                figure
                  img(src="@/assets/curso/temas/tema_1/img_4.png", class="img-fluid")
              h6.mb-1 Conflicto
              p.mb-0 Problema que da sentido a la narrativa y permite captar la atención.
          .col-12.col-lg-5.mb-3(data-aos="fade-left")
            .tarjeta-numerada.color-secundario.p-5.pb-3.pt-3.h-100.d-flex.flex-column
              .tarjeta-numerada__numero
                figure
                  img(src="@/assets/curso/temas/tema_1/img_5.png", class="img-fluid")
              h6.mb-1 Mensaje
              p.mb-3 Idea clave que se busca transmitir.
        
        .row.justify-content-center.align-items-center.mb-0
          .col-12.col-lg-10.mb-0
            .cita-decorada
              blockquote.cita-decorada__caja.cita-decorada__caja--fondo-1
                .row.justify-content-center.align-items-center
                  .col-12.col-lg-8.p-4.order-2.order-lg-1
                    p.cita-decorada__texto  <B>Ejemplo empresarial:</B> Coca-Cola emplea el <em>Storytelling</em> emocional, construyendo historias sobre felicidad, unión y momentos especiales, lo que fortalece la conexión de la marca con sus consumidores
                  .col-12.col-lg-3.order-1.order-lg-2.d-none.d-lg-block
                    img(src='@/assets/curso/temas/tema_1/img_7.png',  class="img-fluid cita-decorada__imagen-flotante-1")

    .row.justify-content-center.align-items-center.mb-0
      .col-12.col-lg-10.mb-0

        separador
          
        #t_1_2.titulo-segundo.color-acento-contenido
          .h2(data-aos="fade-right") 1.2	Importancia
        .mb-3

    .bg_img_2.mb-3
      .row.justify-content-center.align-items-center.mb-5
        .col-12.col-lg-2.mb-lg-0.mb-3(data-aos="fade-left")
          figure.mb-0
            img(src="@/assets/curso/temas/tema_1/img_8.png", class="img-fluid").mb-0
        .col-12.col-lg-8.mb-0(data-aos="fade-left")
          .cajon.color-terciario-5.p-4.mb-0
            p.mb-0 El <em>Storytelling</em> es una herramienta poderosa en estrategias de <em>marketing</em>, ya que permite a las marcas crear experiencias memorables y emocionales en sus consumidores.

      .row.justify-content-center.align-items-center.mb-3
        .col-12.col-lg-10.mb-4
          .titulo-sexto.color-acento-contenido
              h5 Tabla 1.
              |  Beneficios del Storytelling en estrategias de <em>marketing</em>
          .tabla-a.mb-5
            table
              caption
                p <b>Fuente:</b> SENA, 2025.
              thead
                tr
                  th Beneficio
                  th Impacto en la Audiencia
              tbody
                tr
                  td  Humanización de la marca
                  td  Conecta a través de relatos personales que generan empatía con la audiencia.
                tr
                  td  Mayor retención del mensaje
                  td  Las personas retienen mejor información cuando está dentro de una historia.
                tr
                  td  Incremento del engagement
                  td  Una narrativa bien estructurada aumenta la interacción con el público.
                tr
                  td  Posicionamiento diferencial
                  td  Contar historias únicas ayuda a posicionarse frente a la competencia.

        .col-12.col-lg-10.mb-0
          .cita-decorada
            blockquote.cita-decorada__caja.cita-decorada__caja--fondo-2.p-3
              .row.justify-content-center.align-items-center
                .col-8.col-lg-1.d-none.d-lg-block
                  img(src='@/assets/curso/temas/tema_1/img_10.png',  class="img-fluid cita-decorada__imagen-flotante-2")
                .col-12.col-lg-8.cita-decorada__texto
                  h5 Qué es y cómo hacer un storytelling
                  p A continuación un video donde se apreciar la importancia del Storytelling en el marketing.
                .col-6.col-lg-3.mb-lg-0.mb-3
                  a.cita-decorada__imagen-flotante-3.boton.color-acento-botones(href="https://www.youtube.com/watch?v=77TAn3GuKSg" target="_blank")
                    span Ver video
                    i.fab.fa-youtube.me-2

    .row.justify-content-center.align-items-center.mb-3
      .col-12.col-lg-10.mb-3

        separador

        #t_1_3.titulo-segundo.color-acento-contenido
          .h2(data-aos="fade-right") 1.3	Conexiones emocionales
        .mb-3

        p.mb-5 El Storytelling no solo informa, sino que emociona y genera vínculos con el público; la clave para que una historia sea impactante es que resuene con las emociones y aspiraciones de las personas.
    
      .row.justify-content-center.align-items-center.mb-5
        .col-10.col-sm-10.col-md-10.col-lg-10.col-xl-10.col-xxl-10.mb-2
          .titulo-sexto.color-acento-contenido
            h5 Figura 1.
            |    Factores claves para una conexión emocional exitosa
          figure
            img(src="@/assets/curso/temas/tema_1/img_11.png", class="img-fluid d-none d-lg-block img100")
            img(src="@/assets/curso/temas/tema_1/img_12.png", class="img-fluid d-block d-lg-none img100")
          figcaption 
            p <b>Fuente:</b> SENA (2024).
</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
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
