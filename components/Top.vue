<template>
  <div>
    <span class="nav-item" @click="router.push('/')">홈</span>
    <span class="nav-item" @click="router.push('/count')">카운트</span>
    <span class="nav-item" @click="router.push('/movie')">무비</span>

    <span class="navbarItem" @click="router.push('/news')">뉴스</span>
  </div>
</template>

<script lang="ts" setup>
const router = useRouter()
</script>

<style lang="scss" scoped>

</style>
