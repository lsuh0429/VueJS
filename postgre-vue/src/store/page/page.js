import axios from 'axios'

export default {
    namespaced: true,
    state: () => ({
        items: [],
        isEdit: false
    }),
    getters: {},
    mutations: {
        updateState(state, payload) {
            Object.keys(payload).forEach(key => {
                state[key] = payload[key];
            })
        },
        openEdit(state) {
            state.isEdit = true
        },
        closeEdit(state) {
            state.isEdit = false
        }
        
    },
    actions: {
        async selectPageList({commit}){
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
        }
    }
}