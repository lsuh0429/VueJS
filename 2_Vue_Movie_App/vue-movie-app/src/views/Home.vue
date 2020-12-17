<template>
  <section class="home">
      <div>
          <h1>
              HomePage
          </h1>
          <h2>
          </h2>
          <h2 @click="$router.push('/about');">
              About
          </h2>
          <router-link 
            to="/selectPrductList" 
            tag="h2">
            제품 목록
          </router-link>
      </div>
  </section>
</template>