<template>
    <Header />
    <HomeTemplate>
      <div id="home-content">
        <h1>Introduction</h1>
        <p class="tagline">Revolutionizing the way you solve the Rubik’s Cube with the power of <strong>Augmented Reality.</strong></p>
        <br>

        <section>
          <h2>What is the Rubik’s Cube AR Solver?</h2>
          <p>
            The Rubik’s Cube AR Solver is an innovative tool designed to help you solve the Rubik’s Cube effortlessly. <br> By combining <strong>Augmented Reality (AR)</strong> and advanced <strong>color detection</strong>, <br>we provide a seamless and interactive experience for both beginners and experts.
          </p>
        </section>

        <section>
          <h2>Why Choose Us?</h2>
          <p><strong>Interactive AR:</strong> Visualize the solving process in real-time with immersive AR technology.</p>
          <p><strong>Color Detection:</strong> Our advanced algorithms ensure precise color recognition for reliable solutions.</p>
          <p><strong>Step-by-Step Guidance:</strong> Follow easy-to-understand instructions to solve the cube at your own pace.</p>
          <p><strong>Educational and Fun:</strong> Learn the logic behind the Rubik’s Cube while having fun!</p>
        </section>

        <section>
          <h2>How It Works</h2>
          <p>Scan your Rubik’s Cube using your device’s camera.</p>
          <p>Our system detects the colors and generates a solution.</p>
          <p>Follow the step-by-step AR instructions to solve the cube.</p>
        </section>

        <section>
          <h2>Get Started Today</h2>
          <p>
            Whether you're a beginner or a seasoned cuber, <br> our tool is here to make solving the Rubik’s Cube easier and more enjoyable. <br> Try it now and experience the future of cube solving!
          </p>
          <br>
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

#home-content strong{
  font-weight: bold;
  color: darkblue;
}

#home-content p{
  color: black;
  text-align: center;
  font-size: clamp(10px, 2vw, 20px);
  font-style: normal;
  line-height: 150%;
  width: 80%;
  margin: 0 auto;
}
</style>