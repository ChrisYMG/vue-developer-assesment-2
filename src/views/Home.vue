<template>
  <div class="home-content">
    <h1>{{ this.$store.getters.appName }}</h1>
    <h2 class="title">App detalles de películas</h2>
    <p class="input-instructions">
      Por favor ingresa el título completo de la película.
    </p>
    <input class="input" v-model="searchQuery" placeholder="Buscar..." />
    <button type="submit" class="submit" @click="handleSearch(searchQuery)">
      Buscar
    </button>

    <section>
      <History />
    </section>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations, mapGetters } from "vuex";
import History from "@/components/History.vue";
import axios from "axios";
export default {
  name: "Home",
  components: {
    History,
  },
  data() {
    return { searchQuery: "" };
  },
  computed: {
    ...mapGetters(["getMovieInfo", "saveHistory"]),
  },
  methods: {
    async handleSearch(searchQuery) {
      try {
        const response = await axios.get(
          `http://www.omdbapi.com/?t=${searchQuery}&apikey=5249c43b`
        );

        const data = response.data;

        if (data.Title) {
          const movieInfo = {
            title: data.Title,
            poster: data.Poster,
            released: data.Released,
            rating: data.Ratings[1].Value,
            plot: data.Plot,
          };
          this.$store.commit("getMovieInfo", movieInfo);
          this.$store.commit("saveHistory", movieInfo);
          this.$router.push({
            name: "details",
            params: { title: this.getMovieInfo.title },
          });
        }
      } catch (error) {
        console.error("Error al realizar la búsqueda:", error);
      }
    },
  },
};
</script>

<style scoped>
.home-content {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px 0;
  padding: 20px;
}
.title {
  font-size: 36px;
  color: rgb(109, 109, 109);
}
.input-instructions {
  color: rgb(109, 109, 109);
  font-size: 20px;
}

.input,
.submit {
  padding: 10px;
  font-size: 16px;
  border-radius: 10px;
  border-block: 1px solid gray;
  color: rgb(109, 109, 109);
}

.submit {
  margin-left: 10px;
  background-color: rgb(0, 110, 255);
  color: white;
  border-style: none;
}

.submit:hover {
  opacity: 0.6;
  cursor: pointer;
}

@media (min-width: 768px) {
  .home-content {
    width: 40vw;
    margin: 0 auto;
  }
}
</style>
