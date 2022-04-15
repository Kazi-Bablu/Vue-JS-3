const app = Vue.createApp({
  data(){
      return{
          showBooks:true,
          url:'www.fightfor.com',
          books:[
              {title: 'name of the wind',author:'nazrul',img:'asset/1.jpg',isFav:true},
              {title: 'name of the snow',author:'tiger',img:'asset/1.jpg',isFav:false},
              {title: 'name of the white',author:'mr Fox',img:'asset/1.jpg',isFav:true}

          ]
      }
  },
  methods:{
      toggleShowBooks()
      {
          this.showBooks = !this.showBooks
      },
      toggleFav(book){
        book.isFav =! book.isFav
      }
    
  },
  computed:{
      filteredBooks(){
          return this.books.filter((book )=> book.isFav)
      }
  }
})

app.mount('#app')