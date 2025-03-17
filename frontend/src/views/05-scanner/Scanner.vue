<template>
  <Header></Header>
  <HomeTemplate>
    <div class="rubiks-cube-scanner">
      <h1>Rubik's Cube Color Scanner</h1>

      <div id="camera-container">
        <video id="camera" autoplay ref="camera"></video>
        <canvas id="overlay" ref="overlay"></canvas>
      </div>

      <div id="controls">
        <div id="instructions">{{ instructions }}</div>
        <div class="color-preview">
          <div
              v-for="(color, index) in colors"
              :key="index"
              :data-index="index"
              :style="{ backgroundColor: color ? `rgb(${color.r},${color.g},${color.b})` : '' }"
              @click="cycleColor(index)"
          >
            {{ color ? `${color.name}\n(${color.r},${color.g},${color.b})` : '' }}
          </div>
        </div>
        <button id="confirm-placement-btn" v-if="currentStep === -1" @click="confirmPlacement">
          Confirm Placement (Y)
        </button>
        <button id="capture-btn" v-if="showCaptureBtn" :disabled="captureDisabled" @click="scanCurrentFace">
          Scan {{ scanSequence[currentStep].face }} Face (Enter)
        </button>
        <button id="rescan-btn" v-if="showRescanBtn" @click="scanCurrentFace">
          Rescan {{ scanSequence[currentStep].face }} Face (R)
        </button>
        <button id="confirm-btn" v-if="showConfirmBtn" @click="nextStep">
          Confirm Back to Red Face (C)
        </button>
        <button id="next-btn" v-if="showNextBtn" @click="nextStep">
          Next Step (Space)
        </button>
      </div>

      <!-- 添加解决方案显示区域 -->
      <div v-if="solution" class="solution-container">
        <h2>Solution:</h2>
        <p>{{ solution }}</p>
      </div>
    </div>
  </HomeTemplate>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue';
import HomeTemplate from "@/components/templates/HomeTemplate.vue";
import Header from "@/components/headers/Header.vue";
import api from '@/utils/api';

const camera = ref(null);
const overlay = ref(null);
const instructions = ref('');
const colors = ref(Array(9).fill(null));
const currentStep = ref(-1);
const scanState = ref(0);
const captureDisabled = ref(false);
const scanResults = ref({});
const solution = ref(''); // 用于存储解决方案

const standardColors = {
  White: { r: 255, g: 255, b: 255 },
  Yellow: { r: 255, g: 255, b: 0 },
  Blue: { r: 0, g: 0, b: 255 },
  Green: { r: 0, g: 255, b: 0 },
  Red: { r: 255, g: 0, b: 0 },
  Orange: { r: 255, g: 165, b: 0 },
};

const colorCycle = ['White', 'Yellow', 'Blue', 'Green', 'Red', 'Orange'];

const scanSequence = [
  { face: 'Red', instruction: "Place the red center face towards the camera, then click 'Scan Red Face (Enter)'." },
  { face: 'White', instruction: "Place the white center face towards the camera, then click 'Scan White Face (Enter)'." },
  { face: 'ConfirmRed', instruction: "Place the red center face towards the camera, then click 'Confirm Back to Red Face (C)'." },
  { face: 'Yellow', instruction: "Place the yellow center face towards the camera, then click 'Scan Yellow Face (Enter)'." },
  { face: 'ConfirmRed', instruction: "Place the red center face towards the camera, then click 'Confirm Back to Red Face (C)'." },
  { face: 'Blue', instruction: "Place the blue center face towards the camera, then click 'Scan Blue Face (Enter)'." },
  { face: 'Orange', instruction: "Place the orange center face towards the camera, then click 'Scan Orange Face (Enter)'." },
  { face: 'Green', instruction: "Place the green center face towards the camera, then click 'Scan Green Face (Enter)'." },
];

onMounted(() => {
  initCamera();
  window.addEventListener('resize', handleResize);
  document.addEventListener('keydown', handleKeydown);
});

onUnmounted(() => {
  window.removeEventListener('resize', handleResize);
  document.removeEventListener('keydown', handleKeydown);
});

const initCamera = () => {
  navigator.mediaDevices.getUserMedia({
    video: {
      facingMode: 'environment',
      width: { ideal: 1280 },
      height: { ideal: 720 },
    },
  })
      .then((stream) => {
        camera.value.srcObject = stream;
        camera.value.onloadedmetadata = () => {
          initOverlay();
          drawGrid();
          drawCapturePoints();
          instructions.value = "Place the red center face towards the camera and the white center face upwards, then click 'Confirm Placement (Y)'.";
        };
      })
      .catch((err) => {
        console.error('Camera failed to load:', err);
        instructions.value = 'Unable to load camera. Please check device permissions or hardware support.';
      });
};

