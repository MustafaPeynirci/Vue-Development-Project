const app = new Vue({
    el: '#app',
    name: 'vueDevelopmentProject',
    data: {
        dataItem: {
            title: "",
            status: false
        },
        listItem: [
            {
                id: 1,
                title: "Home",
            },
            {
                id: 2,
                title: "Business"
            },
            {
                id: 3,
                title: "General"
            }
        ],
        activeListItem: {},
        filteredDataList: [],
        newListItem: {},
        dataList: [
            {
                id: 1,
                title: "Drink coffee",
                status: true,
                list: "Home"
            },
            {
                id: 2,
                title: "Do the daily coding",
                status: false,
                list: "Business"
            },
            {
                id: 3,
                title: "Cook food",
                status: false,
                list: "General"
            },
            {
                id: 4,
                title: "Clean up",
                status: false,
                list: "General"
            }
        ]
    },
    created() {
        const defaultListItem = this.listItem[0]
        if(defaultListItem != null){
            this.changeListItem(defaultListItem.id)
        }
    },
    methods: {
        toggleTodoListStatus(index){
            this.todoList[index].status = !this.todoList[index].status
        },
        toggleTodoListFinishedStatus(index){
            this.todoListFinished[index].status = !this.todoListFinished[index].status
        },
        clearDataItem(){
            this.dataItem = { title: "", status: false }
        },
        saveItem(){
            if(this.dataItem.title != ""){
                this.dataList.push(this.dataItem)
                this.dataItem.id = this.dataList.length + 1
                this.dataItem.list = this.activeListItem.title
                this.clearDataItem()
                this.changeListItem(this.activeListItem.id)
            }
        },
        deleteItem(id){
            this.dataList = this.dataList.filter(response => response.id != id) 
        },
        changeListItem(id){
            const value = this.listItem.find(fnd => fnd.id === id)
            if(value != null){
                this.activeListItem = value
                this.filteredDataList = this.dataList.filter(response => response.list === value.title)
            } 
        },
        listItemSave(){
            if(this.newListItem.title != null){
                 this.newListItem.id = this.listItem.length + 1
                 this.listItem.push(this.newListItem)
                 this.newListItem = {}
            }
        },
        listItemCount(title){
            return this.dataList.filter(flt => flt.list === title).length
        }
    },
    computed: {
        todoList(){
            return this.filteredDataList.filter(response =>
                response.status === false
            )
        },
        todoListFinished(){
            return this.filteredDataList.filter(response =>
                response.status === true
            )
        }
    }
})