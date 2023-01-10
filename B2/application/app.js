const app = new Vue({
    el: "#app",
    name: "vueDevelopmentProject",
    data: {
            activeUser:{},
            users: [
                {
                    id:35,
                    name:"Mustafa",
                    role:"Admin"
                },
                {
                    id:58,
                    name:"Gürhan",
                    role:"Employee"
                },
                {
                    id:12,
                    name:"Hasan",
                    role:"Instructor"
                }
            ]
        },
    methods: {

        createUser(){
            this.activeUser = {}
            $("#userModal").modal("show")
        },

        addUser(){
            this.users.push({
                id: this.users.length + 1,
                name: this.activeUser.name,
                role: this.activeUser.role
            })
            this.activeUser = {}
            $("#userModal").modal("hide")
        }
    }
})