<template>
  <Header />
  <HomeTemplate>
    <div id="home-content">
      <h1>About Us</h1>
      <p class="tagline">
        Welcome to our Rubik’s Cube AR Solver project! <br> We are a passionate team of developers and designers dedicated to creating innovative solutions that blend technology and education.
      </p>
      <br>

      <section>
        <h2>Our Mission</h2>
        <p>
          Our mission is to make solving the Rubik’s Cube accessible and fun for everyone. <br> By combining <strong>Augmented Reality (AR)</strong> and advanced <strong>color detection</strong>, <br>we provide an interactive and intuitive way to learn and solve the cube.
        </p>
      </section>

      <section>
        <h2>What We Do</h2>
        <p><strong>Color Detection:</strong> We detect the colors of a Rubik’s Cube using computer vision.</p>
        <p><strong>Efficient Algorithms:</strong> We generate step-by-step solutions with an efficient solving algorithm.</p>
        <p><strong>Immersive AR:</strong> We visualize the solving process in an immersive AR environment.</p>
      </section>

      <section>
        <h2>Our Team</h2>
        <p>We are a diverse team of developers, designers, and problem-solvers who share a love for technology and puzzles. Meet the people behind the project:</p>
        <p><strong>Mohamad Aldawansh:</strong> Color detection, algorithm</p>
        <p><strong>Daniel Jack Flynn:</strong> Frontend design and development, algorithm</p>
        <p><strong>Darragh Micheal Broderick:</strong> Frontend design and development, testing.</p>
        <p><strong>Junjie Zheng Feng:</strong> Frontend design and development, 3D modeling, and integration.</p>
      </section>

      <section>
        <h2>Join Us</h2>
        <p>
          This project is open-source and available under the <strong>MIT License</strong>. <br> Whether you're a developer, designer, or just a Rubik’s Cube enthusiast, <br>we welcome your contributions and feedback!
        </p>
      </section>
    </div>
  </HomeTemplate>
</template>

<script setup>
import Header from '@/components/headers/Header.vue';
import HomeTemplate from "@/components/templates/HomeTemplate.vue";
</script>

<style scoped>
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
  background-repeat: repeat;
  background-size: cover;
}

#home-content h1 {
  font-size: clamp(45px, 5vw, 100px);
  color: #000000;
  font-family: "Baloo 2";
  text-align: center;
  margin-bottom: 1vh;
}

#home-content h2 {
  color: black;
  font-size: clamp(20px, 3vw, 40px);
  font-style: normal;
  text-align: center;
  font-weight: 600;
  line-height: 140%;
  margin-bottom: clamp(2vh, 1vh, 10%);
}

#home-content strong {
  font-weight: bold;
  color: darkblue;
}

#home-content p {
  color: black;
  text-align: center;
  font-size: clamp(10px, 2vw, 20px);
  font-style: normal;
  line-height: 150%;
  width: 80%;
  margin: 0 auto;
}
</style>