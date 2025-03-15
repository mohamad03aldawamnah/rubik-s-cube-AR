<template>
  <div id="page-frame">
    <Header />
    <div class="main">
      <div id="home-content">
        <h1>About Us</h1>
        <p class="intro">
          Welcome to our Rubik’s Cube AR Solver project!
          <br> We are a passionate team of developers and designers dedicated <br> to creating innovative solutions that blend technology and education.
        </p>

        <section>
          <h2>Our Mission</h2>
          <p>
            Our mission is to make solving the Rubik’s Cube accessible and fun for everyone. <br> By combining <strong>Augmented Reality (AR)</strong> and advanced <strong>color detection</strong>, <br>we provide an interactive and intuitive way to learn and solve the cube.
          </p>
        </section>

        <section>
          <h2>What We Do</h2>
          <p>We’ve built a tool that uses cutting-edge technology to:</p>
          <p>Detect the colors of a Rubik’s Cube using computer vision.</p>
          <p>Generate step-by-step solutions with an efficient solving algorithm.</p>
          <p>Visualize the solving process in an immersive AR environment.</p>

        </section>

        <section>
          <h2>Our Team</h2>
          <p>We are a diverse team of developers, designers, and problem-solvers who share <br> a love for technology and puzzles. Meet the people behind the project:</p>
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
    </div>
  </div>
</template>

<script setup>
import Header from '@/components/headers/Header.vue';
</script>

<style scoped>
.main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(227deg, #165b9c 20.72%, #81bee4 78.01%);
  border-radius: 30px;
  width: fit-content;
  margin: auto;
  padding: 20px;
  box-sizing: border-box;
}

h1 {
  font-size: clamp(40px, 5vw, 80px);
  font-family: "Gochi Hand", cursive;
  color: #32284a;
  text-align: center;
}

h2 {
  font-size: clamp(30px, 3vw, 50px);
  font-family: "Gochi Hand", cursive;
  color: #32284a;
  margin-top: 20px;
}

p {
  font-family: "Baloo 2";
  font-size: clamp(16px, 2vw, 20px);
  color: #32284a;
  line-height: 1.6;
}

.intro {
  font-size: clamp(20px, 2.5vw, 30px);
  text-align: center;
  margin-bottom: 30px;
}

ul {
  font-family: "Baloo 2";
  font-size: clamp(16px, 2vw, 20px);
  color: #32284a;
  line-height: 1.6;
  padding-left: 20px;
}

section {
  margin-bottom: 30px;
}
</style>