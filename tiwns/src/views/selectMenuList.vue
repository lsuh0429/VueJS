<template>
  <v-app>
    <v-container>
      <MenuList />
    </v-container>
  </v-app>
</template>

<script>
import MenuList from '@/components/menu/MenuList';

export default {
    components: {
        MenuList
    }
};
</script>