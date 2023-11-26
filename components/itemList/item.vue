<template>
  <el-card>
    <div class="card-content">
      <el-image :src="item.imageUrl" :fit="fit" class="card-image" />
      <div class="card-info">
        <h3 class="card-title">{{ item.name }}</h3>
        <p class="card-description">{{ item.description }}</p>
        <p class="card-price">{{ item.price }}</p>
      </div>
    </div>
  </el-card>
</template>

<script setup>
const props = defineProps({
  item: {
    type: Object,
    required: true
  }
})
const item = ref(props.item)
</script>

<style scoped>
.card-content {
  display: flex;
  align-items: center;
  height: 140px;
}

.card-image {
  width: 100px;
  height: 100px;
  object-fit: cover;
  margin-right: 20px;
}

.card-info {
  flex: 1;
}

.card-title {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
}

.card-description {
  margin-bottom: 10px;
}

.card-price {
  font-size: 16px;
  font-weight: bold;
}
</style>
