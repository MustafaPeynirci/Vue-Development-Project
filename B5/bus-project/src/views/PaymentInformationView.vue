<template>
    <div class="container">
        <h2>Payment Information</h2>
        <form method="post" action="#" @submit.prevent="paymentInformation">
            <p><b>Total Price {{ totalPrice }} ₺</b></p>
            <div class="row">
                <div class="col-2">
                    <label class="mr-2" for="cc_no">Card No</label>
                    <input type="text" class="form-control" name="cc_no" id="cc_no">
                </div>
                <div class="col-2">
                    <label class="mr-2" for="cc_nameSurname">Name Surname</label>
                    <input type="text" class="form-control" name="cc_nameSurname" id="cc_nameSurname">
                </div>
                <div class="col-2">
                    <label class="mr-2" for="cc_ccv">CCV</label>
                    <input type="text" class="form-control" name="cc_ccv" id="cc_ccv">
                </div>
                <div class="col-3">
                    <label class="mr-2" for="cc_edm">Expiration Date (Month)</label>
                    <input type="text" class="form-control" name="cc_edm" id="cc_edm">
                </div>
                <div class="col-3">
                    <label class="mr-2" for="cc_edy">Expiration Date (Year)</label>
                    <input type="text" class="form-control" name="cc_edy" id="cc_edy">
                </div>
            </div>
            <div class="d-flex justify-content-end">
                <button class="btn btn-success btn-sm mt-2">To Pay</button>
            </div>
        </form>
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
        },
        computed:{
            totalPrice(){
                return this.selected_expedition.price * this.selected_seats.length
            }
        },
        methods: {
            paymentInformation(){
                alert("Your ticket has been successfully created.")
                GlobalData.selected_expedition = null
                GlobalData.selected_seats = null
                this.$router.push({name:"expedition"})
            }
        }
    }
</script>