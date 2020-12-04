<template>
  <main>
    <div class="container-fluid c-section">
      <div class="row">
        <div class="col-sm-3"></div>
        <div class="col-sm-6">
          <div class="a-spacing-top-medium"></div>
          <h2 style="text-align: center">Ajouter un nouveau propriétaire </h2>
          <form>
            <div class="a-spacing-top-medium">
              <label> Nom du propriétaire </label>
              <input
                type="text"
                class="a-input-text"
                style="width: 100%"
                v-model="name"
              />
            </div>
            <div class="a-spacing-top-medium">
              <label> À propos </label>
              <input
                type="text"
                class="a-input-text"
                style="width: 100%"
                v-model="about"
              />
            </div>
            <div class="a-spacing-top-medium">
                <label style="margin-bottom: 0px;">Ajouter une photo</label>
                <div class="a-row a-spacing-top-medium">
                  <label class="choosefile-button">
                    <i class="fal fa-plus"></i>
                    <input type="file" @change="onFileSelected" />
                    <p style="margin-top: -70px">{{ fileName }}</p>
                  </label>
                </div>
              </div>
            <!-- Button -->
            <hr />
            <div class="a-spacing-top-large">
              <span class="a-button-register">
                <span class="a-button-inner">
                  <span class="a-button-text" @click="onAddOwner">Validé</span>
                </span>
              </span>
            </div>
          </form>
          <br />
          <ul class="list-group">
            <li v-for="owner in owners" :key="owner._id" class="list-group-item">{{ owner.name }}</li>
          </ul>
        </div>
        </div>
        <div class="col-sm-3"></div>
      </div>
  </main>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    try {
      let response = await $axios.$get("http://localhost:3000/api/owners");
      return {
        owners: response.owners
      };
    } catch (err) {
      console.log(err);
    }
  },

  data() {
    return {
      name: "",
      about: "",
      selectedFile: null,
      fileName: ""
    };
  },

  methods: {
    onFileSelected(event) {
      this.selectedFile = event.target.files[0];
      this.fileName = event.target.files[0].name;
    },
    async onAddOwner() {
      try {
        let data = new FormData();
        data.append("name", this.name);
        data.append("about", this.about);
        data.append("photo", this.selectedFile, this.selectedFile.name);
        let response = await this.$axios.$post(
          "http://localhost:3000/api/owners",
          data
        );

        this.owners.push(this.name);
       
      } catch (err) {
        console.log(err);
      }
    }
  }
       
};
</script>

<style></style>
