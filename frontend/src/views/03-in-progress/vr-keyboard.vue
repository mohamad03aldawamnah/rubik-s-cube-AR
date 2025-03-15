<template>
  <Header/>
  <HomeTemplate>
    <div class="scene-container">
      <!--    <a-scene>-->
      <a-scene embedded>
        <a-assets>
          <a-asset-item id="cube" src="../../models/RBsCubeWorldOriginCube.glb"></a-asset-item>
        </a-assets>

        <a-sky color="DarkSlateGray"></a-sky>
        <a-entity class="RBsCube" move-manager rbscube-controller scale="0.5 0.5 0.5" position="0 0 -5">
          <!-- Center pieces -->
          <a-gltf-model src="#cube" class="cube center" position="0 0 0" cube-controller></a-gltf-model>
          <a-gltf-model src="#cube" class="cube center" position="0 -1 0" cube-controller></a-gltf-model>
          <a-gltf-model src="#cube" class="cube center" position="0 1 0" cube-controller></a-gltf-model>
          <a-gltf-model src="#cube" class="cube center" position="0 0 1" cube-controller></a-gltf-model>
          <a-gltf-model src="#cube" class="cube center" position="1 0 0" cube-controller></a-gltf-model>
          <a-gltf-model src="#cube" class="cube center" position="0 0 -1" cube-controller></a-gltf-model>
          <a-gltf-model src="#cube" class="cube center" position="-1 0 0" cube-controller></a-gltf-model>
          <!-- Edge pieces -->
          <a-gltf-model src="#cube" class="cube edge" position="0 1 1" cube-controller></a-gltf-model>
          <a-gltf-model src="#cube" class="cube edge" position="1 1 0" cube-controller></a-gltf-model>
          <a-gltf-model src="#cube" class="cube edge" position="0 1 -1" cube-controller></a-gltf-model>
          <a-gltf-model src="#cube" class="cube edge" position="-1 1 0" cube-controller></a-gltf-model>
          <a-gltf-model src="#cube" class="cube edge" position="0 -1 1" cube-controller></a-gltf-model>
          <a-gltf-model src="#cube" class="cube edge" position="1 -1 0" cube-controller></a-gltf-model>
          <a-gltf-model src="#cube" class="cube edge" position="0 -1 -1" cube-controller></a-gltf-model>
          <a-gltf-model src="#cube" class="cube edge" position="-1 -1 0" cube-controller></a-gltf-model>
          <a-gltf-model src="#cube" class="cube edge" position="-1 0 -1" cube-controller></a-gltf-model>
          <a-gltf-model src="#cube" class="cube edge" position="1 0 -1" cube-controller></a-gltf-model>
          <a-gltf-model src="#cube" class="cube edge" position="-1 0 1" cube-controller></a-gltf-model>
          <a-gltf-model src="#cube" class="cube edge" position="1 0 1" cube-controller></a-gltf-model>
          <!-- Corner pieces -->
          <a-gltf-model src="#cube" class="cube corner" position="1 1 1" cube-controller></a-gltf-model>
          <a-gltf-model src="#cube" class="cube corner" position="-1 1 -1" cube-controller></a-gltf-model>
          <a-gltf-model src="#cube" class="cube corner" position="1 1 -1" cube-controller></a-gltf-model>
          <a-gltf-model src="#cube" class="cube corner" position="-1 1 1" cube-controller></a-gltf-model>
          <a-gltf-model src="#cube" class="cube corner" position="1 -1 1" cube-controller></a-gltf-model>
          <a-gltf-model src="#cube" class="cube corner" position="1 -1 -1" cube-controller></a-gltf-model>
          <a-gltf-model src="#cube" class="cube corner" position="-1 -1 1" cube-controller></a-gltf-model>
          <a-gltf-model src="#cube" class="cube corner" position="-1 -1 -1" cube-controller></a-gltf-model>
        </a-entity>
        <a-camera position="0 2 0"></a-camera>
        <a-text value="Instruction" position="-1 3 -5"></a-text>
        <a-text value="Use keyboard controls: u,i,o,j,k,l" position="-1 2.5 -5"></a-text>
        <a-text value="(Shift for prime, hold 2 + face for 180°)" position="-1 2 -5"></a-text>
      <div id="control-buttons">
        <button onclick="increaseScale()">Scale +0.1</button>
        <button onclick="decreaseScale()">Scale -0.1</button>
        <button onclick="rotateXClockwise()">Rotate X +90°</button>
        <button onclick="rotateYClockwise()">Rotate Y +90°</button>
        <button onclick="resetRotation()">Reset Rotation</button>
      </div>
      </a-scene>



    </div>
  </HomeTemplate>
