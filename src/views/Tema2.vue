<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Estrategias de contenidos

    .bloque-texto-t.justify-content-center.align-items-center.mb-0(data-aos="zoom-in-right")
      .bloque-texto-t__img.mb-0
        img(src='@/assets/curso/temas/tema_2/img_1.png')
      .bloque-texto-t__texto.col-10.mb-0
        p.mb-0 El <em>Storytelling</em> se materializa en la creación de estrategias de contenido que permiten transmitir mensajes de manera persuasiva y conectar con la audiencia. Estas estrategias se basan en diferentes tipos de narrativas, adaptadas según el contexto y el canal de comunicación.

    separador
          
    #t_2_1.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 2.1	Narrativas comunes
    .mb-3

    p.mb-5 Existen diversos enfoques narrativos dentro del <em>Storytelling</em>, cada uno con estructuras y objetivos distintos; los más utilizados en el <em>marketing</em> y la comunicación digital incluyen:
    
    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-4.mb-lg-0.mb-3(data-aos="zoom-in-right")
        figure(data-aos="zoom-out-up")
          img(src='@/assets/curso/temas/tema_2/img_2.png', class="img-fluid")
      .col-12.col-lg-8
        .custom-slider.p-5.p-sm-3(data-aos="zoom-in-right")
          SlyderF(columnas="col-12 col-sm-6 col-md-6 col-lg-6")
            .tarjeta--color-adicional-1.h-95
              .row.justify-content-center.align-items-center.mb-0
                .col-8.mb-3
                  .tarjeta--1
                .tarjeta--slider__title.mb-3.bg-color-acento-contenido.text-center.fw-bold Narrativa heroica
                .tarjeta--slider__content.text-center Presenta un personaje que enfrenta desafíos y supera obstáculos, generando inspiración en la audiencia.
            .tarjeta--color-adicional-1.h-95
              .row.justify-content-center.align-items-center.mb-0
                .col-8.mb-3
                  .tarjeta--2
                .tarjeta--slider__title.mb-3.bg-color-acento-contenido.text-center.fw-bold Narrativa emocional
                .tarjeta--slider__content.text-center Apela a sentimientos profundos como nostalgia, felicidad o motivación para generar conexión.
            .tarjeta--color-adicional-1.h-95
              .row.justify-content-center.align-items-center.mb-0
                .col-8.mb-3
                  .tarjeta--3
                .tarjeta--slider__title.mb-3.bg-color-acento-contenido.text-center.fw-bold Narrativa de transformación 
                .tarjeta--slider__content.text-center Muestra un cambio significativo en la vida del personaje, destacando el impacto de un producto o servicio.
            .tarjeta--color-adicional-1.h-95
              .row.justify-content-center.align-items-center.mb-0
                .col-8.mb-3
                  .tarjeta--4
                .tarjeta--slider__title.mb-3.bg-color-acento-contenido.text-center.fw-bold Narrativa educativa 
                .tarjeta--slider__content.text-center Explica conceptos y guía a la audiencia mediante ejemplos prácticos.

    .bg_img_3.mb-3
      .row.justify-content-center.align-items-center.mb-0
        .col-12.col-lg-10.mb-0
          .cita-decorada
            blockquote.cita-decorada__caja.cita-decorada__caja--fondo-3.p-3
              .row.justify-content-center.align-items-center
                .col-12.col-lg-9.order-2.order-lg-1
                  p.cita-decorada__texto <B>Ejemplo empresarial:</B> La campaña <em>“Just Do It” de Nike</em> utiliza una narrativa heroica, mostrando historias de atletas que superaron grandes retos, reforzando el mensaje de determinación y esfuerzo.
                .col-12.col-lg-3.order-1.order-lg-2.mb-lg-0.mb-3.d-none.d-lg-block.p-0
                  img(src="@/assets/curso/temas/tema_2/img_8.png", class="img-fluid cita-decorada__imagen-flotante-4")

      separador
          
      #t_2_2.titulo-segundo.color-acento-contenido
        .h2(data-aos="fade-right") 2.2	Adaptación de narrativas
      .mb-3

      p.mb-5 El <em>Storytelling</em> no es estático, debe ajustarse a los distintos formatos digitales, garantizando su efectividad según el canal en el que se distribuye.

    .row.justify-content-center.align-items-center.mb-3
      .col-12.col-lg-10.mb-4
        .titulo-sexto.color-acento-contenido
            h5 Tabla 2.
            |  Estrategias de adaptación a formatos digitales
        .tabla-a.mb-5
          table
            caption
              p <b>Fuente:</b> Adaptado de HubSpot, 2022.
            thead
              tr.bg-table-01
                th Formato Digital
                th Aplicación en <em>Storytelling</em>
            tbody
              tr
                td  Redes Sociales
                td  Uso de imágenes y videos cortos que transmiten emociones inmediatas.
              tr
                td  Blogs
                td  Desarrollo de relatos extensos con estructura narrativa completa.
              tr
                td  Videos
                td  Uso de visuales y sonido para profundizar el impacto de la historia.
              tr
                td  Interactivo
                td  Narrativas personalizadas con participación del usuario.
      .col-12.col-lg-10.mb-0
          .cita-decorada
            blockquote.cita-decorada__caja.cita-decorada__caja--fondo-4.p-0
              .row.justify-content-center.align-items-center
                .col-12.col-lg-3.mb-lg-0.mb-0.d-none.d-lg-block.p-0
                  img(src="@/assets/curso/temas/tema_2/img_10.png", class="img-fluid cita-decorada__imagen-flotante-5")
                .col-12.col-lg-9.cita-decorada__texto
                  p.mb-0 <B>Ejemplo empresarial:</B> <em>Airbnb</em> adapta sus historias según el formato; en su <em>blog</em> publica relatos de viajeros, en redes sociales comparte imágenes inspiradoras, y en video presenta testimonios de huéspedes.
              
      .col-12.col-lg-10.mb-3

        separador
          
        #t_2_3.titulo-segundo.color-acento-contenido
          .h2(data-aos="fade-right") 2.3	Casos de éxito
        .mb-3

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-2.mb-3
        img(src="@/assets/curso/temas/tema_2/img_11.png", class="img-fluid")
      .col-12.col-lg-8.mb-3
        p.mb-0 El <em>Storytelling</em> ha sido utilizado por grandes empresas para mejorar la conexión con su audiencia, diferenciarse en el mercado y fortalecer sus estrategias de <em>marketing</em> digital; a continuación, se presentan casos reales donde el <em>Storytelling</em> ha sido clave en la estrategia de comunicación.
    .bg_img_4.mb-5
      SlyderA(tipo="b").tarjeta.tarjeta--blanca.p-5
        .row.justify-content-center.align-items-center
          .col-12.col-lg-5.order-2.order-lg-1.mb-0
            h5 <em>Airbnb - Storytelling</em> basado en experiencias de usuarios
            p.mb-3 Airbnb ha construido su estrategia de comunicación en torno a historias reales de viajeros, mostrando cómo sus anfitriones y huéspedes han vivido experiencias únicas gracias a la plataforma.
            p.mb-0 <B>Narrativa utilizada:</B> transformación y emocional.
            p.mb-0 <B>Aplicación:</B> relatos de viajeros en <em>blogs</em> y videos.
            p.mb-0 <B>Impacto:</B> mayor confianza en la marca y crecimiento de usuarios.
          .col-12.col-lg-5.order-1.order-lg-2.mb-lg-0.mb-3
            figure
              img(src='@/assets/curso/temas/tema_2/img_12.png')
        .row.justify-content-center.align-items-center
          .col-12.col-lg-5.order-2.order-lg-1.mb-0
            h5 <em>Dove - Storytelling</em> de Empoderamiento y Diversidad
            p.mb-3 <em>Dove</em> implementó una campaña llamada <em>"Real Beauty"</em>, en la que mostraba historias de mujeres reales, promoviendo la aceptación de la belleza natural.
            p.mb-0 <B>Narrativa utilizada:</B> emocional y social.
            p.mb-0 <B>Aplicación:</B> videos, testimonios y campañas en redes sociales.
            p.mb-0 <B>Impacto:</B> posicionamiento de marca auténtica y fidelización del consumidor.
          .col-12.col-lg-5.order-1.order-lg-2.mb-lg-0.mb-3
            figure
              img(src='@/assets/curso/temas/tema_2/img_13.png', class="img-fluid")
        .row.justify-content-center.align-items-center
          .col-12.col-lg-5.order-2.order-lg-1.mb-0
            h5 <em>Spotify - Storytelling</em> de identidad y cotidianidad musical
            p.mb-3 Spotify, mediante campañas como “Wrapped”, ofrece resúmenes personalizados que evocan recuerdos y emociones, fortaleciendo la conexión emocional del usuario con la plataforma al reflejar su evolución y momentos vividos.
            p.mb-0 <B>Narrativa utilizada:</B> identitaria, introspectiva y experiencial.
            p.mb-0 <B>Aplicación:</B> campañas visuales y sociales basadas en datos personalizados <em>(Spotify Wrapped)</em>.
            p.mb-0 <B>Impacto:</B> alta viralización, reforzamiento del vínculo marca-usuario y sentido de pertenencia comunitaria.
          .col-12.col-lg-5.order-1.order-lg-2.mb-lg-0.mb-3
            figure
              img(src='@/assets/curso/temas/tema_2/img_14.png', class="img-fluid")
    
    .row.justify-content-center.align-items-center.mb-3
      .col-12.col-lg-10.mb-4

        separador
          
        #t_2_4.titulo-segundo.color-acento-contenido
          .h2(data-aos="fade-right") 2.4 <em>Engagement</em> 
        .mb-3
    
    .bg_img_5.mb-3
      .bloque-texto-g.bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/temas/tema_2/img_15.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 El <em>engagement</em> es un factor clave en la <em>comunicación</em> digital, ya que determina el nivel de interacción y conexión que el público establece con un contenido; aplicar técnicas adecuadas de <em>Storytelling</em> permite fortalecer el compromiso de la audiencia y aumentar la efectividad de las estrategias.
      
      .row.justify-content-center.align-items-center.mb-5
        .col-12.col-lg-10.mb-2
          .titulo-sexto.color-acento-contenido
            h5 Figura 2.
            |    Estrategias para mejorar el <em>engagement</em> con <em>Storytelling</em> 
          figure
            img(src="@/assets/curso/temas/tema_2/img_16.svg", class="img-fluid d-none d-lg-block img100")
            img(src="@/assets/curso/temas/tema_2/img_17.svg", class="img-fluid d-block d-lg-none img100")
          figcaption 
            p <b> Fuente:</b> SENA 2024.
</template>

<script>
export default {
  name: 'Tema2',
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
