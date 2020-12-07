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
  body{
    font-size: 13px;
    line-height: 19px;
    color: #111;
  }
</style>
