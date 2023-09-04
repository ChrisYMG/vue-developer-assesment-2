<template>
  <div class="details-content">
    <button class="back" @click="goBackHome">Regresar</button>
    <div class="movie">
      <h2>{{ getHistory[this.movie].title }}</h2>
      <img :src="getHistory[this.movie].poster" alt="" />
      <p>Fecha de lanzamiento.</p>
      <p>{{ getHistory[this.movie].released }}</p>
      <p>Rotten Tomatoes.</p>
      <p>{{ getHistory[this.movie].rating }}</p>
      <p>Resumen.</p>
      <p>{{ getHistory[this.movie].plot }}</p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Details",
  data() {
    return {
      movie: "",
    };
  },
  computed: {
    ...mapGetters(["getHistory"]),
  },
  methods: {
    goBackHome() {
      this.$router.push({ path: "/" });
    },
  },
  created() {
    this.movie = this.$route.params.title;
  },
};
</script>

<style scoped>
.back {
  padding: 10px;
  font-size: 16px;
  border-radius: 10px;
  margin-left: 10px;
  background-color: rgb(0, 110, 255);
  color: white;
  border-style: none;
  margin-top: 20px;
}

.back:hover {
  opacity: 0.6;
  cursor: pointer;
}

.movie {
  color: rgb(109, 109, 109);
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 20px;
  gap: 20px 0;
}

.movie h2 {
  font-size: 30px;
  align-self: center;
}

.movie img {
  align-self: center;
  width: 70%;
}

.movie p:nth-child(2n + 1) {
  font-weight: bold;
  font-size: 20px;
}

.movie p:last-child {
  align-content: start;
  text-align: left;
}

@media (min-width: 768px) {
  .details-content {
    width: 40vw;
    margin: 0 auto;
  }

  .movie img {
    width: auto;
  }
}
</style>
