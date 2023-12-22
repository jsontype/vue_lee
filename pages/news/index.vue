<template>
	<div class="AppLeft">
		<div class="top">
			<Top />
			<h1 class="AppTitle">News App📣</h1>
			<div v-for="SingleNews in news" :key="SingleNews.id">
				<a class="news-title" :href="SingleNews.url">{{ SingleNews.comments_count }} #  {{ SingleNews.title }}</a>
				<span> / {{ SingleNews.time_ago }} / </span>
				<span>ID: {{ SingleNews.user }}</span>
			</div>
		</div>
	</div>
</template>

<script setup>

	import { reactive, onMounted } from 'vue'
	const news = reactive([])

	function getNews() {
		fetch('https://api.hnpwa.com/v0/news.json')
			.then(res => res.json())
			.then(json => {
				console.log(json)
				news.push(...json)
			})
	}

	onMounted(() => {
		getNews()
	})
</script>

<style lang="scss" scoped>
@import '@/assets/resources';
</style>