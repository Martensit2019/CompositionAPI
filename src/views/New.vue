<template>
  <form class="card" @submit.prevent="goToTasks">
    <h1>Создать новую задачу</h1>
    <div class="form-control">
      <label for="title">Название</label>
      <input type="text" id="title" v-model.trim="title">
    </div>

    <div class="form-control">
      <label for="date">Дата дэдлайна</label>
      <input type="date" id="date" v-model="date">
    </div>

    <div class="form-control">
      <label for="description">Описание</label>
      <textarea id="description" v-model="descr"></textarea>
    </div>
    <!-- <button class="btn primary">Создать</button> -->
    <button class="btn primary" :disabled="title.length < 5 || descr.length < 5">Создать</button>
  </form>
</template>


<script>
import { ref, reactive } from 'vue'
import { useStore } from 'vuex'
import router from "@/router"

export default {

  setup(){
    const store = useStore()    
    const arr = ref('')
    const title = ref('')
    const date = ref('')
    const descr = ref('')
    const dataForm = reactive({})

    function goToTasks() {
      dataForm.id = Date.now()
      dataForm.title = title.value
      dataForm.date = date.value
      dataForm.descr = descr.value
      dataForm.status = (new Date(date.value).getTime() - Date.now()) < 0 ? 'cancelled' : 'active'  
      router.push('/tasks')
      store.commit('addTask', dataForm)
     }

    return {
      arr,
      title,
      date,
      descr,
      goToTasks
    }
  },

  /*
  data () {
    return {
      arr: [],
      title: '',
      date: '',
      descr: '',
      dataForm: {}
    }       
  },
  methods: {
    goToTasks() {
      this.dataForm.id = Date.now()
      this.dataForm.title = this.title
      this.dataForm.date = this.date
      this.dataForm.descr = this.descr
      this.$router.push('/tasks')
      this.$store.commit('addTask', this.dataForm)
     }
  },
  */
}
</script>