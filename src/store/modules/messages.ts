import api from '@/api-services/api';
import { Commit } from 'vuex';
import { IMessage } from '@/utils/models';

const state = {
    messages: [] as IMessage[],
    text: '' as string,
};

const actions = {
    async getMessages({ commit }: { commit: Commit }): Promise<void> {
        return api.getMessages()
        .then((messages: IMessage[]) => {
            commit('setMessages', messages);
        });
    },
    async sendMessage({ commit }: { commit: Commit }, text: string): Promise<void> {
        return commit('addMessage', text);
    }
}

const mutations = {
    setMessages(state: { messages: IMessage[]; }, messages: IMessage[]): void {
        state.messages = messages;
    },
    addMessage(state: { messages: IMessage[] }, text: string): void {
        state.messages.push({
            deliveryDate: new Date().toISOString(),
            text: text,
            typeMessage: 2,
            isFile: false,
            numberVersion: '',
            nameFile: '',
            typeFile: '',
            sizeFile: '',
            url: '',
        });
    }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}