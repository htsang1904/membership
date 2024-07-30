<template>
  <div class="home-page">
    <div class="header">
      <div class="member-info"></div>
      <div class="member-card"></div>
    </div>
    <div class="body"></div>
  </div>
</template>

<script>
export default {
  props: {
    msg: String
  }
}
</script>
<style lang="scss" scoped>
.home-page {
  max-width: 600px;
  width: 100%;
  height: 100vh;
  background-color:#121a48;
  .header {
    width: 100%;
    height: 30%;
    padding: 14px;
    box-sizing: border-box;
    display: flex;
    .member-info {
      flex: 3;
      background-color: aliceblue;
    }
    .member-card {
      flex: 2;
      background-color: beige;
    }
  }
}
</style>
