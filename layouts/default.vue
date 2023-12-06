<template>
  <el-container>
    <el-header>
      <Navbar />
    </el-header>
    <el-container class="main-container" >
      <el-scrollbar height="80vh">
        <el-main class="master-area" style="overflow: clip">
          <!-- <el-row justify="start">
            <el-breadcrumb separator="|">
              <el-breadcrumb-item :to="{ path: '/' }">全站分類</el-breadcrumb-item>
              <el-breadcrumb-item>A</el-breadcrumb-item>
              <el-breadcrumb-item>B</el-breadcrumb-item>
            </el-breadcrumb>
          </el-row> -->
          <el-row>
            <el-col :span="24">
              <slot />
            </el-col>
          </el-row>
        </el-main>
        <el-footer>
          <Footer />
        </el-footer>
      </el-scrollbar>
    </el-container>
  </el-container>
</template>
<script setup>
</script>
<style lang="scss" scoped>

</style>
