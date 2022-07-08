const app = {
    data(){
        return{
            title: 'Curso de Vue 3',
            name:'Carlos',
            lastName:'Ferreira - Especializati',
            products:[
                { 
                    title:'Filme 01',
                    description:'Filme muito legal',
                    image:'./assets/images/filme1.jpg',
                    stars:3,
                },
                {
                    title:'Filme 02',
                    description:'Filme muito legal(2)',
                    image:'./assets/images/filme2.jpg',
                    stars:0
                    }
                ],
                cart:[],
                }
            },
        computed:{
            fullName(){
                return this.name + ' ' + this.lastName
            }
        },
        methods:{
            addCart(product){
                this.cart.push(product)
            },

            inCart(product){
                return this.cart.indexOf(product) != -1
            },

            removeCart(product){
                this.cart = this.cart.filter((prod, index) =>    product !=prod )
            }
        }
        }
Vue.createApp(app).mount('#app');