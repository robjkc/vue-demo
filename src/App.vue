<template>
  <div id="nav">
    <b-navbar type="dark" toggleable="lg" variant="info">
      <b-navbar-nav>
        <b-nav-item>
          <router-link to="/">Home</router-link>
        </b-nav-item>
        <b-nav-item>
          <router-link to="/counter">Counter</router-link>
        </b-nav-item>
        <b-nav-item>
          <router-link to="/grocery">Grocery</router-link>
        </b-nav-item>
      </b-navbar-nav>
    </b-navbar>
    <div id="body">
      <router-view />
    </div>
  </div>
</template>

<style>
#body {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: white;
}
</style>
