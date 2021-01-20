import axios from 'axios'

export default {
    namespaced: true,
    state: () => ({
        items: []
    }),
    getters: {},
    mutations: {
        updateState(state, payload){
            state.items = payload
        }
    },
    actions: {
        async selectMenuList({commit}){
            await axios.get('/demo/menu/selectMenuList').then(res => {
                commit('updateState', res.data)
            })
        },
        async insertMenu({commit}, data){
            await axios.post('/demo/menu/insertMenu', data).then(res => {
                commit('updateState', res.data)
            })
        },
        async deleteMenu({commit}, data){
            await axios.post('/demo/menu/deleteMenu', data).then(res => {
                commit('updateState', res.data)
            })
        },
        async updateMenu({commit}, data){
            console.log(data);
            await axios.post('/demo/menu/updateMenu', data).then(res => {
                commit('updateState', res.data)
            })
        }
    }
}