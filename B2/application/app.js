const app = new Vue({
    el: "#app",
    name: "vueDevelopmentProject",
    data: {
            activeUser:{},
            users: [
                {
                    id:35,
                    name:"Mustafa",
                    role:"admin"
                },
                {
                    id:58,
                    name:"Gürhan",
                    role:"employee"
                },
                {
                    id:12,
                    name:"Hasan",
                    role:"instructor"
                }
            ]
        },
    methods: {

        createUser(){
            this.activeUser = {}
            $("#userModal").modal("show")
        },

        addUser(){
            if(this.activeUser.id > 0){
                let user = this.users.find((fnd)=> fnd.id == this.activeUser.id)
                user = this.activeUser
            }
            else{
                this.users.push({
                    id: this.users.length + 1,
                    name: this.activeUser.name,
                    role: this.activeUser.role
                })
            }
            this.activeUser = {}
            $("#userModal").modal("hide")
        },

        deleteUser(id){
            const user = this.users.find((fnd)=> fnd.id == id)
            if(user != null){
                this.users = this.users.filter((flt)=> flt.id != user.id)
            }
        },

        updateUser(index){
            this.activeUser = this.users[index]
            $("#userModal").modal("show")
        }
    }
})