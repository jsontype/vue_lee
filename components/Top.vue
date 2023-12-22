<template>
  <div class="navbar">
    <span class="navbarItem" @click="router.push('/')">홈</span>
    <span class="navbarItem" @click="router.push('/count')">카운트</span>
    <span class="navbarItem" @click="router.push('/movie')">무비</span>
    <span class="navbarItem" @click="router.push('/todo')">할일</span>
  </div>
</template>

<script lang="ts" setup>
const router = useRouter()
</script>

<style lang="scss" scoped>
@import '@/assets/resources';
</style>
