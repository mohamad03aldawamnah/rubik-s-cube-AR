<template>
  <Header/>
  <HomeTemplate>
    <HomeIndex></HomeIndex>
  </HomeTemplate>
</template>

<script setup>
import Header from '@/components/headers/Header.vue';
import HomeTemplate from '@/components/templates/HomeTemplate.vue';
import HomeIndex from "@/views/01-index/HomeIndex.vue";
</script>

<style scoped>
</style>