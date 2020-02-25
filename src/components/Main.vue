<template>
  <v-content>
    <section>
      <v-parallax :src="MainImage">
        <v-layout
          column
          align-center
          justify-center
          class="white--text"
        >
          <h1 class="white--text mb-2 display-1 text-center">Enjoy game</h1>
          <v-btn
            class="mt-12"
            color="purple lighten-2"
            dark
            large
          >
            Get Started
          </v-btn>
        </v-layout>
      </v-parallax>
    </section>

    <section>
      <v-layout
        column
        wrap
        class="my-12"
        align-center
      >
        <v-flex xs12 sm4 class="my-4">
          <div class="text-center">
            <h2 class="headline">The best way to start game developing</h2>
            <span class="subheading">
              We use the technique below.
            </span>
          </div>
        </v-flex>
        <v-flex xs12>
          <v-container grid-list-xl>
            <v-layout row wrap align-center>
              <v-flex xs12 md4>
                <v-card flat class="transparent">
                  <v-card-text class="text-center">
                    <v-icon x-large class="purple--text text--lighten-2">mdi-language-html5</v-icon>
                  </v-card-text>
                  <v-card-title primary-title class="layout justify-center">
                    <div class="headline text-center">HTML5</div>
                  </v-card-title>
                  <v-card-text>
                    HTML5 is a software solution stack that defines the properties and behaviors of web page content by implementing a markup-based pattern to it. HTML5 was the fifth and latest major version of HTML that is a World Wide Web Consortium (W3C) recommendation.</v-card-text>
                </v-card>
              </v-flex>
              <v-flex xs12 md4>
                <v-card flat class="transparent">
                  <v-card-text class="text-center">
                    <v-icon x-large class="purple--text text--lighten-2">mdi-language-css3</v-icon>
                  </v-card-text>
                  <v-card-title primary-title class="layout justify-center">
                    <div class="headline">CSS3</div>
                  </v-card-title>
                  <v-card-text>
                    Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language like HTML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript. CSS is designed to enable the separation of presentation and content, including layout, colors, and fonts.
                  </v-card-text>
                </v-card>
              </v-flex>
              <v-flex xs12 md4>
                <v-card flat class="transparent">
                  <v-card-text class="text-center">
                    <v-icon x-large class="purple--text text--lighten-2">mdi-language-javascript</v-icon>
                  </v-card-text>
                  <v-card-title primary-title class="layout justify-center">
                    <div class="headline text-center">Javascript</div>
                  </v-card-title>
                  <v-card-text>
                    Alongside HTML and CSS, JavaScript is one of the core technologies of the World Wide Web. JavaScript enables interactive web pages and is an essential part of web applications. The vast majority of websites use it for client-side page behavior, and all major web browsers have a dedicated JavaScript engine to execute it.
                  </v-card-text>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>
        </v-flex>
      </v-layout>
    </section>

    <section>
      <v-parallax :src="MainImage2" height="380">
        <v-layout column align-center justify-center>
          <div class="headline white--text mb-4 text-center">Web  Game development has never been easier</div>
          <em>Kick-start your application today</em>
        </v-layout>
      </v-parallax>
    </section>

    <section>
      <v-container grid-list-xl>
        <v-layout row wrap justify-center class="my-12">
          <v-flex xs12 sm4>
            <v-card flat class="transparent">
              <v-card-title primary-title class="layout justify-center">
                <div class="headline">Company info</div>
              </v-card-title>
              <v-card-text>
                We produce an HTML5 game. We all love games and like to think creatively. Thank you for loving our game.
              </v-card-text>
            </v-card>
          </v-flex>
          <v-flex xs12 sm4 offset-sm1>
            <v-card flat class="transparent">
              <v-card-title primary-title class="layout justify-center">
                <div class="headline">Contact us</div>
              </v-card-title>
              <v-card-text>
                If you have any questions, please send an e-mail.
              </v-card-text>
              <v-list class="transparent">
                <v-list-item>
                  <v-list-item-action>
                    <v-icon class="purple--text text--lighten-2">mdi-email</v-icon>
                  </v-list-item-action>
                  <v-list-item-content>
                    <v-list-item-title>realmojo88@gmail.com</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </section>

  </v-content>
</template>

<style>
.v-parallax {
  height: 500px !important;
}

@media (min-width: 320px) and (max-width: 480px) {
  .v-parallax {
    height: 300px !important;
  }
  .v-parallax__image {
    left: 0 !important;
  }
}
</style>

<script>
import MainImage from '@/assets/main.jpg'
import MainImage2 from '@/assets/main2.jpg'
export default {
  name: 'main-component',
  data: () => ({
    MainImage, MainImage2
  }),
}
</script>