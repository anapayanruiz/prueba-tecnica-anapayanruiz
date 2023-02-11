import { IMessage } from '@/utils/models';
import api from '@/api-services/api';
import { Commit } from 'vuex';

// initial state
const state = {
  messages: []
}

// getters
const getters = {}

// actions
const actions = {
    getMessages({ commit }: { commit: Commit }): void {
        api.getMessages().then((messages: IMessage[]) => {
            commit('setMessages', messages)
        });
    }
}

// mutations
const mutations = {
    setMessages(state: { messages: IMessage[]; }, messages: IMessage[]) {
        state.messages = messages;
    }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}