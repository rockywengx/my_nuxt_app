<template>
  <el-card body-style="padding:0px" class="item-card" v-on:click="handleClick">
    <div class="card-content">
      <el-image :src="item.imageUrl" fit="fill" lazy class="card-image" />
      <div class="card-info">
        <el-row class="card-title" justify="center">{{ item.name }}</el-row>
        <el-row class="card-title" justify="center">
          <font class="item-price">{{ item.price }}</font>
          <font class="item-new-price">{{ item.newPrice }}</font>
        </el-row>
      </div>
    </div>
  </el-card>
</template>

<script setup>
const props = defineProps({
  item: {
    type: Object,
    required: true
  },
  handleClick: {
    type: Function,
    required: false
  }
})
const item = ref(props.item)
const handleClick = () => {
  if (props.handleClick) {
    props.handleClick(item.value);
  }
}
</script>

<style scoped>
.card-content {
  align-items: center;
  height: 160px;
}

.card-image {
  width: 100%;
  height: 200px;
  margin-right: 20px;
}

/* 手機版 */
@media screen and (max-width: 768px) {
  .card-image {
    height: 100px;
    width: 100px;
  }
}
@media screen and (max-width: 576px) {
  .card-image {
    height: 100px;
    width: 100px;
  }
}

.card-title {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 5px;
}

.item-price {
  text-decoration: line-through;
}

.item-new-price {
  color: red;
  margin-left: 10px;
}

.item-card {
  width: 100%;
  height: 300px;
  margin-bottom: 20px;
}
</style>
