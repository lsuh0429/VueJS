<template>
  <v-app>
    <Menu />
    <div style="margin-left: 30vh">
      <router-view/>
    </div>
  </v-app>
</template>

<script>
import Menu from '@/components/menu/Menu'

export default {
  name: 'App',

  components: {
    Menu
  },

  data() {
    return {
    }
  },
};
</script>
