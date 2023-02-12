import api from '@/api-services/api';
import { Commit } from 'vuex';
import { IMessage } from '@/utils/models';

const state = {
    messages: [] as IMessage[],
    text: '' as string,
    lastMessages: localStorage.getItem('last-messages') ? JSON.parse(localStorage.getItem('last-messages')!) : null,
};

const actions = {
    async getMessages({ commit }: { commit: Commit }): Promise<void> {
        return api.getMessages()
        .then((messages: IMessage[]) => {                
            commit('setMessages', state.lastMessages ? state.lastMessages : messages);
            commit('setLastMessages', state.lastMessages ? state.lastMessages : messages);
        });
    },
    async sendMessage({ commit }: { commit: Commit }, message: string): Promise<void> {
        commit('addMessage', message);
        commit('setLastMessages', state.messages);
    }
}

const mutations = {
    setMessages(state: { messages: IMessage[]; }, messages: IMessage[]): void {
        state.messages = messages;
    },
    addMessage(state: { messages: IMessage[] }, message: string): void {
        state.messages.push({
            deliveryDate: new Date().toISOString(),
            text: message,
            typeMessage: 2,
            isFile: false,
            numberVersion: '',
            nameFile: '',
            typeFile: '',
            sizeFile: '',
            url: '',
        });
    },
    setLastMessages(state: { messages: IMessage[] }, messages: IMessage[]){
        localStorage.setItem('last-messages', JSON.stringify(messages));
    }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}