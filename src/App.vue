<template>
  <v-app>
    <Header />
    <v-main>
      <router-view />
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Header from "@/global/Header";
import Footer from "@/global/Header";
export default {
  name: "App",
  components: {
    Header,
    Footer,
  },

  data: () => ({
    //
  }),
};
</script>

