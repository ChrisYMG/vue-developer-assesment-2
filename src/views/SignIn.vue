<template>
  <h1>Entrar con cuenta</h1>
  <input type="text" placeholder="Email" v-model="email" />
  <input type="password" placeholder="Password" v-model="password" />
  <button @click="register">Submit</button>
  <button @click="goAccount">Crear Cuenta</button>
</template>

<script setup>
import { ref } from "vue";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "vue-router";
const email = ref("");
const password = ref("");
const router = useRouter();
const register = () => {
  signInWithEmailAndPassword(getAuth(), email.value, password.value)
    .then((data) => {
      console.log("Logeado exitosamente");
      router.push("/home");
    })
    .catch((error) => {
      console.log(error.code);
      alert(error.message);
    });
};
const goAccount = () => {
  router.push("/signup");
};
</script>

<style></style>
