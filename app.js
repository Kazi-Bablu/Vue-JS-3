const app = Vue.createApp({
  data(){
      return{
          showBooks:true,
          title:'The final empire',
          author:'Nazrul',
          age:30,
      }
  },
  methods:{
      toggleShowBooks()
      {
          this.showBooks = !this.showBooks
      }
  }
})

app.mount('#app')