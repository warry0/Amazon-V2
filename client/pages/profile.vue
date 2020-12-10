<template>
  <main>
    <div class="container-fluid c-section">
      <div class="row">
        <div class="col-sm-3"></div>
        <div class="col-sm-6">
          <div class="a-spacing-top-medium"></div>
          <h2 style="text-align: center">Modifier le profile</h2>
          <form>
            <div class="a-spacing-top-medium">
              <label> Nom </label>
              <input
                type="text"
                class="a-input-text"
                style="width: 100%"
                v-model="name"
                :placeholder="$auth.$state.user.name"
              />
            </div>
            <div class="a-spacing-top-medium">
              <label> Email </label>
              <input
                type="text"
                class="a-input-text"
                style="width: 100%"
                v-model="email"
                :placeholder="$auth.$state.user.email"
              />
            </div>
            <div class="a-spacing-top-medium">
              <label> Mot de passe </label>
              <input
                type="text"
                class="a-input-text"
                style="width: 100%"
                v-model="password"
                :placeholder="$auth.$state.user.password"
              />
            </div>
            <!-- Button -->
            <hr />
            <div class="a-spacing-top-large">
              <span class="a-button-register">
                <span class="a-button-inner">
                  <span class="a-button-text" @click="onUpdateProfile"
                    >Validé</span
                  >
                </span>
              </span>
            </div>
          </form>
          <br />
          <br />
        </div>
        <div class="col-sm-3"></div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      email: "",
      password: " "
    };
  }
};
</script>

<style></style>
