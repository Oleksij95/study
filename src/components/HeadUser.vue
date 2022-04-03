<template>
  <div class="head_user">
    <div class="head_user_photo">
      <img src="../assets/users/user-1.png" alt="Farhad Hossen" />
    </div>
    <div class="head_user_drop">
      <div class="head_user_name">
        Farhad Hossen
        <img src="../assets/drop-down.svg" alt="drop-down" />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.head_user {
  display: flex;
  align-items: center;
  .head_user_drop {
    color: #fff;
    margin-left: 16px;
    .head_user_name {
      font-weight: 400;
      font-size: 16px;
      line-height: 120%;
      cursor: pointer;
      img {
        margin-left: 10px;
      }
    }
  }
}
</style>
