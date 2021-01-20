<template>
    <div style="position: fixed;">
        <b-sidebar id="sidebar" title="MenuList"
        shadow visible
        no-close-on-route-change
        no-close-on-esc
        no-close-on-backdrop
        no-header-close
        width="30vh"
        >
            <template>
                <div class="p-3">
                    <nav class="mb-3">
                    <b-nav vertical>
                        <b-nav-item 
                        v-for="(menu,  i) in menus"
                        :key="i"
                        :to=menu.url>{{menu.menuNm}}</b-nav-item>
                    </b-nav>
                    </nav>
                </div>
            </template>
        </b-sidebar>
        
    </div>
</template>



<script>
export default {
    data() {
        return {
            menus: [
                {
                    menuNm: '홈',
                    url: '/'
                },
                {
                    menuNm: '페이지관리',
                    url: '/selectPageList'
                }
            ]
        }
    }
}
</script>

<style>

</style>