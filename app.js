const app = Vue.createApp({
  data(){
      return{
          showBooks:true,
          url:'www.fightfor.com',
          books:[
              {title: 'name of the wind',author:'nazrul',img:'asset/1.jpg'},
              {title: 'name of the snow',author:'tiger',img:'asset/1.jpg'},
              {title: 'name of the white',author:'mr Fox',img:'asset/1.jpg'}

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