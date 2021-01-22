<template>
    <div class="post-view-page">
        <!-- <div class="post-view">
            <div>
                <h1>게시글의 제목이 노출된다.</h1>
                <span>게시판 번호 1</span>
                <strong>홍길동 . 2020-01-21 14:00</strong>
            </div>
            <p>해당 영역에는 게시글의 컨텐츠 내용이 노출된다.</p>
        </div> -->
        <post-view v-if="post" :post="post"/>
        <p v-else>게시글 불러오는 중...</p>
        <router-link :to="{ name: 'PostListPage' }">목록</router-link>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import PostView from '@/components/PostView'

export default {
    name: 'PostViewPage',
    components: {
        PostView
    },
    props: {
        postId: {
            type: String,
            required: true
        }
    },
    methods: {
        ...mapActions('page', ['fetchPost'])
    },
    created() {
        this.fetchPost(`${this.postId}`)
        .catch(err => {
            alert(err.response.data.msg)
            this.$router.back()
        })
    },
    computed: {
        ...mapState('page', ['post'])
    }
}
</script>

<style>

</style>