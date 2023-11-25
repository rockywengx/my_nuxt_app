<template>
    <div class="navbar">
        <el-menu class="top-menu" mode="horizontal">
            <el-menu-item v-for="item in menuItems" :key="item.id" :index="item.id">
                <a :href="item.url">{{ item.label }}</a>
            </el-menu-item>
        </el-menu>
    </div>
</template>

<script>
export default {
    data() {
        return {
            menuItems: [
                { id: 1, label: '首頁', url: '/' },
                { id: 2, label: '關於我們', url: '/about' },
                { id: 3, label: '產品', url: '/products' },
                { id: 4, label: '聯絡我們', url: '/contact' }
            ]
        };
    }
};
</script>

<style scoped>
.navbar {
    background-color: #f2f2f2;
}

a {
    text-decoration: none;
    color: #333;
}
</style>
