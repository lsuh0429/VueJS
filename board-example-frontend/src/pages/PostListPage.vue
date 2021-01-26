<template>
    <div class="post-list-page">
        <h1>포스트 게시글</h1>
        <post-list :posts="posts"></post-list>
        <router-link :to="{name: 'PostCreatePage'}">글쓰기</router-link>
    </div>
</template>

<script>
import PostList from '@/components/PostList'
import { mapState, mapActions } from 'vuex'

export default {
    name: 'PostListPage',
    components: {
        PostList
    },
    // data() {
    //     return {
    //         posts: []
    //     }
    // },
    computed: {
        ...mapState('page', ['posts'])
    },
    created() {
        this.fetchPostList()
    },
    methods: {
        ...mapActions('page', ['fetchPostList'])
    }
}
</script>

<style>

</style>