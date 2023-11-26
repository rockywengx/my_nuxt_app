<template>
  <div class="slideshow">
    <el-carousel :interval="5000" arrow="always" height="500px">
      <el-carousel-item v-for="(item, index) in props.images" :key="index">
        <el-image :src="item.src" fit="cover" class="carousel-image" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script setup>
const props = defineProps({
  images: {
    type: Array,
    required: true,
  },
});
</script>

<style scoped>
.slideshow {
  width: 100%;
  height: 500px;
}
.carousel-image {
  width: 100%;
  height: 100%;
  /* object-fit: cover; */
}
</style>
