import { IMessage } from '@/utils/models';
import api from '@/api-services/api';
import { Commit } from 'vuex';

const state = {
    messages: [] as IMessage[]
}

const actions = {
    getMessages({ commit }: { commit: Commit }): void {
        api.getMessages().then((messages: IMessage[]) => {
            commit('setMessages', messages)
        });
    }
}

const mutations = {
    setMessages(state: { messages: IMessage[]; }, messages: IMessage[]): void {
        state.messages = messages;
    }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}