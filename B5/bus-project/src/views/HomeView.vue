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
      points: []
    }
  },
  created() {
    this.points = db.points 
  },
  methods: {
    expedition_search(){

    }
  }
}
</script>
