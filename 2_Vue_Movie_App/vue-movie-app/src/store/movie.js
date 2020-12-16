import axios from 'axios'

export default {
    namespaced: true,
    state: () => ({
        title: '',
        loading: false,
        movies: []
    }),
    getters: {},
    mutations: {
        updateState(state, payload) {
            Object.keys(payload).forEach(key => {
                state[key] = payload[key];
            })
        },
        pushIntoMovies(state, movies) {
            state.movies.push(...movies)
        }
    },
    actions: {
        fetchMovies ({state, commit}, pageNum) {
            const promise = new Promise(function(resolve) {
                const res = axios.post(`https://www.omdbapi.com/?apikey=9d38c929&s=${state.title}&page=${pageNum}`)
                resolve(res)
            })
            return promise.then(res => {
                commit('pushIntoMovies', res.data.Search)
                console.log(res.data)
                return res.data
            })
        },
        async searchMovies({ commit, dispatch}) {
            commit('updateState', {
                loading: true,
                movies: []
            })
            const { totalResults } = await dispatch('fetchMovies', 1)
            const pageLength = Math.ceil(totalResults / 10)

            if(pageLength > 1) {
                for(let i = 2; i <= pageLength; i++) {
                    if(i > 4) break
                    await dispatch('fetchMovies', i)
                }
            }
        }
    }
}