<template>
  <div class="home-container">
    <!-- 标题 -->
    <h1 class="home-container__title">
      <b class="home-container__title--blue">Ru</b><b class="home-container__title--orange">bi</b>k's C<b class="home-container__title--red">ube</b> <b class="home-container__title--green">AR</b>
    </h1>

    <!-- 导航栏 -->
    <nav class="home-container__nav">
      <ul>
        <li><button class="home-container__button" @click="showModal">Instructions</button></li>
        <li><a href="http://127.0.0.1:5000" class="home-container__link">Run and Scan</a></li>
        <li><a href="/pages/02-ar/ar-buttons.html" class="home-container__link">AR-Cube-Buttons-html</a></li>
        <li><a href="/pages/03-vr/vr-keyboard.html" class="home-container__link">VR-Keyboards-html</a></li>
      </ul>
    </nav>

    <!-- 模态框 -->
    <div v-if="isModalVisible" class="home-container__modal">
      <div class="home-container__modal-content">
        <span class="home-container__modal-close" @click="hideModal">×</span>
        <h2>Program Instructions</h2>
        <p>To start the program, click the "Run Program" button in the center of the home webpage.</p>
        <img class="home-container__modal-image" src="/images/Instruction-arrow.png" alt="Instruction Arrow" />
        <p>
          To use the colour detection program, align the cube with the green dots in the center and click the "Detect Colours" button, then save and next.
          Once you have scanned all six faces, a "Generate Cube" button will appear. Click it to create the cube. If you want to start scanning the cube from the beginning again, press the "Reset Cube" button.
        </p>
        <img class="home-container__modal-image" src="/images/ColourDetectInstructs.png" alt="Colour Detect Instructions" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isModalVisible: false
    };
  },
  methods: {
    showModal() {
      this.isModalVisible = true;
    },
    hideModal() {
      this.isModalVisible = false;
    }
  }
};
</script>

<style scoped>
/* 容器样式，包括背景图 */
.home-container {
  background-image: url(/images/Rubikcube.jpg);
  background-repeat: repeat;
  background-size: cover;
  border-radius: 30px;
  overflow: hidden;
  aspect-ratio: 1 / 1;
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

.home-container__title {
  text-align: center;
  margin: auto;
  background-color: #4CAF50;
  color: white;
  text-decoration: none;
  font-size: clamp(2.5em, 5vw, 70px);
  align-self: center;
  font-family: "Gochi Hand", cursive;
}

.home-container__title--blue { color: blue; }
.home-container__title--orange { color: orange; }
.home-container__title--red { color: red; }
.home-container__title--green { color: #48ee4d; }

.home-container__nav ul {
  list-style: none;
  padding: 0;
}

.home-container__nav li {
  text-align: center;
  padding: 0.5em;
  margin: auto;
  margin-top: 0.5em;
}

.home-container__link {
  display: inline-block;
  padding: 1vh 1vw;
  background-color: #0d5135;
  color: white;
  text-decoration: none;
  border-radius: 10px;
  font-size: clamp(1.5em, 2.5vw, 30px);
  align-self: center;
  font-family: "Gochi Hand", cursive;
  width: 10em;
}

.home-container__link:hover {
  background-color: #1fca24;
}

.home-container__button {
  display: inline-block;
  padding: 1vh 3vw;
  background-color: #93001b;
  color: white;
  text-decoration: none;
  border-radius: 10px;
  font-size: clamp(2em, 3.5vw, 50px);
  align-self: center;
  font-family: "Gochi Hand", cursive;
  width: 9em;
  border-style: unset;
}

.home-container__button:hover {
  background-color: #da0202;
}

.home-container__modal {
  display: block;
  position: fixed;
  z-index: 1;
  padding-top: 100px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  opacity: 0;
  transform: scale(0.9);
  animation: fadeInScale 1s ease forwards;
  background-color: rgba(0, 0, 0, 0.4);
}

.home-container__modal-content {
  background-color: #69e97e;
  margin: auto;
  padding: 20px;
  border: 0.5em solid #000000;
  border-radius: 10px;
  width: 60%;
  aspect-ratio: 4 / 3;
  text-align: center;
  font-family: Arial, sans-serif;
}

.home-container__modal-content h2 {
  font-size: 40px;
  font-weight: bold;
  color: #000000;
  margin-bottom: 16px;
}

.home-container__modal-content p {
  font-size: 20px;
  color: #333333;
  line-height: 1.6;
  margin-bottom: 16px;
}

.home-container__modal-close {
  color: #000000;
  float: right;
  margin-right: 0.5em;
  margin-top: 0.5em;
  font-size: 40px;
  font-weight: bold;
  cursor: pointer;
}

.home-container__modal-close:hover {
  color: #ff0000;
}

.home-container__modal-image {
  width: 40em;
  height: 30em;
  margin: 16px auto;
  display: block;
}
</style>