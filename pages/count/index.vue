<template>
	<div class="AppStyle">
		<div class="top">
			<Top />
		</div>
		<div class="CountStyle-2">
			<h1>카운터 앱</h1>
			<h1>Counter: {{ count }}</h1>	
			<button class="btnStyle-Count" @click="increase">+</button>
			<button class="btnStyle-Count" @click="reset">Reset</button>
			<button class="btnStyle-Count" @click="decrease">-</button>
		</div>	
	</div>
</template>


<script setup>
import { ref } from 'vue'
// count 값 0으로 초기화
const count = ref(0)

// count 올림 내림 함수
function increase() {
	count.value++;
}
function decrease() {
	count.value--;
}
function reset() {
	count.value = 0;
}
</script>

<style lang="scss" scoped>
	@import "@/assets/resources";

</style>
