<template>

  <div class="card" v-if="currentTask">
    <h2>{{currentTask.title}}</h2>
    <p><strong>Статус</strong>: <AppStatus :type="'done'" :status = currentTask.status
    /></p>
    <p><strong>Дэдлайн</strong>: {{ currentTask.date }}</p>
    <p><strong>Описание</strong>: {{ currentTask.descr }}</p>
    <div>
      <button class="btn" @click="gettowork">Взять в работу</button>
      <button class="btn primary" @click="complete">Завершить</button>
      <button class="btn danger" @click="cancel">Отменить</button>
    </div>
  </div>
  <h3 class="text-white center" v-else>
    Задачи с id = <strong>{{ taskId }}</strong> нет.
  </h3>
</template>

<script>
import AppStatus from '../components/AppStatus'
import { ref, computed } from 'vue'
import { useStore } from 'vuex'

export default {
  props: ['taskId'],

  setup(props){
    const store = useStore()
    const currentTask = computed(() => store.state.tasks.find(task => task.id == props.taskId))

    function gettowork() {
      store.commit('changeStatus', {
        id: props.taskId,
        status: 'pending'
      } )
    }

    function complete() {
      store.commit('changeStatus', {
        id: props.taskId,
        status: 'done'
      } )
    }

    function cancel() {
      store.commit('changeStatus', {
        id: props.taskId,
        status: 'cancelled'
      } )
    }

    return {
      currentTask,
      gettowork,
      complete,
      cancel
    }
  },
  

  /*
  methods: {
    gettowork() {
      this.$store.commit('changeStatus', {
        id: this.taskId,
        status: 'pending'
      } )
    },
    complete() {
      this.$store.commit('changeStatus', {
        id: this.taskId,
        status: 'done'
      } )
    },
    cancel() {
      this.$store.commit('changeStatus', {
        id: this.taskId,
        status: 'cancelled'
      } )
    }
  },

  computed: {
    currentTask(){      
      return this.$store.state.tasks.find(task => task.id == this.taskId)
    }
  },
*/
  components: {AppStatus}
}
</script>



