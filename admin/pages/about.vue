<template>
  <div>
    <h1>Hello</h1>
<i class="far fa-star"></i>
    <input v-model="text" />
    <button @click="onClick">click me</button>
  </div>
  
</template>
<script>
export default {
  data() {
    return {
      text: "je suis Amine"
    };
  },
  methods: {
    onClick() {
      alert(this.text)
    }
  },
};
</script>
