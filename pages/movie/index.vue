<template>
  <div class="AppStyle">
    <div class="top">
      <Top />
    </div>

    <h1 class="AppTitle">Movie 앱 🎥</h1>
  </div>
  <div v-if="movies">
    <div v-for="movie in movies" :key="movie.id" class="movieContainer">
      <a class="movieTitle" :href="movie.url">
        {{ movie.title }} ({{ movie.year }}) 👍🏻
      </a>
      <div class="movieDetail">
        <img
          class="movieImage"
          :src="movie.large_cover_image"
          :alt="movie.title"
        />
        <!-- <div :class="{{ movie.rating }}"></div> -->
        <div class="movieDescription">
          <div class="rating" :class="getRatingClass(movie.rating)">
            평점: {{ movie.rating ? movie.rating + ' / 10점' : '정보없음' }}
          </div>
          <!-- <div>장르: {{ movie.genres.join(', ') }}</div> -->
          <div>
            장르: {{ movie.genres ? movie.genres.join(', ') : '정보없음' }}
          </div>
          <div>
            상영시간: {{ movie.runtime ? movie.runtime + '분' : '정보없음' }}
          </div>
          <div>요약: {{ movie.summary || '정보없음' }}</div>
          <div>
            토렌트 :
            <span v-if="movie.torrents">
              <a
                v-for="(tor, idx) in movie.torrents"
                :key="idx"
                :href="tor.url"
              >
                #{{ idx + 1 }}
              </a>
            </span>
            <span v-else>정보없음</span>
          </div>
        </div>
      </div>
    </div>
    <hr />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const movies = ref()

const getRatingClass = (rating) => {
  if (rating >= 9) {
    return 'good'
  } else if (rating >= 7) {
    return 'notBad'
  } else {
    return 'bad'
  }
}

onMounted(async () => {
  console.log('Mounted!!')
  try {
    const responce = await fetch(
      'https://yts.mx/api/v2/list_movies.json?sort_by=rating'
    )
    // const responce = await fetch('https://yts.mx/api/v2/list_movies.json')
    const json = await responce.json()
    movies.value = json.data.movies
    console.log('movies: ', movies.value)
  } catch (error) {
    console.log('Error fetching movies: ', error)
  }
})
</script>

<style lang="scss" scoped>
@import '@/assets/resources';
</style>
