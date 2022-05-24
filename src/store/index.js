import { createStore } from 'vuex'
import { auth, usersCollection } from '@/includes/firebase'

export default createStore({
  state: {
    
  },
  mutations: {
    
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
      commit('register');
    },
    async login({ commit }, payload) {
      await auth.signInWithEmailAndPassword(
        payload.email, payload.password
        );
      commit('toggleAuth');
    },
    init_login({ commit }) {
      // if user logged in 
      const user = auth.currentUser;

      if (user) {
        commit('toggleAuth');
      }
    }
  },
});
