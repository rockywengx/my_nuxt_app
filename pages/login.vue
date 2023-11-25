<template>
    <div>
        <form>
            <input type="text" placeholder="Username" v-model="account"/>
            <input type="password" placeholder="Password" v-model="password"/>
            <button v-on:click="login" type="button">Login</button>
        </form>
    </div>
    <div>
        <p v-if="user">Logged in as {{ user }}</p>
    </div>
</template>
<script setup>
    import { useUserStore } from '@/stores/userStore'
    import { ref, computed } from 'vue'
    const account = ref('')
    const password = ref('')
    const login = () => {
        useUserStore().login(account.value, password.value)
    }
    const user = computed(() => useUserStore().user)
    
</script>