const initOverlay = () => {
  const container = document.getElementById('camera-container');
  const size = container.clientWidth * 0.3;
  overlay.value.width = size;
  overlay.value.height = size;
};

const drawGrid = () => {
  const ctx = overlay.value.getContext('2d');
  ctx.clearRect(0, 0, overlay.value.width, overlay.value.height);
  ctx.strokeStyle = 'rgb(0,0,0)';
  ctx.lineWidth = 1;

  const cellSize = overlay.value.width / 3;
  for (let i = 1; i < 3; i++) {
    ctx.beginPath();
    ctx.moveTo(i * cellSize, 0);
    ctx.lineTo(i * cellSize, overlay.value.height);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(0, i * cellSize);
    ctx.lineTo(overlay.value.width, i * cellSize);
    ctx.stroke();
  }
};

const drawCapturePoints = () => {
  const ctx = overlay.value.getContext('2d');
  ctx.fillStyle = 'rgba(0,0,0,0.2)';
  ctx.strokeStyle = '#fff';
  const cellSize = overlay.value.width / 3;

  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 3; col++) {
      const x = col * cellSize + cellSize / 2;
      const y = row * cellSize + cellSize / 2;

      ctx.beginPath();
      ctx.arc(x, y, 6, 0, 2 * Math.PI);
      ctx.fill();
      ctx.stroke();
    }
  }
};

const sampleColor = (x, y) => {
  const canvas = document.createElement('canvas');
  const videoWidth = camera.value.videoWidth;
  const videoHeight = camera.value.videoHeight;

  const cropSize = Math.min(videoWidth, videoHeight) * 0.375 * (2 / 3);
  const cropX = (videoWidth - cropSize) / 2;
  const cropY = (videoHeight - cropSize) / 2;

  canvas.width = cropSize;
  canvas.height = cropSize;
  const ctx = canvas.getContext('2d');

  ctx.drawImage(camera.value,
      cropX, cropY, cropSize, cropSize,
      0, 0, cropSize, cropSize
  );

  const scale = cropSize / overlay.value.width;
  const targetX = x * scale;
  const targetY = y * scale;

  const sampleData = ctx.getImageData(
      Math.max(0, targetX - 2),
      Math.max(0, targetY - 2),
      5, 5
  ).data;

  let totalR = 0, totalG = 0, totalB = 0;
  for (let i = 0; i < sampleData.length; i += 4) {
    totalR += sampleData[i];
    totalG += sampleData[i + 1];
    totalB += sampleData[i + 2];
  }

  const pixelCount = sampleData.length / 4;
  return {
    r: Math.round(totalR / pixelCount),
    g: Math.round(totalG / pixelCount),
    b: Math.round(totalB / pixelCount),
  };
};

const getColorName = (rgb) => {
  let minDistance = Infinity;
  let closestColor = 'Unknown';

  for (const [name, standard] of Object.entries(standardColors)) {
    const distance = Math.sqrt(
        Math.pow(rgb.r - standard.r, 2) +
        Math.pow(rgb.g - standard.g, 2) +
        Math.pow(rgb.b - standard.b, 2)
    );

    if (distance < minDistance) {
      minDistance = distance;
      closestColor = name;
    }
  }

  return closestColor;
};

const updateInstructions = () => {
  if (currentStep.value >= 0 && currentStep.value < scanSequence.length) {
    const step = scanSequence[currentStep.value];
    instructions.value = step.instruction;
  } else if (currentStep.value === scanSequence.length) {
    instructions.value = 'All faces have been scanned!';
    console.log(JSON.stringify(scanResults.value, null, 2));
  }
};

const scanCurrentFace = () => {
  captureDisabled.value = true;

  const cellSize = overlay.value.width / 3;
  const newColors = [];

  for (let i = 0; i < 9; i++) {
    const row = Math.floor(i / 3);
    const col = i % 3;
    const x = col * cellSize + cellSize / 2;
    const y = row * cellSize + cellSize / 2;

    if (i === 4) {
      const currentFace = scanSequence[currentStep.value].face;
      const standardColor = standardColors[currentFace];
      newColors.push({ ...standardColor, name: currentFace });
    } else {
      const color = sampleColor(x, y);
      const colorName = getColorName(color);
      const standardColor = standardColors[colorName] || { r: 0, g: 0, b: 0 };
      newColors.push({ ...standardColor, name: colorName });
    }
  }

  colors.value = newColors;

  const currentFace = scanSequence[currentStep.value].face;
  if (currentFace !== 'ConfirmRed') {
    scanResults.value[currentFace] = newColors.map((c) => c.name);
    scanState.value = 1;
  }

  updateInstructions();
  captureDisabled.value = false;
};

