<template>
  <footer class="footer">
    <div class="contact-info">
      <el-row>
        <el-col :span="8">
          <h4>聯絡我們</h4>
          <p>地址：XXXXXXXXXXX路XX號</p>
          <p>電話：(02) XXXX-XXXX</p>
          <p>電子郵件：info@example.com</p>
        </el-col>
        <el-col :span="8">
          <h4>追蹤我們</h4>
          <p>Facebook</p>
          <p>Instagram</p>
          <p>Twitter</p>
        </el-col>
        <el-col :span="8">
          <h4>訂閱電子報</h4>
          <p>輸入您的電子郵件以訂閱我們的最新消息。</p>
          <el-input placeholder="請輸入您的電子郵件" suffix-icon="el-icon-message"></el-input>
          <el-button type="primary">訂閱</el-button>
        </el-col>
      </el-row>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: #f5f5f5;
  padding: 20px;
}

.contact-info {
  max-width: 1200px;
  margin: 0 auto;
}

h4 {
  font-size: 18px;
  margin-bottom: 10px;
}

p {
  margin-bottom: 5px;
}
</style>
