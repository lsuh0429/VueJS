<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">비동기처리</router-link> |
      <router-link to="/about">Promise</router-link> |
      <router-link to="/promise">Promise 심화</router-link> |
      <router-link to="/asyncAwait">async / await</router-link> |
      <router-link to="/axiosExam">Axios</router-link> |
      <router-link to="/interceptor">Axios 응용 (Interceptor)</router-link><br/>
      <router-link to="/vueChartJS">Vue-Chart-JS</router-link> |
      <router-link to="/vueCharts">Vue-Charts</router-link> |
      <router-link to="/vueChartKick">Vue-Chart-Kick</router-link> |
          </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
