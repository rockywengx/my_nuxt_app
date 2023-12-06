<template>
  <div class="footer">
    <el-descriptions class="footer-menu" direction="vertical" :column="5" :size="size" style="vertical-align: top">
      <el-descriptions-item>
        <template #label>
          <h4>商品訊息</h4>
        </template>
        <template #default>
          <ul>
            <li>關於我們</li>
            <li>付款方式說明</li>
            <li>配送說明</li>
            <li>退換貨須知</li>
            <li>隱私權政策</li>
          </ul>
        </template>
      </el-descriptions-item>
      <el-descriptions-item>
        <template #label>
          <h4>客戶服務</h4>
        </template>
        <template #default>
          <ul>
            <li>商店留言板</li>
            <li>商品退/換貨</li>
            <li>快速查訂單</li>
          </ul>
        </template>
      </el-descriptions-item>
      <el-descriptions-item>
        <template #label>
          <h4>其他服務</h4>
        </template>
        <template #default>
          <ul>
            <li>最新消息</li>
            <li>最新公告</li>
          </ul>
        </template>
      </el-descriptions-item>
      <el-descriptions-item>
        <template #label>
          <h4>會員中心</h4>
        </template>
        <template #default>
          <ul>
            <li>會員中心</li>
            <li>訂購紀錄</li>
            <li>願望清單</li>
          </ul>
        </template>
      </el-descriptions-item>
      <el-descriptions-item class="contact-info">
        <template #label>
          <h4>聯絡我們</h4>
        </template>
        <template #default>
          <ul>
            <li>公司名稱：XXXXXXXXXXXXXXX</li>
            <li>客服專線：XX-XXXXXXXX 平日 09:30 - 18:00</li>
            <li>Mail：</li>
            <li>Line：</li>
            <li>地址/實體取貨：XXXXXXXXXXXXXXXXXXXXX</li>
            <li></li>
            <li>統一編號：XXXXXXX</li>
          </ul>
        </template>
      </el-descriptions-item>
    </el-descriptions>
  </div>
</template>
<script setup>
import { Icon } from "#components";
const Twitter = h(Icon, { name: "uil:twitter" });
const Facebook = h(Icon, { name: "uil:facebook-f" });
const Instagram = h(Icon, { name: "uil:instagram" });
</script>
<style scoped lang="scss">
.footer {
  background-color: #f5f5f5;
  padding: 20px;

  th {
    padding-bottom: 0;
  }
  
  :deep(tbody){
    vertical-align: top !important;
  }

  ul {
    margin-block-start: 0;
    margin-block-end: 0;
    padding-inline-start: 0;

    li {
      list-style: none;
      padding: 0;
    }
  }
}

.contact-info {
  max-width: 1200px;
  margin: 0 auto;
}

h4 {
  font-size: 18px;
  margin-bottom: 3px;
  margin-top: 3px;
}

p {
  margin-bottom: 5px;
}
</style>
