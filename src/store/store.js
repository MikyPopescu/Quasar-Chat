import { firebaseAuth, firebaseDb } from "boot/firebase";

const state = {
  userDetails: {}
};

const mutations = {
  setUserDetails(state, payload) {
    state.userDetails = payload;
  }
};

const actions = {
  registerUser({}, payload) {
    //console.log("registerUser");
    //console.log("payload: ", payload);
    firebaseAuth
      .createUserWithEmailAndPassword(payload.email, payload.password)
      .then(response => {
        console.log(response);
        let userId = firebaseAuth.currentUser.uid;
        //writing into firebase (set fb console rules to true)
        firebaseDb.ref("users/" + userId).set({
          name: payload.name,
          email: payload.email,
          online: true
        });
      })
      .catch(error => {
        console.log(error.message);
      });
  },
  loginUser({}, payload) {
    firebaseAuth
      .signInWithEmailAndPassword(payload.email, payload.password)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error.message);
      });
  },
  handleAuthStateChanged({ commit }) {
    //console.log("handleAuthStateChanged");
    firebaseAuth.onAuthStateChanged(user => {
      if (user) {
        //user logged in
        let userId = firebaseAuth.currentUser.uid;
        firebaseDb.ref("users/" + userId).once("value", snapshot => {
          //console.log("snapshot:", snapshot);
          let userDetails = snapshot.val();
          // console.log("userDetails:", userDetails);
          commit("setUserDetails", {
            name: userDetails.name,
            email: userDetails.email,
            userId: userId
          });
        });
      } else {
        //user logged out
        commit("setUserDetails", {});
      }
    });
  }
};

const getters = {};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};
