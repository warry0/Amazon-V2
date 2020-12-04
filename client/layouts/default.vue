<template>
  <div>
    <Navbar />
    <Nuxt />
    <Footer />
    
  </div>
</template>


<script>
import Navabr from "~/components/Navbar";
import Navbar from '../components/Navbar.vue';
import Footer from "~/components/Footer";

export default {
  components:{
    Navbar,
    Footer
  }
}
</script>

<style>

</style>
