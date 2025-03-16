<!-- src/views/AdminSignup.vue -->
<template>
  <div id="page-frame">
    <AppHeader />
    <div class="main">
      <div id="home-content">
        <h1>Admin Sign Up</h1>

        <!-- 成功提示 -->
        <div v-if="success" class="alert success">
          {{ success }}
          <span class="countdown">{{ countdown }}</span>秒后自动跳转到登录页
        </div>

        <!-- 错误提示 -->
        <div v-if="error" class="alert error">
          {{ error }}
        </div>

        <!-- 注册表单 -->
        <form @submit.prevent="register">
          <div class="form-group">
            <input
                v-model="username"
                placeholder="Username"
                :class="{ 'input-error': error }"
            />
          </div>
          <div class="form-group">
            <input
                v-model="password"
                type="password"
                placeholder="Password"
                :class="{ 'input-error': error }"
            />
          </div>
          <div class="form-group" v-if="requiresSecret">
            <input
                v-model="secret"
                type="password"
                placeholder="Secret Key"
                :class="{ 'input-error': error }"
            />
          </div>
          <button type="submit" :disabled="isSubmitting">
            {{ isSubmitting ? 'Registering...' : 'Register' }}
          </button>
        </form>
        <p>
          Already have an account? <router-link to="/login">Login</router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onBeforeUnmount } from 'vue';
import { useRouter } from 'vue-router';
import AppHeader from '@/components/headers/Header.vue';
import api from '@/utils/api';

const username = ref('');
const password = ref('');
const secret = ref(''); // 密钥输入（可选）
const error = ref('');
const success = ref('');
const isSubmitting = ref(false);
const countdown = ref(3); // 倒计时秒数
const timer = ref(null);
const router = useRouter();
const requiresSecret = true; // 如果后端不需要密钥，设为 false

// 注册功能
const register = async () => {
  isSubmitting.value = true;
  error.value = '';
  success.value = '';

  try {
    const payload = {
      username: username.value.trim(),
      password: password.value.trim()
    };
    if (requiresSecret) {
      payload.secret = secret.value.trim();
    }

    const response = await api.post('/api/register/admin', payload);

    if (response.data.success) {
      success.value = response.data.message;
      startCountdown(); // 启动倒计时
      alert('Administrator registered successfully');
    } else {
      error.value = response.data.message || 'Registration failed, please try again later';
    }
  } catch (err) {
    error.value = err.response?.data?.message || 'Registration failed, please check your input';
    console.error('Registration error:', err);
  } finally {
    isSubmitting.value = false;
  }
};

// 启动倒计时
const startCountdown = () => {
  timer.value = setInterval(() => {
    if (countdown.value > 0) {
      countdown.value--;
    } else {
      clearInterval(timer.value);
      router.push('/login'); // 倒计时结束后跳转到登录页
    }
  }, 1000);
};

onBeforeUnmount(() => {
  if (timer.value) clearInterval(timer.value); // 页面卸载时清除定时器
});
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
  margin: 2rem auto;
  padding: 20px;
  box-sizing: border-box;
}

h1 {
  font-size: clamp(40px, 5vw, 80px);
  font-family: 'Gochi Hand', cursive;
  color: #32284a;
  text-align: center;
  margin-bottom: 20px;
}

p {
  font-family: 'Baloo 2', sans-serif;
  font-size: clamp(16px, 2vw, 20px);
  color: #32284a;
  text-align: center;
  margin-top: 10px;
}

input {
  width: 100%;
  padding: 0.75rem;
  margin-bottom: 1.5rem;
  border: 1px solid #ced4da;
  border-radius: 4px;
  transition: border-color 0.3s ease;
}

.input-error {
  border-color: #dc3545;
}

button {
  width: 100%;
  padding: 0.75rem;
  background: #28a745;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.3s ease;
}

button:hover:not(:disabled) {
  background: #218838;
}

button:disabled {
  background: #6c757d;
  cursor: not-allowed;
}

.alert.success {
  padding: 1rem;
  margin-bottom: 1.5rem;
  border-radius: 4px;
  background: #d4edda;
  color: #155724;
  border: 1px solid #c3e6cb;
  text-align: center;
  font-family: 'Baloo 2', sans-serif;
  font-size: clamp(20px, 2vw, 30px);
}

.alert.error {
  padding: 1rem;
  margin-bottom: 1.5rem;
  border-radius: 4px;
  background: #f8d7da;
  color: #721c24;
  border: 1px solid #f5c6cb;
  text-align: center;
  font-family: 'Baloo 2', sans-serif;
  font-size: clamp(20px, 2vw, 30px);
}

.countdown {
  color: #155724;
  font-weight: bold;
  margin-left: 0.5rem;
}

a {
  color: #007bff;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
</style>