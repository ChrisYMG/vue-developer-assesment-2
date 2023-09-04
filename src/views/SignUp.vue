<template>
  <h1>Crea una cuenta</h1>
  <input type="text" placeholder="Email" v-model="email" />
  <input type="password" placeholder="Password" v-model="password" />
  <button @click="register">Submit</button>
</template>

<script setup>
import { ref } from "vue";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "vue-router";
const email = ref("");
const password = ref("");
const router = useRouter();
const register = () => {
  createUserWithEmailAndPassword(getAuth(), email.value, password.value)
    .then((data) => {
      console.log("Resgistrado exitosamente");
      router.push("/home");
    })
    .catch((error) => {
      console.log(error.code);
      alert(error.message);
    });
};
</script>

<style></style>
