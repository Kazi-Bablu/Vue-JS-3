const app = Vue.createApp({
  data(){
      return{
          title:'The final empire',
          author:'Nazrul',
          age:30,
      }
  },
  methods:{
    changeTitle(title){
        this.title= title;
    }
  }
})

app.mount('#app')