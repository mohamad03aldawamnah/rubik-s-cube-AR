<template>
  <div id="page-frame">
    <AppHeader />
    <div class="main">
      <div id="home-content">
        <h1>User List</h1>

        <!-- Loading state -->
        <div v-if="isLoading" class="loading-message">Loading...</div>

        <!-- Error message -->
        <div v-if="error" class="alert error">{{ error }}</div>

        <!-- Success message -->
        <div v-if="success" class="alert success">{{ success }}</div>

        <!-- User list -->
        <ul v-if="!isLoading && users.length > 0">
          <li v-for="user in users" :key="user._id">
            <span>{{ user.username }}</span>
            <button class="delete-button" @click="showDeleteModal(user._id)" :disabled="isLoading">Delete</button>
          </li>
        </ul>

        <!-- Empty list message -->
        <p v-if="!isLoading && users.length === 0" class="no-users">No users available</p>

        <!-- Delete confirmation modal -->
        <div v-if="isModalVisible" class="modal" @click.self="hideDeleteModal">
          <div class="modal-content">
            <span class="modal-close" @click="hideDeleteModal">×</span>
            <h2>Confirm Delete</h2>
            <p>Are you sure you want to delete this user? This action cannot be undone.</p>
            <div class="modal-actions">
              <button class="modal-button modal-button--cancel" @click="hideDeleteModal">Cancel</button>
              <button class="modal-button modal-button--confirm" @click="confirmDelete">Confirm</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useRouter } from 'vue-router';
import api from '@/utils/api';
import AppHeader from '@/components/headers/Header.vue';

// Reactive state
const users = ref([]);
const error = ref('');
const success = ref('');
const isLoading = ref(false);
const isModalVisible = ref(false);
const selectedUserId = ref(null);
const router = useRouter();

// Fetch user list
const fetchUsers = async () => {
  isLoading.value = true;
  error.value = '';
  try {
    const response = await api.get('/api/users');
    users.value = response.data.data;
  } catch (err) {
    error.value = err.response?.data?.message || 'Failed to fetch users';
    if (err.response?.status === 401) {
      router.push('/login');
    }
  } finally {
    isLoading.value = false;
  }
};

// Show delete confirmation modal
const showDeleteModal = (userId) => {
  selectedUserId.value = userId;
  isModalVisible.value = true;
};

// Hide delete confirmation modal
const hideDeleteModal = () => {
  isModalVisible.value = false;
  selectedUserId.value = null;
};

// Confirm user deletion
const confirmDelete = async () => {
  if (!selectedUserId.value) return;

  isLoading.value = true;
  error.value = '';
  try {
    const response = await api.delete(`/api/users/${selectedUserId.value}`);
    if (response.data.success) {
      success.value = 'User deleted successfully';
      await fetchUsers(); // Refresh user list
    } else {
      error.value = response.data.message || 'Failed to delete user';
    }
  } catch (err) {
    error.value = err.response?.data?.message || 'Failed to delete user';
    console.error('Error deleting user:', err);
  } finally {
    isLoading.value = false;
    hideDeleteModal();
  }
};

// Fetch user list on page load
onMounted(() => {
  fetchUsers();
});

// Listen for ESC key to close modal
const handleEscapeKey = (event) => {
  if (event.key === 'Escape') {
    hideDeleteModal();
  }
};

onMounted(() => {
  document.addEventListener('keydown', handleEscapeKey);
});

onUnmounted(() => {
  document.removeEventListener('keydown', handleEscapeKey);
});
</script>

<style scoped>
/* Page framework */
#page-frame {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

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

/* Title */
h1 {
  font-size: clamp(40px, 5vw, 80px);
  font-family: 'Gochi Hand', cursive;
  color: #32284a;
  text-align: center;
  margin-bottom: 20px;
}

/* Loading message */
.loading-message {
  font-family: 'Baloo 2', sans-serif;
  font-size: clamp(20px, 2vw, 30px);
  color: #32284a;
  text-align: center;
  margin: 20px 0;
}

/* Error message */
.alert.error {
  padding: 1rem;
  margin-bottom: 1.5rem;
  border-radius: 8px;
  background: #f8d7da;
  color: #721c24;
  border: 1px solid #f5c6cb;
  text-align: center;
  font-family: 'Baloo 2', sans-serif;
  font-size: clamp(20px, 2vw, 30px);
}

/* Success message */
.alert.success {
  padding: 1rem;
  margin-bottom: 1.5rem;
  border-radius: 8px;
  background: #d4edda;
  color: #155724;
  border: 1px solid #c3e6cb;
  text-align: center;
  font-family: 'Baloo 2', sans-serif;
  font-size: clamp(20px, 2vw, 30px);
}

/* User list */
ul {
  list-style-type: none;
  padding: 0;
  width: 100%;
  max-width: 600px;
}

li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  margin-bottom: 10px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  font-family: 'Baloo 2', sans-serif;
  font-size: clamp(16px, 1.5vw, 20px);
  color: #333;
}

/* Delete button */
.delete-button {
  background-color: #dc3545; /* Red, same as LOGOUT button */
  font-family: 'Baloo 2', sans-serif;
  font-size: clamp(12px, 1.5vw, 16px);
  font-weight: 700;
  color: white;
  border-radius: 8px;
  padding: 8px 16px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.delete-button:hover {
  background-color: #c82333;
}

.delete-button:disabled {
  background-color: #6c757d;
  cursor: not-allowed;
}

/* Empty list message */
.no-users {
  font-family: 'Baloo 2', sans-serif;
  font-size: clamp(20px, 2vw, 30px);
  color: #32284a;
  text-align: center;
  margin: 20px 0;
}

/* Modal */
.modal {
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-content {
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  width: 90%;
  max-width: 400px;
  text-align: center;
  font-family: 'Baloo 2', sans-serif;
}

.modal-content h2 {
  font-size: clamp(24px, 5vw, 40px);
  color: #333;
  margin-bottom: 16px;
}

.modal-content p {
  font-size: clamp(16px, 3vw, 20px);
  color: #666;
  margin-bottom: 20px;
}

.modal-close {
  color: #333;
  float: right;
  font-size: 40px;
  font-weight: bold;
  cursor: pointer;
}

.modal-close:hover {
  color: #dc3545;
}

.modal-actions {
  display: flex;
  gap: 10px;
  justify-content: center;
}

.modal-button {
  font-family: 'Baloo 2', sans-serif;
  font-size: clamp(12px, 1.5vw, 16px);
  font-weight: 700;
  color: white;
  border-radius: 8px;
  padding: 8px 16px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.modal-button--cancel {
  background-color: #6c757d; /* Gray for cancel */
}

.modal-button--cancel:hover {
  background-color: #5a6268;
}

.modal-button--confirm {
  background-color: #dc3545; /* Red for confirm */
}

.modal-button--confirm:hover {
  background-color: #c82333;
}

/* Responsive design */
@media (max-width: 768px) {
  .main {
    padding: 15px;
  }

  h1 {
    font-size: clamp(30px, 5vw, 60px);
  }

  li {
    flex-direction: column;
    align-items: flex-start;
    padding: 10px;
  }

  .delete-button {
    margin-top: 10px;
    width: 100%;
  }

  .modal-content {
    width: 95%;
  }
}
</style>