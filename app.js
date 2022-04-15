const app = Vue.createApp({
  data(){
      return{
          showBooks:true,
          books:[
              {title: 'name of the wind',author:'nazrul'},
              {title: 'name of the snow',author:'tiger'},
              {title: 'name of the white',author:'mr Fox'}

          ]
      }
  },
  methods:{
      toggleShowBooks()
      {
          this.showBooks = !this.showBooks
      },
    
  }
})

app.mount('#app')