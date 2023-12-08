<template>
    <div>
        <h1>購物車</h1>
        <ul class="item-list">
            <li v-for="item in cartItems" :key="item.id">
                <el-row align="middle">
                    <el-col :span="5">
                        <el-image :src="item.image" style="width: 100px; height: 100px; object-fit: cover;"></el-image>
                    </el-col>
                    <el-col :span="7">
                        <h3>{{ item.name }}</h3>
                    </el-col>
                    <el-col :span="7">
                        <el-input-number v-model="item.quantity" :min="1" :max="10" @change="updateItem(item)"></el-input-number>
                    </el-col>
                    <el-col :span="5">
                        <el-button type="danger" @click="removeItem(item)">刪除</el-button>
                    </el-col>
                </el-row>
            </li>
        </ul>
    </div>
</template>

<script setup>
import { useCartStore } from '@/stores/cartStore';

const cartStore = useCartStore();

const cartItems = computed(() => {
    return cartStore.items;
});

const updateItem = (item) => {
    cartStore.setQuantity(item, item.quantity);
}

</script>

<style scoped>
.item-list > li{
    list-style: none;
    border-bottom: 1px solid #ccc;
}
</style>