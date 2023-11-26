<template>
    <div class="item-list">
        <el-row>
            <el-col :span="8" v-for="(item, index) in props.items" :key="index">
                <Item :item="item" />
            </el-col>
        </el-row>
    </div>
</template>

<script setup>
import Item from '@/components/itemList/item.vue'
const props = defineProps({
    items: {
        type: Array,
        required: true
    }
})
</script>

<style scoped>
.item-list {
  margin: 20px;
}
</style>
