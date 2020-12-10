<template>
  <div>
    <header class="nav-opt-sprite nav-locate-fr nav-lang-fr nav-ssl nav-unrec">
      <div class="container-fluid dekstop-nav">
        <div class="row">
          <!-- Logo -->
          <div class="col-sm-2">
            <div class="logo-area">
              <nuxt-link to="/">
                <img src="/img/logo.png" alt="Logo" class="img-fluid" />
              </nuxt-link>
            </div>
          </div>
          <!-- bar de recherche -->
          <div class="col-sm-6 pt-0">
            <Search />
          </div>

          <div class="col-sm-4"></div>
        </div>

        <div class="row">
          <!-- livraison -->
          <div class="col-xl-2 col-lg-2 col-md-2 col-sm-2 pl-2">
            <div class="nav-global-location">
              <nuxt-link to="/address" class="nav-a nav-a-2">
                <div class="nav-sprite" id="nav-packard-glow-loc-icon"></div>
                <div id="glow-ingress-block">
                  <span class="nav-line-1" id="glow-ingress-line1"
                    >Livrer à:</span
                  >
                  <span class="nav-line-2" id="glow-ingress-line2"
                    >Villebon</span
                  >
                </div>
              </nuxt-link>
            </div>
          </div>
          <!-- sopping -->
          <div class="col-xl-6 col-lg-5 col-md-4 col-sm-6 p-0">
            <div class="nav-fill">
              <div class="nav-shop">
                <nuxt-link
                  to="/history"
                  class="nav-a nav-a-2 nav-single-row-link"
                >
                  <span class="nav-line-2">
                    Historique de Navigation
                    <span
                      class="nav-icon nav-arrow"
                      style="visibility: visible "
                    ></span>
                  </span>
                </nuxt-link>
              </div>
              <div class="nav-xshop-container">
                <div class="nav-xshop">
                  <a href="#" class="nav-a">Offre du jour</a>
                  <a href="#" class="nav-a">Votre amazon.fr</a>
                  <a href="#" class="nav-a">Chèques-cadeaux</a>
                  <a href="#" class="nav-a">Enregistrement</a>
                  <a href="#" class="nav-a">Vendre</a>
                </div>
              </div>
            </div>
          </div>

          <!-- compte -->
          <div class="col-xl-4 col-lg-5 col-md-6 col-sm-4 p-0">
            <div class="nav-tools">
              <a
                href="#"
                id=" icp-nav-flyout"
                class="nav-a nav-a-2 icp-link-style-2"
              >
                <span class="icp-nav-link-inner">
                  <span class="nav-line-1">
                    <span class="icp-nav-globe-img-2"></span>
                    <span class="icp-nav-language">FR</span>
                  </span>

                  <span class="nav-line-2">
                    &nbsp;
                    <span
                      class="nav-icon nav-arrow"
                      style="visibility: visible"
                    ></span>
                  </span>
                </span>
              </a>
              <span class="icp-nav-link-border"></span>
              <template v-if="$auth.$state.loggedIn">
                <nuxt-link
                to="/profile"
                class="nav-a nav-a-2"
                id="nav-link-accountList"
                tabindex="0">
                <span class="nav-line-1">Bonjour, </span>
                <span class="nav-line-2">{{ $auth.$state.user.name }}</span>
              </nuxt-link>
              </template>
              <template v-else>
              <nuxt-link to="/login" class="nav-a nav-a-2" id="nav-link-accountList" tabindex="0">
                <span class="nav-line-1">Bonjour, identifiez-vous</span>
                <span class="nav-line-2">
                  Compte et liste
                  <span class="nav-icon nav-arrow" style="visibility: visible"></span>
                </span>
              </nuxt-link>
              </template>
              <nuxt-link to="/order" class="nav-a nav-a-2 nav-single-row-link">
                <span class="nav-line-1"></span>
                <span class="nav-line-2">Commande</span>
              </nuxt-link>
              <nuxt-link to="/cart" class="nav-a nav-a-2" id="nav-cart">
                <span aria-hidden="true" class="nav-line-1"></span>
                <span aria-hidden="true" class="nav-line-2"></span>
                <span class="nav-cart-icon nav-sprite"></span>
                <span
                  id="nav-cart-count"
                  aria-hidden="true"
                  class="nav-cart-count nav-cart-0"
                  >0</span
                >
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
import Search from "~/components/Search";

export default {
  components: { Search }
};
</script>

<style></style>