</template>

<style scoped>

/* aframe-scene */
.scene-container {
  width: 100%;
  height: 100%;
}

/* aframe-button */
#control-buttons {
  position: absolute;
  bottom: 10px;
  left: 10px;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  gap: 5px;
}
#control-buttons button {
  padding: 8px 12px;
  font-size: 14px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
#control-buttons button:hover {
  background-color: #45a049;
}

/* webpage */
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
  width: 95%;
  margin: 0 auto;
  box-sizing: border-box;
}

#home-img {
  width: clamp(250px, 30vw, 50vw);
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
  //aspect-ratio: 1 / 1;
}

#home-content h1 {
  font-size: clamp(45px, 5vw, 100px);
  font-family: "Gochi Hand", cursive;
  margin-bottom: 1vh;
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
    width: 60vw !important;
    margin: 20px auto !important;
  }

  #home-content {
    width: 90% !important;
    margin: 20px auto !important;
  }
}

@media (max-width: 450px) {
  #home-img {
    width: 90% !important;
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

<script setup>
import Header from '../../components/Header.vue';
import HomeTemplate from '@/components/HomeTemplate.vue';
import 'aframe';
import { onMounted, onBeforeUnmount } from 'vue';

// 防止重复注册 A-Frame 组件
if (!AFRAME.components['rbscube-controller']) {
  // Whole-cube controller with animation
  AFRAME.registerComponent('rbscube-controller', {
    init: function () {
      this.isAnimating = false;
    },
    rotateWholeCube: function(axis, angle) {
      if (this.isAnimating) return;
      this.isAnimating = true;
      const el = this.el;
      const startRotation = el.getAttribute('rotation');
      const targetRotation = {
        x: axis === 'x' ? startRotation.x + angle : startRotation.x,
        y: axis === 'y' ? startRotation.y + angle : startRotation.y,
        z: startRotation.z
      };
      const duration = 150; // 动画持续时间 150ms
      const step = angle / (duration / 10); // 每 10ms 的旋转步长
      let currentRotation = { ...startRotation };
      let progress = 0;

      const animate = () => {
        progress += 10;
        if (progress <= duration) {
          if (axis === 'x') {
            currentRotation.x = startRotation.x + step * (progress / 10);
          } else if (axis === 'y') {
            currentRotation.y = startRotation.y + step * (progress / 10);
          }
          el.setAttribute('rotation', currentRotation);
          requestAnimationFrame(animate);
        } else {
          el.setAttribute('rotation', targetRotation); // 确保精确到达目标角度
          this.isAnimating = false;
        }
      };
      requestAnimationFrame(animate);
      console.log(`Whole cube rotating around ${axis} by ${angle}°`);
    }
  });

  // Cube-controller component
  AFRAME.registerComponent('cube-controller', {
    schema: {
      speed: { type: 'number', default: 800 } // Speed in degrees per second
    },
    init: function () {
      this.faceMoveActive = false;
      this.isMoving = false;
      this.moveQueue = [];
      this.movePivot = null;
      this.moveAxis = null;
      this.totalAngle = 0;
      this.remainingAngle = 0;
    },
    handleFaceRotation: function(pivot, axis, angle) {
      if (this.isMoving) {
        this.moveQueue.push({ pivot: pivot.clone(), axis: axis.clone(), angle: angle });
        return;
      }
      this.startFaceRotation(pivot, axis, angle);
    },
    startFaceRotation: function(pivot, axis, angle) {
      this.faceMoveActive = true;
      this.movePivot = pivot.clone();
      this.moveAxis = axis.clone().normalize();
      this.totalAngle = THREE.MathUtils.degToRad(angle);
      this.remainingAngle = this.totalAngle;
      this.isMoving = true;
    },
    tick: function(_, deltaTime) {
      if (!this.faceMoveActive) return;
      const timeFactor = deltaTime / 1000;
      let step = THREE.MathUtils.degToRad(this.data.speed) * timeFactor;
      if (Math.abs(step) > Math.abs(this.remainingAngle)) {
        step = this.remainingAngle;
      } else {
        step = Math.sign(this.remainingAngle) * step;
      }
      const pos = this.el.object3D.position;
      pos.sub(this.movePivot);
      pos.applyAxisAngle(this.moveAxis, step);
      pos.add(this.movePivot);
      this.el.object3D.rotateOnWorldAxis(this.moveAxis, step);
      this.remainingAngle -= step;
      if (Math.abs(this.remainingAngle) < 0.001) {
        this.faceMoveActive = false;
        this.isMoving = false;
        if (this.moveQueue.length > 0) {
          const nextMove = this.moveQueue.shift();
          this.startFaceRotation(nextMove.pivot, nextMove.axis, nextMove.angle);
        }
      }
    }
  });

  // Move-manager component with 0.2-second delay
  AFRAME.registerComponent('move-manager', {
    init: function() {
      this.queue = [];
      this.isMoving = false;
    },
    addMoveToQueue: function(moveCode) {
      this.queue.push(moveCode);
      if (!this.isMoving) {
        this.processNextMove();
      }
    },
    processNextMove: function() {
      if (this.queue.length === 0) {
        this.isMoving = false;
        return;
      }
      this.isMoving = true;
      const moveCode = this.queue.shift();
      const face = moveCode[0].toLowerCase();
      let angle = moveCode.includes("2") ? -180 : moveCode.includes("'") || moveCode.includes("′") ? 90 : -90;
      let pivot, axis;
      switch(face) {
        case 'f': pivot = new THREE.Vector3(0, 0, 1); axis = new THREE.Vector3(0, 0, 1); break;
        case 'b': pivot = new THREE.Vector3(0, 0, -1); axis = new THREE.Vector3(0, 0, -1); break;
        case 'u': pivot = new THREE.Vector3(0, 1, 0); axis = new THREE.Vector3(0, 1, 0); break;
        case 'd': pivot = new THREE.Vector3(0, -1, 0); axis = new THREE.Vector3(0, -1, 0); break;
        case 'l': pivot = new THREE.Vector3(-1, 0, 0); axis = new THREE.Vector3(-1, 0, 0); break;
        case 'r': pivot = new THREE.Vector3(1, 0, 0); axis = new THREE.Vector3(1, 0, 0); break;
        default: console.error("Unknown move code: " + moveCode); this.isMoving = false; return;
      }
      const tolerance = 0.1;
      this.el.querySelectorAll('.cube').forEach(cube => {
        if (!cube.components || !cube.components['cube-controller']) return;
        const pos = cube.object3D.position;
        let belongs = false;
        switch(face) {
          case 'f': belongs = Math.abs(pos.z - 1) < tolerance; break;
          case 'b': belongs = Math.abs(pos.z + 1) < tolerance; break;
          case 'u': belongs = Math.abs(pos.y - 1) < tolerance; break;
          case 'd': belongs = Math.abs(pos.y + 1) < tolerance; break;
          case 'l': belongs = Math.abs(pos.x + 1) < tolerance; break;
          case 'r': belongs = Math.abs(pos.x - 1) < tolerance; break;
        }
        if (belongs) {
          cube.components['cube-controller'].handleFaceRotation(pivot, axis, angle);
        }
      });
      setTimeout(() => {
        this.isMoving = false;
        this.processNextMove();
      }, 200);
    }
  });

  // Trigger move function
  function triggerMove(moveCode) {
    const moveManager = document.querySelector('.RBsCube').components['move-manager'];
    moveManager.addMoveToQueue(moveCode);
  }

  // 封装键盘控制逻辑到 handleKeydown 函数
  let isTwoLongPressed = false; // Track if '2' is long pressed
  let twoPressTimer = null; // Timer for detecting long press
  const longPressThreshold = 300; // 300ms as long press threshold

  const handleKeydown = (event) => {
    // Detect '2' key press start
    if (event.key === '2' && !twoPressTimer) {
      twoPressTimer = setTimeout(() => {
        isTwoLongPressed = true;
        console.log('2 long pressed');
      }, longPressThreshold);
    }

    const keyMap = {
      'u': 'U',       // Up
      'U': "U'",      // Up prime (Shift + U)
      'i': 'D',       // Down
      'I': "D'",      // Down prime (Shift + I)
      'o': 'F',       // Front
      'O': "F'",      // Front prime (Shift + O)
      'j': 'B',       // Back
      'J': "B'",      // Back prime (Shift + J)
      'k': 'L',       // Left
      'K': "L'",      // Left prime (Shift + K)
      'l': 'R',       // Right
      'L': "R'",      // Right prime (Shift + L)
    };

    let move = '';
    if (event.shiftKey && keyMap[event.key.toUpperCase()]) {
      move = keyMap[event.key.toUpperCase()]; // Prime move
    } else if (keyMap[event.key]) {
      move = keyMap[event.key]; // Normal move
    }

    // Apply '2' modifier if long pressed
    if (move && isTwoLongPressed) {
      move += '2';
    }

    if (move) {
      triggerMove(move);
    }
  };

  // 封装 '2' keyup 逻辑到 handleKeyup 函数
  const handleKeyup = (event) => {
    if (event.key === '2') {
      clearTimeout(twoPressTimer);
      twoPressTimer = null;
      isTwoLongPressed = false; // Reset long press state
      console.log('2 released');
    }
  };

  // Button control functions
  const setupButtonControls = () => {
    const cubeEntity = document.querySelector('.RBsCube');

    window.increaseScale = function() {
      const currentScale = cubeEntity.getAttribute('scale');
      const newScale = {
        x: Math.min(currentScale.x + 0.1, 2), // Max scale 2
        y: Math.min(currentScale.y + 0.1, 2),
        z: Math.min(currentScale.z + 0.1, 2)
      };
      cubeEntity.setAttribute('scale', newScale);
    };

    window.decreaseScale = function() {
      const currentScale = cubeEntity.getAttribute('scale');
      const newScale = {
        x: Math.max(currentScale.x - 0.1, 0.1), // Min scale 0.1
        y: Math.max(currentScale.y - 0.1, 0.1),
        z: Math.max(currentScale.z - 0.1, 0.1)
      };
      cubeEntity.setAttribute('scale', newScale);
    };

    window.rotateXClockwise = function() {
      cubeEntity.components['rbscube-controller'].rotateWholeCube('x', 90);
    };

    window.rotateYClockwise = function() {
      cubeEntity.components['rbscube-controller'].rotateWholeCube('y', 90);
    };

    window.resetRotation = function() {
      cubeEntity.setAttribute('rotation', { x: 0, y: 0, z: 0 });
    };
  };

  // 在组件挂载时绑定事件监听器
  onMounted(() => {
    window.addEventListener('keydown', handleKeydown);
    window.addEventListener('keyup', handleKeyup);
    setupButtonControls(); // 初始化按钮控制逻辑
  });

  // 在组件卸载时清理事件监听器
  onBeforeUnmount(() => {
    window.removeEventListener('keydown', handleKeydown);
    window.removeEventListener('keyup', handleKeyup);
  });
}
</script>
