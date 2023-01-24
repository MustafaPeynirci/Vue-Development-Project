Vue.component("InventoryForm", {
    template: "#inventory-form-template",
    data(){
        return {
            item: {}
        }
    },
    methods: {
        saveItem() {
            Vue.set(this.item, "id", ++this.$parent.$data.lastId)
            Vue.set(this.item, "archive", false)
            this.$parent.$data.allItems.push(this.item)
            this.item = {}
        }
    }
})

Vue.component("InventoryList", {
    template: "#inventory-list-template",
    props: {
        title: {type:String, required:true, default:"list"},
        items: {type:Array, required:true, default:[]}
    },
    computed: {
        totalPrice(){
            let totalP = 0
            this.items.forEach(response => {
                totalP += parseFloat(response.price.toString()) 
            })
            return totalP.toFixed(2)
        },
        totalUnit(){
            let totalU = 0
            this.items.forEach(response => {
                totalU += parseInt(response.unit.toString())
            })
            return totalU
        }
    },
    methods: {
        changeItemStatus(item){
            item.archive = !item.archive
        },
        deleteItem(id){
            this.$parent.$data.allItems = this.$parent.$data.allItems.filter(fltr => fltr.id !== id)
        }
    }
})

const App = new Vue({
    el: '#app',
    data: {
        lastId: 0,
        allItems: [
            {"id": 1, "title": "Table", "category": "Furniture", "unit": "1", "price": 259, "archive": false},
            {"id": 2, "title": "Bookself", "category": "Furniture", "unit": "2", "price": 159, "archive": false},
            {"id": 3, "title": "Monitor", "category": "Electronic", "unit": "5", "price": 400, "archive": true}
        ],
    },
    created() {
        this.lastId = this.allItems.length
    },
    computed: {
        activeItems(){
            return this.allItems.filter(fltr => fltr.archive === false)
        },
        archiveItems(){
            return this.allItems.filter(fltr => fltr.archive === true)
        }
    },
    methods: {
    }
});