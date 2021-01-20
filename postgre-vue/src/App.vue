<template>
  <div id="app">
    <SideMenu/>
    <div id="nav" style="margin-left: 20vh">
      <b-container style="padding : 50px">
        <router-view/>
      </b-container>
    </div>
  </div>
</template>

<script>
import SideMenu from '@/components/sidemenu/sidemenu'
export default {
    components: {
      SideMenu
    }
}
</script>

<style>
</style>
