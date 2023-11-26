<template>
  <div class="w-full min-h-full pb-50 relative">
    <!-- swiper -->
    <section class="store-content">
      <Slideshow :images="images"/>
      <ItemList :items="items"/>
    </section>
  </div>
</template>
<script setup>
import { ref, computed } from 'vue'
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

const items = computed(() => [
  {
    name: '商品1',
    description: '商品1的描述',
    price: 100,
    imageUrl: 'images/image1.jpg',
  },
  {
    name: '商品2',
    description: '商品2的描述',
    price: 200,
    imageUrl: 'images/image2.jpg',
  },
  {
    name: '商品3',
    description: '商品3的描述',
    price: 300,
    imageUrl: 'images/image3.jpg',
  },
  {
    name: '商品4',
    description: '商品4的描述',
    price: 400,
    imageUrl: 'images/image4.jpg',
  },
  {
    name: '商品5',
    description: '商品5的描述',
    price: 500,
    imageUrl: 'images/image5.jpg',
  },
  {
    name: '商品6',
    description: '商品6的描述',
    price: 600,
    imageUrl: 'images/image6.jpg',
  },
  {
    name: '商品7',
    description: '商品7的描述',
    price: 700,
    imageUrl: 'images/image7.jpg',
  },
  {
    name: '商品8',
    description: '商品8的描述',
    price: 800,
    imageUrl: 'images/image8.jpg',
  },
  {
    name: '商品9',
    description: '商品9的描述',
    price: 900,
    imageUrl: 'images/image9.jpg',
  },
  {
    name: '商品10',
    description: '商品10的描述',
    price: 1000,
    imageUrl: 'images/image10.jpg',
  },
  {
    name: '商品11',
    description: '商品11的描述',
    price: 1100,
    imageUrl: 'images/image11.jpg',
  },
  {
    name: '商品12',
    description: '商品12的描述',
    price: 1200,
    imageUrl: 'images/image12.jpg',
  },
  {
    name: '商品13',
    description: '商品13的描述',
    price: 1300,
    imageUrl: 'images/image13.jpg',
  },
  {
    name: '商品14',
    description: '商品14的描述',
    price: 1400,
    imageUrl: 'images/image14.jpg',
  },
  {
    name: '商品15',
    description: '商品15的描述',
    price: 1400,
    imageUrl: 'images/image15.jpg',
  },
]);

</script>
<style scoped>
.store-content {
  margin: 20px;
  max-height: 1000px;
}
</style>