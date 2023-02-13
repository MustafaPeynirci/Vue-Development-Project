<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light p-2">
      <a class="navbar-brand">Firebase Vue App</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/" class="nav-link" active-class="active" exact>Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/dashboard" class="nav-link" active-class="active">Dashboard</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/product-list" class="nav-link" active-class="active">Product List</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/user-list" class="nav-link" active-class="active">User List</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/login" class="nav-link" active-class="active">Login</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/register" class="nav-link" active-class="active">Register</router-link>
          </li>
        </ul>
      </div>
    </nav>

    <router-view />
  </div>
</template>

<style>
@import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
@import "../node_modules/toastr/build/toastr.min.css";
</style>
