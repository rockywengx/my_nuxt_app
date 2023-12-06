<template>
    <div class="navbar">
        <el-row>
            <el-col :span="6" class="left-menu">
                <el-link class="menu" href="/" :underline="false">首頁</el-link>
            </el-col>
            <el-col :span="18" class="rigth-menu">
                <el-breadcrumb separator="|">
                    <el-breadcrumb-item class="menu" :to="{ path: item.url }" v-for="item in menuItems"
                        :key="item.id" :index="item.id"
                        >
                        {{ item.label }}
                    </el-breadcrumb-item>
                </el-breadcrumb>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
    data() {
        return {
            menuItems: [
                { id: 1, label: '關於我們', url: '/about' },
                { id: 2, label: '產品', url: '/products' },
                { id: 3, label: '聯絡我們', url: '/contact' }
            ]
        };
    }
};
</script>

<style scoped lang="scss">
.navbar {
    background-color: #f2f2f2;
}

.left-menu {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 40px;
    padding-left: 20px;
}

.rigth-menu {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 40px;
    padding-right: 20px;
}

.menu {
    margin-left: 20px;
    font-weight: bold;
    color: var(--el-text-color-primary);

    .menu:last-child.el-breadcrumb__inner.is-link{
        color: var(--el-text-color-primary);
    }
}

</style>
