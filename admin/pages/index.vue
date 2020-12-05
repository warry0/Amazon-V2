<template>
  <main>
    <div class="a-spacing-large"></div>
    <div class="container-fluid browsing-history">
      <div class="row">
        <div class="col-sm-8 col-8">
          <h1 style="text-align: center">
            Tous les produits
          </h1>
          <!-- boutons -->

          <div class="a-spacing-large"></div>
          <nuxt-link to="/products" class="a-button-buy-again margin-right-10"
            >Ajouter un produit</nuxt-link>

          <nuxt-link to="/category" class="a-button-history margin-right-10"
            >Ajouter une catégorie</nuxt-link
          >
          <nuxt-link to= "/owner" class="a-button-history margin-right-10"
            >Ajouter un propriétaire </nuxt-link
          >
        </div>
      </div>
    </div>

    <!-- listing Pages -->
    <div class="a-spacing-large"></div>
    <div class="container-fluid browsing-history">
      <div class="row">
        <div
          v-for="(product, index) in products"
          :key="product._id"
          class="col-xl-2 col-lg-2 col-md-3 col-sm-6 col-6 br bb"
        >
          <div class="history-box">
            <div class="center-text">
              <!-- image produit -->
              <a href="#" class="a-link-normal"></a>
              <img :src="product.photo" alt="" class="img-fluid" />

              <!-- titre produit -->
              <div class="a-spacing-top-base asin-title">
                <span class="a-text-normal">
                  <div class="p13n-sc-truncated">{{ product.title }}</div>
                </span>
              </div>

              <!-- note produit -->
              <div class="a-row">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>

                <span class="a-letter-space"></span>
                <span class="a-color-terciary a-size-small asin-reviews"
                  >(1732)</span
                >
              </div>

              <!-- prix produit -->
              <div class="a-row">
                <span class="a-size-base a-color-price">
                  <span class="p13n-sc-price">{{ product.price }}€</span>
                </span>
              </div>

              <!-- boutton produit -->

              <div class="a-row">
                <nuxt-link 
                :to="`/products/${product._id}`" 
                class="a-button-history margin-right-10"
                  >Modifier</nuxt-link>

                <!-- <a href="#" class="a-button-history margin-right-10"
                @click="onDeleteProduct(product._id, index)"
              >Delete</a> -->
                <a href="#" class="a-button-history margin-right-10"
                @click="onDeleteProduct(product._id, index)"
                  >Supprimer</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  //asyncData récupère les données avant le chargement de la page nuxt sur le navigateur
  //c'est bon pour le référencement(SEO) car les données seront chargées en premier
  async asyncData({ $axios }) {
    try {
      let response = await $axios.$get("http://localhost:3000/api/products");
      console.log(response.products)
      return {
        products: response.products
      };
    } catch (err) {}
  },
  methods:{
    async onDeleteProduct(id, index){
      try {
        let response = await this.$axios.$delete(
          `http://localhost:3000/api/products/${id}`
        );

        if (response.status) {
          // supprime
          this.products.splice(index, 1);
        }
      } catch (err) {
        console.log(err);
      }
    }
  }
};
</script>

<style></style>