const cycleColor = (index) => {
  const currentColor = colors.value[index]?.name || 'White';
  const currentIndex = colorCycle.indexOf(currentColor);
  const nextIndex = (currentIndex + 1) % colorCycle.length;
  const nextColor = colorCycle[nextIndex];
  const standardColor = standardColors[nextColor];

  colors.value[index] = { ...standardColor, name: nextColor };

  const currentFace = scanSequence[currentStep.value].face;
  if (currentFace !== 'ConfirmRed') {
    scanResults.value[currentFace][index] = nextColor;
  }
};

const confirmPlacement = () => {
  currentStep.value = 0;
  scanState.value = 0;
  updateInstructions();
};

const nextStep = () => {
  currentStep.value++;
  scanState.value = 0;
  updateInstructions();

  // 如果所有面都扫描完成，发送数据到后端
  if (currentStep.value === scanSequence.length) {
    sendScanResults();
  }
};

const sendScanResults = async () => {
  try {
    const response = await api.post('/api/scan', scanResults.value); // 使用 api.post 发送数据
    if (response.data.success) {
      console.log('Response from server:', response.data);
      solution.value = response.data.solution; // 更新解决方案
    } else {
      throw new Error(response.data.message || 'Failed to send scan results.');
    }
  } catch (error) {
    console.error('Error sending scan results:', error.message);
  }
};

const handleResize = () => {
  initOverlay();
  drawGrid();
  drawCapturePoints();
};

const handleKeydown = (event) => {
  switch (event.key) {
    case 'y':
    case 'Y':
      if (currentStep.value === -1) confirmPlacement();
      break;
    case 'Enter':
      if (showCaptureBtn.value && !captureDisabled.value) scanCurrentFace();
      break;
    case 'r':
    case 'R':
      if (showRescanBtn.value) scanCurrentFace();
      break;
    case 'c':
    case 'C':
      if (showConfirmBtn.value) nextStep();
      break;
    case ' ':
      event.preventDefault();
      if (showNextBtn.value) nextStep();
      break;
  }
};

const showCaptureBtn = computed(() => {
  return currentStep.value >= 0 && currentStep.value < scanSequence.length && scanSequence[currentStep.value].face !== 'ConfirmRed' && scanState.value === 0;
});

const showRescanBtn = computed(() => {
  return currentStep.value >= 0 && currentStep.value < scanSequence.length && scanSequence[currentStep.value].face !== 'ConfirmRed' && scanState.value === 1;
});

const showConfirmBtn = computed(() => {
  return currentStep.value >= 0 && currentStep.value < scanSequence.length && scanSequence[currentStep.value].face === 'ConfirmRed';
});

const showNextBtn = computed(() => {
  return currentStep.value >= 0 && currentStep.value < scanSequence.length && scanSequence[currentStep.value].face !== 'ConfirmRed' && scanState.value === 1;
});
</script>

<style scoped>
h1 {
  font-size: clamp(35px, 1vw, 100px);
  font-weight: bold;
  color: #000000;
  text-align: center;
}

.rubiks-cube-scanner {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding: 20px;
}

#camera-container {
  position: relative;
  width: 25%;
  max-width: 500px;
  min-width: 300px;
  aspect-ratio: 1 / 1;
  margin: 20px auto;
  overflow: hidden;
  border-radius: 30px;
}

#camera {
  width: 300%;
  height: 300%;
  transform: translate(-33.33%, -33.33%) rotateY(180deg);
}

#overlay {
  position: absolute;
  top: 30%;
  left: 30%;
  width: 40%;
  height: 40%;
  pointer-events: none;
  border: 5px dashed #000000;
}

#controls {
  margin: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
}

button {
  padding: 12px 25px;
  background: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s;
  font-weight: bolder;
}

button:disabled {
  background: #ccc;
  cursor: not-allowed;
}

.color-preview {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 5px;
}

.color-preview div {
  border: 2px solid #333;
  border-radius: 8px;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  text-align: center;
  color: white;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.8);
  cursor: pointer;
  padding: 5px;
  width: 100%;
}

#instructions {
  margin-top: 15px;
  font-size: 2em;
  color: #000000;
  text-align: center;
  width: 800px;
}

#rescan-btn {
  background: #f44336;
}

#confirm-btn {
  background: #2196f3;
}

#next-btn {
  background: #ffc107;
}
</style>