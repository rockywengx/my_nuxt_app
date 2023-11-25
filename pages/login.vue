<template>
    <section class="page-body">
        <ClientOnly>
            <div class="login-form">
                <el-form :model="form" label-width="120px">
                    <el-form-item label="帳號">
                        <el-input v-model="form.account" placeholder="請輸入帳號"/>
                    </el-form-item>
                    <el-form-item label="密碼">
                        <el-input v-model="form.password" type="password"/>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="login">登入</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </ClientOnly>
    </section>
    <div class="test-box">
        <p v-if="user">Logged in as {{ user }}</p>
    </div>
</template>
<script setup>
import { useUserStore } from '@/stores/userStore'
import { ref, computed } from 'vue'
const form = ref({
    account: '',
    password: ''
})
let userStore = useUserStore()
const login = () => {
    userStore.login(form.value.account, form.value.password)
    if(userStore.token){
        navigateTo('/store')
    }
}
const user = computed(() => userStore.user)
</script>
<style scoped>
.login-form {
    width: 400px;
    margin: 0 auto;
    position: relative;
}
.page-body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80vh;
}
.test-box {
    width: 400px;
    margin: 0 auto;
    position: relative;
    top: 0;
}
</style>