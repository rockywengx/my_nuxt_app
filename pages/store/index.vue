<template>
  <div class="w-full min-h-full pb-50">
    <!-- swiper -->
    <section class="store-content">
      <Slideshow :images="images"/>
      <ItemList :items="items" :pagination="pagination" :load-more="loadMore" :handle-click="goDetail"></ItemList>
      <Slideshow :images="images"/>
    </section>
  </div>
</template>
<script setup>
import { ref, computed, onMounted } from 'vue'
import { useCommodityStore } from '~/stores/commodityStore';
const commodityStore = useCommodityStore();
definePageMeta({
  layout: 'default',
})

const images = computed(() => [
  {
    src: 'images/image1.jpg',
  },
  {
    src: 'images/image2.jpg',
  },
  {
    src: 'images/image3.jpg',
  },
])

const items = computed(() => commodityStore.list);
const pagination = computed(() => commodityStore.pagination);
const loadData = async () => await commodityStore.load();
const loadMore = async () => await commodityStore.loadMore();
const goDetail = (item) => {
  navigateTo(`/store/${item.id}`);
}
onMounted(async () => {
  await loadData();
})
</script>
<style scoped>
.store-content {
  margin: 20px;
}
</style>