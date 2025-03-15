<!-- src/components/HomeTemplate.vue -->
<template>
  <div id="home-frame">
    <Header />
    <div class="main">
      <img id="home-img" src="/images/junjiehome.png" />
      <div id="home-content">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
#home-frame {
  border-radius: 25px;
  padding-bottom: clamp(30px, 10vh, 500px);
  margin: 3px;

}

.main {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  border-radius: 30px;
  width: 80%;
  margin: 0 auto;
  box-sizing: border-box;
}

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
}

#home-content h1 {
  font-size: clamp(45px, 5vw, 100px);
  font-family: "Gochi Hand", cursive;
  margin-bottom: 1vh;
  color: white;
}

#home-content h2 {
  color: #332623;
  text-align: center;
  font-family: "Baloo 2";
  font-size: clamp(20px, 3vw, 40px);
  font-style: normal;
  font-weight: 600;
  line-height: 140%;
}

#home-content p {
  color: #332623;
  text-align: center;
  font-family: "Baloo 2";
  font-size: clamp(10px, 2vw, 20px);
  font-style: normal;
  font-weight: 600;
  line-height: 140%;
  width: 80%;
  margin: 0 auto;
  margin-bottom: 5vh;
}

#home-content a {
  font-family: "Baloo 2";
  font-size: clamp(12px, 3vw, 25px);
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

@media (max-width: 800px) {
  .main {
    flex-direction: column;
    width: 100%;
    margin: 0 auto;
    border-radius: 0;
  }

  #home-img {
    width: 40% !important;
    margin: 20px auto !important;
  }

  #home-content {
    width: 90% !important;
    margin: 20px auto !important;
  }
}

@media (max-width: 450px) {
  #home-img {
    width: 50% !important;
    margin: 10px auto !important;
  }

  #home-content {
    padding: 15px !important;
    margin: 10px auto !important;
  }

  #home-content h1 {
    font-size: clamp(32px, 9vw, 48px);
  }

  #home-content h2 {
    font-size: clamp(18px, 5vw, 28px);
  }

  #home-content p {
    font-size: clamp(14px, 4vw, 18px);
    line-height: 1.6;
  }

  #home-content a {
    width: 90% !important;
    font-size: clamp(16px, 4.5vw, 22px);
    padding: 12px 24px;
  }
}

@media (max-width: 768px) {
  #home-content h1 {
    font-size: clamp(35px, 8vw, 60px);
  }
}
</style>