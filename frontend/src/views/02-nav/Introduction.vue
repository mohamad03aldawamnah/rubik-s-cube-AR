<template>
  <div id="page-frame">
    <Header />
    <div class="main">
      <div id="home-content">
        <h1>Introduction</h1>
        <p class="tagline">
          Revolutionizing the way you solve the Rubik’s Cube with the power of Augmented Reality and AI.
        </p>

        <section>
          <h2>What is the Rubik’s Cube AR Solver?</h2>
          <p>
            The Rubik’s Cube AR Solver is an innovative tool designed to help you solve the Rubik’s Cube effortlessly. <br> By combining <strong>Augmented Reality (AR)</strong> and advanced <strong>color detection</strong>, <br>we provide a seamless and interactive experience for both beginners and experts.
          </p>
        </section>

        <section>
          <h2>Why Choose Us?</h2>
          <ul>
            <li><strong>Interactive AR:</strong> Visualize the solving process in real-time with immersive AR technology.</li>
            <li><strong>Color Detection:</strong> Our advanced algorithms ensure precise color recognition for reliable solutions.</li>
            <li><strong>Step-by-Step Guidance:</strong> Follow easy-to-understand instructions to solve the cube at your own pace.</li>
            <li><strong>Educational and Fun:</strong> Learn the logic behind the Rubik’s Cube while having fun!</li>
          </ul>
        </section>

        <section>
          <h2>How It Works</h2>
          <ol>
            <li>Scan your Rubik’s Cube using your device’s camera.</li>
            <li>Our system detects the colors and generates a solution.</li>
            <li>Follow the step-by-step AR instructions to solve the cube.</li>
          </ol>
        </section>

        <section>
          <h2>Get Started Today</h2>
          <p>
            Whether you're a beginner or a seasoned cuber, <br> our tool is here to make solving the Rubik’s Cube easier and more enjoyable. <br> Try it now and experience the future of cube solving!
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

.tagline {
  font-size: clamp(20px, 2.5vw, 30px);
  font-family: "Baloo 2";
  color: #32284a;
  text-align: center;
  margin-bottom: 40px;
}

h2 {
  font-size: clamp(30px, 3vw, 40px);
  font-family: "Gochi Hand", cursive;
  color: #32284a;
  margin-top: 40px;
  margin-bottom: 20px;
}

p {
  font-family: "Baloo 2";
  font-size: clamp(16px, 2vw, 20px);
  color: #32284a;
  line-height: 1.6;
}

ul, ol {
  font-family: "Baloo 2";
  font-size: clamp(16px, 2vw, 20px);
  color: #32284a;
  line-height: 1.6;
  text-align: left;
  padding-left: 20px;
  margin: 20px auto;
  max-width: 600px;
}

li {
  margin-bottom: 10px;
}
</style>