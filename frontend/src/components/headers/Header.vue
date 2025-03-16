<template>
  <div class="topnav">
    <img src="/images/cube-icon.png" alt="logo" id="logo">
    <nav>
      <router-link to="/">HOME</router-link>
      <router-link to="/dev-home">DEV</router-link>
      <router-link to="/introduction">INTRODUCTION</router-link>
      <router-link to="/about">ABOUT</router-link>
      <router-link to="/signup" v-if="!isLoggedIn" class="nav-button nav-button--blue">SIGN-UP</router-link>
      <router-link to="/login" v-if="!isLoggedIn" class="nav-button nav-button--blue">LOGIN</router-link>
      <router-link to="/view-users" v-if="isLoggedIn" class="nav-button nav-button--green">VIEW USERS</router-link>
      <button id="logout-btn" v-if="isLoggedIn" class="nav-button nav-button--red" @click="logout">LOGOUT</button>
    </nav>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

// Reactive state
const isLoggedIn = ref(false);
const router = useRouter();

// Check login status on mount
onMounted(() => {
  const token = localStorage.getItem('token');
  if (token) {
    isLoggedIn.value = true;
  }
});

// Logout function
const logout = () => {
  localStorage.removeItem('token');
  isLoggedIn.value = false;
  router.push('/');
};
</script>

<style scoped>
.topnav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 30px;
}

.topnav img#logo {
  height: 50px;
}

.topnav nav {
  display: flex;
  flex-wrap: wrap;
  gap: 20px; /* 按钮和链接之间的间距 */
  align-items: center; /* 垂直居中 */
}

/* 普通导航链接样式（HOME, DEV, INTRODUCTION, ABOUT） */
.topnav nav a {
  text-decoration: none;
  padding: 5px 10px;
  color: #333;
  font-size: clamp(24px, 1.8vw, 36px);
  font-family: 'Roboto', 'Arial', sans-serif;
  font-weight: 700; /* 字体加粗 */
}

/* 按钮样式（SIGN-UP, LOGIN, VIEW USERS, LOGOUT） */
.topnav nav a.nav-button,
.topnav nav button.nav-button {
  background-color: #28a745; /* 默认绿色，适用于 VIEW USERS */
  font-family: 'Roboto', 'Arial', sans-serif;
  font-size: clamp(18px, 1.5vw, 24px);
  font-weight: 700; /* 字体加粗 */
  color: white;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center; /* 文本居中 */
  //width: clamp(200px, 15vw, 150px);
  padding: 8px 16px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease; /* 仅保留背景色过渡 */
}

/* 蓝色按钮样式（SIGN-UP, LOGIN） */
.topnav nav a.nav-button--blue {
  background-color: #007bff;
}

.topnav nav a.nav-button--blue:hover {
  background-color: #0056b3;
}

/* 绿色按钮样式（VIEW USERS） */
.topnav nav a.nav-button--green {
  background-color: #28a745;
}

.topnav nav a.nav-button--green:hover {
  background-color: #218838;
}

/* 红色按钮样式（LOGOUT） */
.topnav nav button.nav-button--red {
  background-color: #dc3545;
}

.topnav nav button.nav-button--red:hover {
  background-color: #c82333;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .topnav {
    flex-direction: column;
    align-items: center;
    padding: 15px 20px;
  }

  .topnav img#logo {
    height: 40px;
    margin-bottom: 15px;
  }

  .topnav nav {
    flex-direction: column;
    width: 100%;
    gap: 10px;
  }

  .topnav nav a,
  .topnav nav button.nav-button {
    padding: 1px 0;
    font-size: clamp(24px, 1vw, 36px);
    width: 30%;
    text-align: center;
  }

  .topnav nav a.nav-button,
  .topnav nav button.nav-button {
    padding: 5px 10px;
  }
}
</style>