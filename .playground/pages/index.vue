<script setup lang="ts">
const year: number = (new Date).getFullYear()
</script>

<template>
  <c-section element="main" :is-container="false">
    <c-section element="header">
      <h1>Chia demo page</h1>
    </c-section>
    <c-section>
      <atoms-c-button to="/">Button</atoms-c-button>
    </c-section>
    <c-section element="footer">
      <p>Copyright &copy; {{ year }} <atoms-c-button inline to="https://www.michaelgale.dev">Michael Gale</atoms-c-button></p>
    </c-section>
  </c-section>
</template>
