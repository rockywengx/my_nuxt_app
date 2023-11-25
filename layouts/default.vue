<template>
  <div>
    <el-container>
      <el-header class="header">
        <div class="header">
          <Navbar />
        </div>
      </el-header>
      <el-main class="p-0 bg-bg page-box">
        <el-row class="w-full min-h-full main relative">
          <el-col :span="24">
            <slot />
          </el-col>
        </el-row>
      </el-main>
      <el-footer class="footer-box">
        <Footer />
      </el-footer>
    </el-container>
  </div>
</template>
<script setup>
</script>

<style lang="scss" scoped>
.el-header{
  position: sticky;
  top: 0;
  z-index: 100;
  width: 100%;
  height: 64px;
  background-color: #fff;
  box-shadow: 0 2px 4px 0 rgba(0,0,0,0.25);

  @media (width >= 1024px) {
    height: 90px;
  }

}

.header{
  position: sticky;
  top: 0;
  z-index: 100;
  width: 100%;
  height: 64px;

  @media (width >= 1024px) {
    height: 90px;
  }

}

.search-block{
  position: fixed;
  top: 64px;
  left: 0;
  z-index: 10;
  width: 100%;
  background-color: #fff;

  :deep(input){
    width: 100%;
  }
}

.main{
  display: flex;
  justify-content: center;
  margin: auto;
  max-width: 1160px;
}

:deep(.content){
  margin: auto;
  max-width: 900px;
}

.page-box{
  padding: 0;
  background-color: #fff;
  min-height: 500px;
}

.footer-box{
  position: relative;
  bottom: 0;
  width: 100%;
  height: 64px;
  background-color: #fff;

  @media (width >= 1024px) {
    height: 90px;
  }
}
</style>
