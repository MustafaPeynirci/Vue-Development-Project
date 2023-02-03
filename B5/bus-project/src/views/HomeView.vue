<template>
  <div class="container">
    <h2>Bus</h2>
        <form @submit.prevent="expedition_search">
            <div class="form-row align-items-end d-flex gap-3">
                <div class="col-sm-2">
                    <label>From</label>
                    <select class="form-control" v-model="from">
                        <option value="">Select</option>
                        <option v-for="item in points" :value="item.id" v-text="item.explanation"></option>
                    </select>
                </div>
                <div class="col-sm-2">
                    <label>To</label>
                    <select class="form-control" v-model="to">
                        <option value="">Select</option>
                        <option v-for="item in points" :value="item.id" v-text="item.explanation"></option>
                    </select>
                </div>
                <div class="col-sm-2">
                    <label>Depart</label>
                    <input type="date" class="form-control" v-model="depart">
                </div>
                <div class="col-auto">
                    <label>&nbsp;</label>
                    <button type="submit" class="btn btn-primary btn-block">Search</button>
                </div>
            </div>
        </form>
        <hr>
        <div v-if="isLoading">Expeditions Loading...</div>
          <span class="text-danger" v-if="isMessage">{{ message }}</span> 
        <div v-if="expeditions_found.length">
            <h2>Expeditions</h2>
            <table class="table table-hover">
                <tr v-for="(item, index) in expeditions_found">
                    <td>Depart
                        <h4>{{ getHours(item.depart) }}</h4>
                    </td>
                    <td>Ticket Price
                        <h4>{{ item.price }} ₺</h4>
                    </td>
                    <td>
                        <button class="btn btn-success btn-sm bg-success" @click="choose_expedition(item.id)">Choose Seat</button>
                    </td>
                </tr>
            </table>
        </div>
  </div>
</template>

<script>
import db from "../assets/db.json"

export default {
  name: 'HomeView',
  data(){
    return {
      from: "",
      to: "",
      depart: "",
      points: [],
      expeditions: [],
      expeditions_found: [],
      isLoading: false,
      isMessage: false
    }
  },
  created() {
    this.points = db.points 
    this.expeditions = db.expeditions
  },
  methods: {
    expedition_search(){
      this.isLoading = true
      this.expeditions_found = this.expeditions.filter(fltr => 
        fltr.from === this.from &&
        fltr.to === this.to &&
        this.getDate(fltr.depart) === this.getDate(this.depart)
      )
      if(this.expeditions_found.length === 0){
        this.isMessage = true
        this.message =  "No buses were found for your search criteria."
      }
      else{
        this.isMessage = false
      }
      this.isLoading = false
    },
    getDate(val){
      var dateTime = new Date(val)
      var date = 
        dateTime.getFullYear() + "-" + 
        ("0" + dateTime.getMonth()).slice(-2) + "-" +
        ("0" + dateTime.getDate()).slice(-2)
      return date
    },
    getHours(val){
      var dateTime = new Date(val)
      var hours = 
        ("0" + dateTime.getHours()).slice(-2) + ":" +
        ("0" + dateTime.getMinutes()).slice(-2)
      return hours
    }
  }
}
</script>
