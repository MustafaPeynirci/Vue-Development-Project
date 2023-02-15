<template>
  <div class="container col-md-4 mt-5">
    <h3 class="p-1">Login Form</h3>
    <form @submit.prevent="login">
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
      <div class="d-flex justify-content-end">
        <button type="submit" class="btn btn-primary mt-2">Login</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {};
  },
};
</script>
