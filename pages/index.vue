<template>
  歡迎使用本系統，本頁是載入頁面，請稍後...
</template>
<script setup>
setTimeout(() => {
  navigateTo('/store')
}, 1000)
</script>