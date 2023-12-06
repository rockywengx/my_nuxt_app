<template>
    <div class="item-list">
        <el-row>
            <el-col :span="8" v-for="(item, index) in props.items" :key="index">
                <Item :item="item" :handleClick="handleClick"/>
            </el-col>
        </el-row>
        <el-row justify="center">
            <el-col :span="24" class="text-center">
                <el-button v-if="isMore" type="danger" plain class="btn-load" v-on:click="handleBtnMoreClick">載入更多</el-button>
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
    },
    loadMore: {
        type: Function,
        required: true
    },
    pagination: {
        type: Object,
        required: true,
        default: () => {
            return {
                page: 1,
                perPage: 10,
                total: 0
            }
        }
    },
    handleClick: {
        type: Function,
        required: false
    }
})

const handleClick = (item) => {
    if(props.handleClick){
        props.handleClick(item);
    }
}

const handleBtnMoreClick = () => {
    if(props.loadMore){
        props.loadMore();
    }
}

const isMore = computed(() => {
    return props.pagination.page * props.pagination.perPage < props.pagination.total;
})
</script>

<style scoped>
.item-list {
  margin: 20px;
}
.btn-load {
  margin-top: 10px;
  justify-self: center;
  min-width: 80%;
}
.text-center {
  text-align: center;
}
</style>
