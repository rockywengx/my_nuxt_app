<template>
    <div class="navbar">
        <el-row>
            <el-col :span="6" class="left-menu">
                <el-link class="menu" href="/" :underline="false">首頁</el-link>
            </el-col>
            {{items}}
            <el-col :span="18" class="rigth-menu">
                <el-breadcrumb separator="|">
                    <el-breadcrumb-item class="menu" :to="{ path: item.url }" v-for="item in menuItems" :key="item.id"
                        :index="item.id">
                        <div class="icon-with-dot">
                            <el-icon>
                                <component :is="item.icon" />
                            </el-icon>
                            {{ item.label }}
                            <span class="dot" v-if="item.dot === true"></span>
                        </div>
                    </el-breadcrumb-item>
                </el-breadcrumb>
            </el-col>
        </el-row>
    </div>
</template>

<script setup>
import { useCartStore } from '@/stores/cartStore';

const cartStore = useCartStore();
const hasCartItems = computed(() => {
    return cartStore.getItems.length > 0;
})
const hasNotification = computed(() => {
    return false;
})
const menuItems = ref([
    {
        id: 1, label: '購物車', url: '/cart', icon: ElIconShoppingCart,
        dot: hasCartItems
    },
    {
        id: 2, label: '通知', url: '/notification', icon: ElIconBell,
        dot: hasNotification
    },
    {
        id: 3, label: '登出', url: '/logout', icon: ElIconSwitchButton,
        dot: false
    }
]);
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

    .menu:last-child.el-breadcrumb__inner.is-link {
        color: var(--el-text-color-primary);
    }
}

.icon-with-dot {
    position: relative;
}

.icon-with-dot .dot {
    position: absolute;
    top: 0;
    left: -1;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: var(--el-color-warning);
}
</style>
