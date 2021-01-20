<template>
    <div style="position: fixed;">
            <v-card
            class="mx-auto"
            height="100vh"
            width="30vh"
            >
                <v-navigation-drawer
                absolute
                dark
                src="https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg"
                width="100%"
                height="100vh"
                permanent
                >
                    <v-list>
                        <v-list-item
                        v-for="(menu,  i) in menus"
                        :key="i"
                        :to=menu.pageUrl
                        >
                            <v-list-item-icon>
                                <v-icon>{{menu.menuIcon}}</v-icon>
                            </v-list-item-icon>
                            <v-list-item-content style="margin-left:10px;">
                                {{ menu.menuNm }}
                            </v-list-item-content>
                        </v-list-item>
                    </v-list>
                </v-navigation-drawer>
            </v-card>
        </div>
</template>

<script>
export default {
    created() {
        this.$store.dispatch('menu/selectMenuList')
    },
    computed: {
        menus () {
            return this.$store.state.menu.items
        }
    }
}
</script>

<style scoped>
    .side-menu {
        color: white;
    }
    .v-application a {
        color: white;
    }
</style>