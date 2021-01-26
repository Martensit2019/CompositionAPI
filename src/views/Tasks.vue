<template>
  <div v-if="tasks.length === 0">
    <h1 class="text-white center">Задач пока нет</h1>
  </div>
  <div v-else>
    <h3 class="text-white">Всего активных задач: {{$store.getters.countActive}}</h3>

    <!-- <div class="card">
      <h2 class="card-title">
        Название задачи
        <AppStatus :type="'done'"/>
      </h2>
      <p>
        <strong>
          <small>
            {{new Date().toLocaleDateString()}}
          </small>
        </strong>
      </p>
      <button class="btn primary" @click="$router.push('/task')" >Посмотреть</button>
    </div> -->
    <div class="card" v-for="task in tasks" :key="task">
      <h2 class="card-title">
        {{ task.title }}
        <AppStatus :type="'done'" :status="task.status" />
      </h2>
      <p>
        <strong>
          <small>
            {{ task.date }}
          </small>
        </strong>
      </p>
      <button class="btn primary" @click="$router.push('/task/' + task.id)">
        Посмотреть
      </button>
    </div>
  </div>
</template>

<script>
import AppStatus from "../components/AppStatus"
import {computed } from 'vue'
import { useStore } from 'vuex'

export default {
  setup(){
    const store = useStore()
    const tasks = computed(() => store.state.tasks)

    return {
      tasks
    }
  },

/*
  computed: {
    tasks() {
      return this.$store.state.tasks
    },
  },
   */
  mounted() {
    const data = localStorage.getItem('taskList')
    if(data){
      this.$store.dispatch('getList', data)
    }else{
      console.log('В хранилище пусто');
    }
  },
 
  components: { AppStatus },
};
</script>
