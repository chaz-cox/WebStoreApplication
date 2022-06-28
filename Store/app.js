const API_URL = "https://fakestoreapi.com";

Vue.component('product' , {
    template: `
    <div>
        <img v-bind:src="item.image" @click="buy = true" style="max-width:100px; cursor: pointer;">
        <div v-if="buy">
            <p>Quantity:</p>
            <input @keypress.enter="addToCart()" type="number" v-model="amount">
        </div>
        {{item.title}}
        {{item.price}}
    </div>
    `,
    data: function () {
        return{
            buy: false,
            amount: 0,
        }
    },
    props: {
        "item": Object,
        "cart": Array,
    },
    methods:{
        addToCart: function(){
            for(i=0; i<this.amount; i++){
                this.cart.push(this.item);
            }
            this.buy = false;
        }
    },
});

var app = new Vue({
        el: "#app",
        data: {
            products: [],
            Vcart: [],
            page: "welcome",
        },
    methods:{
        fetchProducts: async function(){
            let response = await fetch(`${API_URL}/products`); //equal to APT_URL + "/products"
            let data = await response.json();
            console.log(data);
            this.products = data;
        },
    },
})
