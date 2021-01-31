import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    key: '',
    character: '',
    level: '',
    datas: []
  },
  mutations: {
    changeKey(state, v) {
      state.key = v;
    },
    start(state) {
      state.key = ''
    },
    addDatas(state, v) {
      state.datas.unshift(v);
    },

    deleteDatas(state) {
      state.datas = []
    }
  },
  actions: {

    character({ state }) {



      if (state.key == "れおと") {
        state.character = '永遠の裏切者、地上で最も不名誉の人種';
        state.level = '高'
      } else {
        const random = Math.floor(Math.random() * 110) + 1

        if (random >= 1 && random < 31) {
          state.character = 'メロス';
          state.level = '低'
        } else if (random >= 31 && random < 61) {
          state.character = 'セリヌンティウス';
          state.level = '低'
        } else if (random >= 61 && random < 91) {
          state.character = 'ディオニス';
          state.level = '低'
        } else if (random >= 91 && random < 96) {
          state.character = 'メロスの妹';
          state.level = '中'
        } else if (random >= 96 && random < 101) {
          state.character = "フィロストラトス";
          state.level = '中'
        } else if (random == 101) {
          state.character = "山賊";
          state.level = '高'
        } else if (random == 102) {
          state.character = "メロスの妹の結婚相手";
          state.level = '高'
        } else if (random == 103) {
          state.character = "メロスに揺さぶられた老爺";
          state.level = '高'
        } else if (random == 104) {
          state.character = "メロスに緋のマントを捧げた少女";
          state.level = '高'
        } else if (random == 105) {
          state.character = "ゼウス";
          state.level = '高'
        } else if (random == 106) {
          state.character = "メロスに蹴とばされた犬";
          state.level = '高'
        } else if (random == 107) {
          state.character = "メロスの羊";
          state.level = '高'
        } else if (random == 108) {
          state.character = "太宰治";
          state.level = '高'
        } else if (random == 109) {
          state.character = "永遠の裏切者、地上で最も不名誉の人種";
          state.level = '高'
        } else if (random == 110) {
          state.character = "王に殺された賢臣のアレキス";
          state.level = '高'
        }
      }
    },
    getDatas({ commit }) {
      commit('deleteDatas')

      firebase
        .firestore()
        .collection('meros-game')
        .orderBy('time', 'asc')
        .get()
        .then((docs) => {
          docs.forEach((doc) => {
            commit('addDatas', { name: doc.data().name, character: doc.data().character })
          })
        })
    },
    setDatas({ state, dispatch }) {
      if (state.key == "テスト") {
        dispatch('getDatas')
        return;
      }

      firebase.firestore().collection('meros-game').doc(state.key).set({
        character: state.character,
        time: new Date().getTime(),
        name: state.key
      }).then(() => {
        dispatch('getDatas')
      })

    }
  },
})
