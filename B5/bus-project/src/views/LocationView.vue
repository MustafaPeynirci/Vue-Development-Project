<template>
    <div class="container">
        <h2>Seat Selection</h2>
            <table class="table table-bordered text-center">
                <tr>
                    <td class="tdcustom" v-for="item in getSeatList('Double', 'Window Side')">
                        <button :class="{'seat': item.state === 0, 'seat seat-full': item.state === 1, 'seat seat-res': item.state === 2}"
                                :disabled="item.state === 1"
                                @click="chooseSeat(item.id)">
                            {{ item.number }}
                        </button>
                    </td>
                </tr>
                <tr>
                    <td class="tdcustom" v-for="item in getSeatList('Double', 'Corridor')">
                        <button :class="{'seat': item.state === 0, 'seat seat-full': item.state === 1, 'seat seat-res': item.state === 2}"
                                :disabled="item.state === 1"
                                @click="chooseSeat(item.id)">
                            {{ item.number }}
                        </button>
                    </td>
                </tr>
                <tr>
                    <td class="tdcustom" colspan="20">corridor</td>
                </tr>
                <tr>
                    <td class="tdcustom" v-for="item in getSeatList('Single', 'Window Side')">
                        <button :class="{'seat': item.state === 0, 'seat seat-full': item.state === 1, 'seat seat-res': item.state === 2}"
                                :disabled="item.state === 1"
                                @click="chooseSeat(item.id)">
                            {{ item.number }}
                        </button>
                    </td>
                </tr>
            </table>
            <div class="d-flex justify-content-end">
                <button class="btn btn-success" v-if="selected_seats.length>0" @click="passengerInformatıon">Enter Passenger Information</button>
            </div>
    </div>
</template>

<script>
    import db from "../assets/db.json"

    export default {
        data(){
            return {
                expeditions: [],
                seats: [],
                seats_found: [],
                selected_seats: []
            }
        },
        created(){
            this.expeditions = db.expeditions
            this.seats = db.seats
            this.fetchSeats()
        },
        methods: {
            fetchSeats(){
                let expedition_id
                if(this.$route.params.expedition_id){
                    expedition_id = parseInt(this.$route.params.expedition_id)
                }
                else{
                    this.$router.push({
                        name:"expedition_search"
                    })
                }
                this.chosen_expedition = this.expeditions.find(fnd => fnd.id === expedition_id)
                this.seats_found = this.seats.filter(fltr => fltr.expedition_id === expedition_id)
            },
            getSeatList(type, location){
                return this.seats_found.filter(fltr => fltr.type === type && fltr.location === location)
            },
            chooseSeat(seat_id){
                let seat = this.seats_found.find(fnd => fnd.id === seat_id)
                seat.state = seat.state === 0 ? 2 : 0
                if(seat.state === 0){
                    this.selected_seats = this.selected_seats.filter(fltr => fltr.id != seat_id)
                }
                else{
                    this.selected_seats.push(seat)
                }
            },
            passengerInformatıon(){

            }
        }
    }
</script>
<style>
        .seat {
            background: url(../assets/img/koltuk-bos.svg) no-repeat;
            background-size: contain !important;
            display: inline-block;
            width: 56px;
            height: 70px;
            line-height: 70px;
            font-weight: bold;
            text-align: center;
            color: #555;
            border: 0;
            text-decoration: none !important;
            cursor: pointer;
            font-size: 20px;
            padding-right: 5px;
            margin: 5px 5px 5px 3px;
        }

        .seat-res {
            background: url(../assets/img/koltuk-rez.svg) no-repeat;
            color: #fff !important;
        }

        .seat-full {
            background: url(../assets/img/koltuk-dolu.svg) no-repeat;
            color: #fff !important;
        }

        .tdcustom{
            border-width: 2px 1px !important;
        }
    </style>