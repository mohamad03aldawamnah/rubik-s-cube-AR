<!-- src/views/01-homepage/home.vue -->
<template>
  <Header/>
  <HomeTemplate>
    <DarrIndex></DarrIndex>
  </HomeTemplate>
</template>

<script setup>
import Header from '@/components/Header.vue';
import HomeTemplate from '@/components/HomeTemplate.vue';
import DarrIndex from "@/views/01-index/DarrIndex.vue";
</script>

<style scoped>
</style>