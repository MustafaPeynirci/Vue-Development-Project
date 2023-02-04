<template>
    <div class="container">
        <h2>Passenger Information</h2>
        <div class="row">
            <form method="post" action="#" @submit.prevent="paymentInformation">
                <div v-for="item in selected_seats" class="form-inline mb-2">
                    <label class="mr-2" for="seat">Seat Number</label>
                    <input type="text" class="form-control col-1 mr-3" v-model="item.number" id="seat" readonly>
                    <label class="mr-2" for="price">Price</label>
                    <input type="text" class="form-control col-1 mr-3" v-model="selected_expedition.price" id="price" readonly>
                    <label class="mr-2" for="identity">Identity</label>
                    <input type="text" class="form-control col-2 mr-3" name="identity" id="identity">
                    <label class="mr-2" for="nameSurname">Name Surname</label>
                    <input type="text" class="form-control col-2 mr-3" name="nameSurname" id="nameSurname">
                    <label class="mr-2" for="gender">Gender</label>
                    <input type="text" class="form-control col-1" name="gender" id="gender">
                </div>
                <button class="btn btn-success float-right">Enter Payment Information</button>
            </form>
        </div>
    </div>
</template>

<script>
    import { GlobalData } from "@/main"

    export default {
        data(){
            return {
              selected_expedition: {},
              selected_seats: []
            }
        },
        created(){
            if(GlobalData.selected_expedition == null){
                this.$router.push({name:"expedition"})
            }
            this.selected_expedition = GlobalData.selected_expedition
            this.selected_seats = GlobalData.selected_seats
            console.log(this.selected_expedition);
        },
        methods: {
            paymentInformation(){
                this.$router.push({name:"paymentInformation"})
            }
        }
    }
</script>