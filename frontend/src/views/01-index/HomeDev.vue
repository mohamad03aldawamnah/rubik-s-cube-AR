<template>
  <Header/>
  <HomeTemplate>
        <img id="home-img" src="/images/junjiehome.png" />
        <div id="home-content">
          <h1>DEV-MODE</h1>
          <br>
          <router-link to="/aframe-template" class="home-content__button">A-Frame.vue</router-link>
          <a href="/pages/01-ar/ar-buttons.html">AR-Buttons.html</a>
          <a href="/pages/01-ar/ar-buttons-vr-cube.html">AR-BtnsCube.html</a>
          <a href="/pages/01-ar/ar-keyboard.html">AR-Keyboard.html</a>
          <a href="/pages/02-vr/vr-buttons.html">VR-Buttons.html</a>
          <a href="/pages/02-vr/vr-keyboard.html">VR-Keyboard.html</a>
        </div>
  </HomeTemplate>
</template>

<script setup>
import HomeTemplate from '@/components/templates/HomeTemplate.vue';

import Header from '@/components/headers/Header.vue';
import { ref } from 'vue';

const isModalVisible = ref(false);

const showModal = () => {
  isModalVisible.value = true;
};

const hideModal = () => {
  isModalVisible.value = false;
};
</script>

<style scoped>
#home-img {
  width: 20%;
  height: auto;
  margin-top: 4vh;
  margin-bottom: 4vh;
  margin-inline: 2vw;
}

#home-content {
  flex: 1;
  text-align: center;
  border-radius: 30px;
  background-color: skyblue;
  box-sizing: border-box;
  margin-inline: 2vh;
  margin-top: clamp(2vh, 1vh, 10%);
  margin-bottom: clamp(2vh, 1vh, 10%);
  padding: 0 !important; /* 强制清除所有 padding */
  height: clamp(2vh, 1vh, 10%);
  overflow-y: auto;
  background-image: url(/images/Rubikcube.jpg);
  background-repeat: repeat;
  background-size: cover;
}

#home-content h1 {
  font-size: clamp(45px, 5vw, 100px);
  color: white;
  font-family: "Gochi Hand", cursive;
  text-align: center;
}

#home-content h2 {
  color: white;
  font-family: "Baloo 2";
  font-size: clamp(20px, 3vw, 40px);
  font-style: normal;
  text-align: center;
  font-weight: 600;
  line-height: 140%;
}

#home-content p {
  color: white;
  text-align: center;
  font-family: "Baloo 2";
  font-size: clamp(10px, 2vw, 20px);
  font-style: normal;
  font-weight: 600;
  line-height: 140%;
  width: 80%;
  margin: 0 auto;
  margin-bottom: 2.5vh;
}

#home-content a {
  font-family: Arial, sans-serif;
  font-size: clamp(12px, 3vw, 25px);
  font-weight: bold;
  text-decoration: none;
  background-color: #4CAF50;
  color: white;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1% auto;
  width: clamp(250px, 30vw, 300px);
  padding: 10px 20px;
}

#home-content a:hover {
  background-color: #4b734e;
}

.home-content__button {
  font-family: Arial, sans-serif;
  font-size: clamp(15px, 4vw, 30px);
  font-weight: bold;
  text-decoration: none;
  color: white;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  width: clamp(250px, 30vw, 300px);
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.home-content__button--blue {
  background-color: #007bff;
}

.home-content__button--blue:hover {
  background-color: #0056b3;
}

@keyframes fadeInScale {
  from {
    opacity: 0;
    transform: scale(0.5);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

@media (max-width: 450px) {
  #home-img {
    width: 40% !important;
    margin: 10px auto !important;
  }

  #home-content {
    padding: 15px !important;
    margin: 10px auto !important;
  }

  #home-content p {
    font-size: clamp(14px, 4vw, 18px);
    line-height: 1.6;
  }

  #home-content a,
  .home-content__button {
    width: 90% !important;
    font-size: clamp(16px, 4.5vw, 22px);
    padding: 12px 24px;
  }
}

@media (max-width: 800px) {
  #home-img {
    width: 25% !important;
    margin: 20px auto !important;
  }

  #home-content {
    width: 100% !important;
    margin: 20px auto !important;
    border-radius: 0;
  }
}
</style>

