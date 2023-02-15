<template>
    <div class="container col-md-4 mt-5">
    <h3 class="p-1">Register Form</h3>
      <form @submit.prevent="register">
        <div class="form-group">
          <label for="email">Email address</label>
          <input
            type="email"
            class="form-control"
            id="email"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            v-model="email"
          />
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input
            type="password"
            class="form-control"
            id="password"
            placeholder="Password"
            v-model="password"
          />
        </div>
        <div class="form-group">
          <label for="passwordRepeat">Password Repeat</label>
          <input
            type="password"
            class="form-control"
            id="passwordRepeat"
            placeholder="Password Repeat"
            v-model="passwordRepeat"
          />
        </div>
        <div class="d-flex justify-content-end">
          <button type="submit" class="btn btn-primary mt-2">Sign In</button>
        </div>
      </form>
    </div>
  </template>
  
  <script>
  import { app } from "firebase/app";

  export default {
    name: "login",
    data() {
      return {
        email: "",
        password: "",
        passwordRepeat: ""
      };
    },
    methods:{
      register(){
        if(this.password != this.passwordRepeat){
          toastr.warning("Password and repeat cannot be the same!")
        }
        else{
          app.auth().createUserWithEmailAndPassword(this.email, this.password)
          .then(
            user => {
              toastr.success("Successfully registered.")
              this.$router.replace("login")
            },
            error => {
              toastr.error(error.message)
            }
          )
        }
      }
    }
  };
  </script>
  