<template>
  <div class="AppCenter">
    <div class="top">
      <Top />
			<h1 class="AppTitle">Todo 앱🗒</h1>
			<span class="button-Style" id="addTodo">
				<input class="input-Style" type="text" v-model="newTodo">
			</span>
			<span>
				<button class="addButton-Style" @click="addTodo">추가</button>
			</span>
		</div>

		<div v-for="todo in todos" :key="todo.id">
			<span @click="toggleTodo(todo)">
				<span># {{ todo.id }} / </span>
				<span>{{ todo.title }}</span>
				<input type="checkbox" :checked="todo.completed" />
			</span>

			<span>
				<button class="delButton-Style" @click="delTodo(todo.id)">삭제</button>
			</span>
		</div>
	</div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'


const todos = reactive([])
const loginUserId = ref(1)
const newTodo = ref('')

function getTodos() {
	fetch('https://jsonplaceholder.typicode.com/todos')
		.then(res => res.json())
		.then(json => {
			// todos.push(...json)
			console.log(json)
			for (let i = 0; i < json.length; i++) {
				if (json[i].userId === loginUserId.value) {
					todos.push(json[i])
				}
			}
			console.log(todos[0])
			console.log(todos[1])
			console.log(todos[2])
		})
}

// 할일 추가
function addTodo() {
	if (newTodo.value === '') {
		alert('할일을 입력해주세요.')
		return
	}
	
	// 마지막 리스트 ID정의
	const maxId = todos.reduce((max, todo) => (todo.id > max ? todo.id : max), 0);


	// json데이터를 정의함?
	const todo = {
		// id에 마지막 할일 maxId + 1로 설정해둠.
		id: maxId + 1,
		title: newTodo.value,
		completed: false,
		userId: loginUserId.value
	}
	todos.push(todo)
}

// 할일 수정
function toggleTodo(item) {
	item.completed = !item.completed
}

// 할일 삭제
function delTodo(id) {
	const index = todos.findIndex(todo => todo.id === id)
	if (index !== -1) {
		todos.splice(index, 1)
	}
	console.log(todos)
}

onMounted(() => {
	getTodos()
}) 

</script>

<style lang="scss" scoped>
@import '@/assets/resources';
</style>