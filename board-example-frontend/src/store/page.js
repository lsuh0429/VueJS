import api from '@/api'
import Cookies from 'js-cookie'

export default {
    namespaced: true,
    state: () => ({
        posts: [],
        post: null,
        accessToken: '',
        me: null
    }),
    getters: {
        isAuthorized(state) {
            return state.accessToken.length > 0 && !!state.me
        }
    },
    mutations: {
        fetchPostList(state, payload) {
            state.posts = payload
        },
        fetchPost(state, payload) {
            state.post = payload
        },
        setAccessToken(state, accessToken) {
            if(accessToken) {
                state.accessToken = accessToken
                api.defaults.headers.common.Authorization = `Bearer ${accessToken}`
                Cookies.set('accessToken', accessToken)
            }
        },
        setMyInfo(state, me) {
            if(me) {
                state.me = me
            }
        },
        destroyAccessToken(state) {
            state.accessToken = ''
            delete api.defaults.headers.common.Authorization
            Cookies.remove('accessToken')
        },
        destroyMyInfo(state) {
            state.me = null
        },
        updateComment(state, payload) {
            state.post.comments.push(payload)
        },
        editComment(state, payload) {
            const { id: commentId, contents, updatedAt } = payload
            const targetComment = state.post.comments.find(comment => comment.id === commentId)
            targetComment.contents = contents
            targetComment.updatedAt = updatedAt
        },
        deleteComment(state, commentId) {
            const targetIndex = state.post.comments.findIndex(comment => comment.id === commentId)
            state.post.comments.splice(targetIndex, 1)
        }
        /* updateState(state, payload) {
            Object.keys(payload).forEach(key => {
                state[key] = payload[key];
            })
        },
        openEdit(state) {
            state.isEdit = true
        },
        closeEdit(state) {
            state.isEdit = false
        }, */
    },
    actions: {
        fetchPostList({commit},) {
            return api.get('/posts')
            .then(res => {
                commit('fetchPostList', res.data)
            })
        },
        fetchPost({commit}, postId) {
            return api.get(`/posts/${postId}`)
            .then(res => {
                commit('fetchPost', res.data)
            })
        },
        signin({commit}, payload) {
            const { email, password } = payload
            return api.post('/auth/signin', { email, password })
            .then(res => {
                const { accessToken } = res.data
                commit('setAccessToken', accessToken)

                return api.get('/users/me')
            })
            .then(res => {
                commit('setMyInfo', res.data)
            })
        },
        signinByToken({commit}, token) {
            commit('setAccessToken', token)

            return api.get('/users/me')
            .then(res => {
                commit('setMyInfo', res.data)
            })
        },
        signout({commit}) {
            commit('destroyAccessToken')
            commit('destroyMyInfo')
        },
        createComment({commit, state}, contents) {
            const postId = state.post.id
            return api.post(`/posts/${postId}/comments`, {contents})
            .then(res => {
                commit('updateComment', res.data)
            })
        },
        editComment({commit, state}, {commentId, comment}) {
            const postId = state.post.id
            return api.put(`/posts/${postId}/comments/${commentId}`, { contents: comment })
            .then(res=> {
                commit('editComment', res.data)
            })
        },
        deleteComment({commit, state}, commentId) {
            const postId = state.post.id
            return api.delete(`/posts/${postId}/comments/${commentId}`)
            .then(res => {  // eslint-disable-line no-unused-vars
                commit('deleteComment', commentId)
            })
        }
        /* async selectPageList({commit}){
            await axios.get('/demo/page/selectPageList').then(res => {
                console.log(res.data)
                commit('updateState', { items:res.data })
            })
        },
        async insertPage({commit}, data){
            await axios.post('/demo/page/insertPage', data).then(res => {
                commit('updateState', { items:res.data })
            })
        },
        async deletePage({commit}, data){
            await axios.post('/demo/page/deletePage', data).then(res => {
                commit('updateState', { items:res.data })
            })
        },
        async updatePage({commit}, data){
            console.log(data);
            await axios.post('/demo/page/updatePage', data).then(res => {
                commit('updateState', { items:res.data })
            })
        } */
    }
}