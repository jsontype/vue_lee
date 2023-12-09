<template>
  <div>
    <span class="nav-item" @click="router.push('/')">홈</span>
    <span class="nav-item" @click="router.push('/count')">카운트</span>
    <span class="nav-item" @click="router.push('/movie')">무비</span>
  </div>
</template>

<script lang="ts" setup>
const router = useRouter()
</script>

<style lang="scss" scoped>
.nav-item {
  cursor: pointer;
  margin-right: 10px;

  &:hover {
    background: pink;
    text-decoration: underline;
  }
}
</style>