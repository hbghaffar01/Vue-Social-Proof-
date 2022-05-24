import { createStore } from 'vuex'
import { auth, usersCollection } from '@/includes/firebase'
import router from '@/router/index'

export default createStore({
  state: {
    user: null
  },
  mutations: {
    toggleAuth (state, user) {
      state.user = user
    },

    CLEAR_USER (state) {
      state.user = null
    }
  },
  actions: {
    async register({ commit }, payload) {
      await auth.createUserWithEmailAndPassword(
        payload.email, payload.password,
      );
      

      //add document to user collection (.add describe the object is going to be added in user collection)
      await usersCollection.add({
        name: payload.name,
        email: payload.email,
        password: payload.password,
      });
      commit('toggleAuth', auth.currentUser)

      router.push('/dashboard')
    },
    async login({ commit }, payload) {
      await auth.signInWithEmailAndPassword(
        payload.email, payload.password
        );

        //redirect to page you want
        commit('toggleAuth', auth.currentUser)

        router.push('/dashboard')
    },
    init_login({ commit }) {
      // if user logged in 
      const user = auth.currentUser;

      if (user) {
        commit('toggleAuth');
      }
    },

    fetchUser ({ commit }) {
      auth.onAuthStateChanged(async user => {
        if (user === null) {
          commit('CLEAR_USER')
        } else {
          commit('toggleAuth', user)

          if (router.isReady() && router.currentRoute.value.path === '/authenticate') {
            router.push('/dashboard')
          }
        }
      })
    }
  },
});
