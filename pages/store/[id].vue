<template>
    <el-row justify="center">
        <el-col :span="24" class="text-align-center">
            <h2>{{ item.name }}</h2>
        </el-col>
    </el-row>
    <el-row class="product-details">
        <el-col :lg="12" :xs="24" class="left-section">
            <el-image src="image/image.jpg" class="main-image" />
            <div class="thumbnail-images">
                <el-row>
                    <el-col :span="4" v-for="i in 10" :key="i">
                        <el-image src="image/image.jpg" class="thumbnail-image" />
                    </el-col>
                </el-row>
            </div>
        </el-col>
        <el-col :lg="12" :xs="24" class="right-section">
            <el-form>
                <el-form-item>
                    <font class="item-price">{{ item.price }}</font>
                    <font class="item-new-price">{{ item.newPrice }}</font>
                </el-form-item>
                <ElDivider />
                <el-form-item label="規格:"> </el-form-item>
                <el-form-item label="型號:"> </el-form-item>
                <el-form-item>
                    <el-input-number v-model="quantity" :min="1" :max="10" @change="handleChange" />
                </el-form-item>
                <el-form-item>
                    <el-button-group>
                        <el-button type="warning" v-on:click="putCart">
                            <el-icon :size="20" class="px-2">
                                <ElIconShoppingCart />
                            </el-icon>
                            加入購物車
                        </el-button>
                        <el-button type="danger">
                            直接購買
                            <el-icon :size="20" class="px-2">
                                <ElIconShoppingBag />
                            </el-icon>
                        </el-button>
                    </el-button-group>
                </el-form-item>
            </el-form>
        </el-col>
        <el-col :span="24" class="description">
            <el-card>
                <el-tabs v-model="activeName" class="tag-desc" @tab-click="handleTagClick">
                    <el-tab-pane label="商品介紹" name="first">
                        <div v-html="item.description"></div>
                    </el-tab-pane>
                </el-tabs>
            </el-card>
        </el-col>
    </el-row>
</template>
<script setup>
definePageMeta({
    layout: 'detail',
})

import { onMounted, ref } from 'vue'
import { useCommodityStore } from '@/stores/commodityStore';
import { useCartStore } from '@/stores/cartStore';

const commodityStore = useCommodityStore();
const cartStore = useCartStore();
const route = useRoute();

const item = ref({});
const quantity = ref(1);
const activeName = ref('first');
const load = async () => {
    const id = route.params.id;
    item.value = await commodityStore.find(id);
}

const handleTagClick = (tab, event) => {
    console.log(tab);
}

const putCart = async () => {
    await cartStore.putItem(item.value, quantity.value);
    ElMessageBox({
        type: 'success',
        message: () =>
            h('p', null, [
                h(ElIconCircleCheckFilled, { style: 'color: var(--el-color-warning)'}, null),
                h('span', {style: 'font-size: 24px'}, '已加入購物車'),
            ])
        ,
        center: true,
    });
    // navigateTo('/cart');
}

onMounted(async () => {
    await load();
})
</script>
<style scoped lang="scss">
.product-details {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
}

.left-section {
    flex: 1;
    width: 460px;
}

.main-image {
    width: 100%;
    width: 450px;
    height: 450px;
}

.thumbnail-images {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
}

.thumbnail-image {
    width: 80px;
    height: 80px;
}

.right-section {
    flex: 1;
    margin-left: 20px;
    min-width: 400px;
}

.price {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 10px;
}

.specs {
    font-size: 14px;
    margin-bottom: 20px;
}

.description {
    margin-top: 20px;
}

h2 {
    font-size: 20px;
    margin-bottom: 10px;
}

p {
    font-size: 16px;
    line-height: 1.5;
}

.item-price {
    text-decoration: line-through;
    color: rgb(196, 196, 196);
    font-weight: normal;
    font-size: x-large;
}

.item-new-price {
    color: red;
    margin-left: 10px;
    font-weight: normal;
    font-size: xx-large;
}
</style>
