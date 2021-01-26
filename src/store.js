import { createStore } from 'vuex'

 export default createStore({
   state() {
     return {
       counterOfActiveTasks: 0,
      //  tasks: []
       tasks: [
         {
           id: 1,
           title: 'Пройти основы Vue.js',
           date: new Date(2021, 0, 6).toLocaleDateString(),
           descr: 'Это описание задачи',
           status: 'done'
         },
         {
          id: 2,
          title: 'Познакомиться с Vue CLI',
          date: new Date(2021, 0, 14).toLocaleDateString(),
          descr: 'Это описание задачи',
          status: 'cancelled'
        },
        {
         id: 3,
         title: 'Доделать курсовую №3',
         date: new Date(2021, 0, 26).toLocaleDateString(),
         descr: 'Это описание задачи',
         status: 'pending'
       },
       {
        id: 4,
        title: 'Отдохнуть',
        date: new Date(2021, 1, 14).toLocaleDateString(),
        descr: 'Это описание задачи',
        status: 'active'
      }
       ]
     }
   },
   mutations: {
     addTask(state, task){
       state.tasks.push({
        id: task.id,
        title: task.title,
        date: task.date,
        descr: task.descr,
        status: task.status      
       })
       localStorage.setItem('taskList', JSON.stringify(state.tasks))
     },

     changeStatus(state, status){
      const idx = state.tasks.findIndex(task => task.id == status.id)
      state.tasks[idx].status = status.status
      localStorage.setItem('taskList', JSON.stringify(state.tasks))
     }
   },
   actions: {
     getList(context, payload){
      this.state.tasks = JSON.parse(payload)
     }
   },
   getters: {
    countActive(state){
      return state.tasks.filter(task => task.status === 'active').length
    }
   }
 
   
 })