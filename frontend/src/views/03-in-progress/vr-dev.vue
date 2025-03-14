<!-- src/views/03-in-progress/vr-dev.vue -->
<template>
  <Header/>
  <HomeTemplate>
    <div class="scene-container">
      <!--    <a-scene>-->
      <a-scene embedded>
        <a-assets>
          <a-asset-item id="cube" src="/models/RBsCubeWorldOriginCube.glb"></a-asset-item>
        </a-assets>
        <a-sky color="lightgreen"></a-sky>
        <a-camera position="0 5 13"></a-camera>

        <a-entity class="RBsCube">
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
      </a-scene>
    </div>
  </HomeTemplate>
</template>

<style scoped>
.scene-container {
  width: 100%;
  height: 100%;
}

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
  aspect-ratio: 1 / 1;
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
if (!AFRAME.components['cube-controller']) {                //添加这一行, 可以防止重复注册的报错
  AFRAME.registerComponent('cube-controller', {
    schema: {
      speed: {type: 'number', default: 270}
    },
    init: function () {
      this.isMoving = false;
      this.faceMoveActive = false;
      this.moveQueue = [];
      this.movePivot = null;
      this.moveAxis = null;
      this.totalAngle = 0;
      this.remainingAngle = 0;
    },
    handleFaceRotation: function (pivot, axis, angle) {
      if (this.isMoving) {
        this.moveQueue.push({pivot: pivot.clone(), axis: axis.clone(), angle: angle});
        return;
      }
      this.startFaceRotation(pivot, axis, angle);
    },
    startFaceRotation: function (pivot, axis, angle) {
      this.faceMoveActive = true;
      this.movePivot = pivot.clone();
      this.moveAxis = axis.clone().normalize();
      this.totalAngle = THREE.MathUtils.degToRad(angle);
      this.remainingAngle = this.totalAngle;
      this.isMoving = true;
    },
    tick: function (_, deltaTime) {
      if (!this.faceMoveActive) return;
      const timeFactor = deltaTime / 1000;
      let step = THREE.MathUtils.degToRad(this.data.speed) * timeFactor;
      if (Math.abs(step) > Math.abs(this.remainingAngle)) {
        step = this.remainingAngle;
      } else {
        step = Math.sign(this.remainingAngle) * step;
      }
      let pos = this.el.object3D.position;
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

  // 监听键盘事件
  const handleKeydown = (e) => {
    const key = e.key.toLowerCase();
    const validMoves = ['t', 'y', 'u', 'i', 'o', 'p'];
    if (!validMoves.includes(key)) return;

    let moveMultiplier;
    if (e.ctrlKey) {
      moveMultiplier = -2; // 半转 –180°
    } else if (e.shiftKey) {
      moveMultiplier = 1;  // 顺时针 +90°
    } else {
      moveMultiplier = -1; // 逆时针 –90°
    }
    const angle = moveMultiplier * 90;

    let pivot, axis, tolerance = 0.1;
    switch (key) {
      case 't':
        pivot = new THREE.Vector3(0, 0, 1);
        axis = new THREE.Vector3(0, 0, 1);
        break;
      case 'y':
        pivot = new THREE.Vector3(0, 0, -1);
        axis = new THREE.Vector3(0, 0, -1);
        break;
      case 'u':
        pivot = new THREE.Vector3(0, 1, 0);
        axis = new THREE.Vector3(0, 1, 0);
        break;
      case 'i':
        pivot = new THREE.Vector3(0, -1, 0);
        axis = new THREE.Vector3(0, -1, 0);
        break;
      case 'o':
        pivot = new THREE.Vector3(-1, 0, 0);
        axis = new THREE.Vector3(-1, 0, 0);
        break;
      case 'p':
        pivot = new THREE.Vector3(1, 0, 0);
        axis = new THREE.Vector3(1, 0, 0);
        break;
      default:
        return;
    }

    document.querySelectorAll('.cube').forEach(cube => {
      const obj = cube.object3D;
      let pos = obj.position;
      let belongs = false;
      switch (key) {
        case 't':
          belongs = Math.abs(pos.z - 1) < tolerance;
          break;
        case 'y':
          belongs = Math.abs(pos.z + 1) < tolerance;
          break;
        case 'u':
          belongs = Math.abs(pos.y - 1) < tolerance;
          break;
        case 'i':
          belongs = Math.abs(pos.y + 1) < tolerance;
          break;
        case 'o':
          belongs = Math.abs(pos.x + 1) < tolerance;
          break;
        case 'p':
          belongs = Math.abs(pos.x - 1) < tolerance;
          break;
      }
      if (belongs && cube.components && cube.components['cube-controller']) {
        cube.components['cube-controller'].handleFaceRotation(pivot, axis, angle);
      }
    });
  };
  onMounted(() => {
    window.addEventListener('keydown', handleKeydown);
  });

  onBeforeUnmount(() => {
    window.removeEventListener('keydown', handleKeydown);
  });
};




</script>
