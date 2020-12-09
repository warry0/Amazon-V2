<template>
  <main class="listingPage">
    <div class="container-fluid">
      <div class="row">
        <div class="col-xl-2 col-lg-3 md-4 col-ms-4">
          <!-- slideBar -->
        </div>
        <!-- Main Content -->
        <div class="col-xl-10 col-lg-9 md-8 col-sm-8">
          <FeaturedProduct />
          <main class="mainResults">
            <ul class="s-result-list">
              <li
                class="s-result-item celwidget"
                v-for="product in products"
                :key="product._id"
              >
                <div class="item-container">
                  <!-- bestseller -->
                  <div class="a-spacing-micro">
                    <div class="bestSeller">
                      <a href="#">Best-seller</a>
                    </div>
                  </div>

                  <div>
                    <div class="row">
                      <!-- image -->
                      <div class="col-sm-3 text-center">
                        <a href="#">
                          <img
                            :src="product.photo"
                            style="width: 200px;"
                            class="image-fluid"
                          />
                        </a>
                      </div>

                      <div class="col-sm-9">
                        <div class="a-row a-spacing-small">
                          <!-- titre et date -->
                          <a href="#" class="a-link-normal">
                            <h2 class="a-size-medium">
                              {{ product.title }}
                              <span class="a-letter-space"></span>
                              <span class="a-letter-space"></span>
                              <span class="a-size-small a-color-secondary">
                                3 Sep 2019</span
                              >
                            </h2>
                          </a>
                        </div>
                        <!-- autre nom -->
                        <div class="a-row a-spacing-small">
                          <span class="a-size-small a-color-secondary"
                            >par</span
                          >
                          <span class="a-size-small a-color-secondary">
                            <a href="#" class="a-link-normal a-text-normal">
                              {{ product.owner.name }}
                            </a>
                          </span>
                        </div>
                        <!-- livraison -->
                        <div class="a-row">
                          <span class="a-size-small">Expédier en france</span>
                        </div>

                        <div class="row">
                          <div class="col-sm-7">
                            <div class="a-row a-spacing-none">
                              <a href="#" class="a-link-normal a-text-normal"
                                >Hardcover</a
                              >
                            </div>
                            <!-- prix -->
                            <div class="a-row a-spacing-none">
                              <a href="#" class="a-link-normal a-text-normal">
                                <span class="a-offscreen"
                                  >{{ product.price }}€</span
                                >
                                <span class="a-color-base sx-zero-spacing">
                                  <span class="sx-price sx-price-large">
                                    <sup class="sx-price-currency">€</sup>
                                    <span class="sx-price-whole">{{
                                      product.price
                                    }}</span>
                                    <sup class="sx-price-fractional">00</sup>
                                  </span>
                                </span>
                              </a>
                              <span class="a-letter-space"></span>
                              <span
                                class="a-size-base-plus a-color-secondary a-text-strike"
                                >28.00€</span
                              >
                            </div>
                            <!-- Essai audible -->
                            <div class="a-row a-spacing-none">
                              <span class="a-size-small a-color-secondary">
                                Gratuit avec essai Audible</span
                              >
                            </div>
                            <hr />

                            <!-- autre format -->
                            <span class="a-size-small a-color-secondary">
                              Autre Formats:
                              <span class="a-letter-space"></span>
                              <a
                                href="#"
                                class="a-size-small a-link-normal a-text-normal"
                                >CD Audio</a
                              >
                            </span>
                          </div>
                          <!-- eval -->
                          <div class="col-sm-5">
                            <div class="a-row a-spacing-mini">
                              <!-- etoile -->
                              <!-- <no-ssr>
                                <star-rating
                                  :rating="product.averageRating"
                                  :show-rating="false"
                                  :glow="1"
                                  :border-width="1"
                                  :rounded-corners="true"
                                  :read-only="true"
                                  :star-size="18"
                                  :star-points="[23,2,14,17,0,19,10,34,7,50,23,43,38,50,36,34,46,19,31,17]"
                                ></star-rating>
                              </no-ssr> -->
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </main>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import FeaturedProduct from "~/components/FeaturedProduct";

export default {
  components: {
    FeaturedProduct
  },
  async asyncData({ $axios }) {
    try {
      let response = await $axios.$get("/api/products");
      console.log(response.products);
      return {
        products: response.products
      };
    } catch (err) {
      console.log(err);
    }
  }
};
</script>

<style></style>
