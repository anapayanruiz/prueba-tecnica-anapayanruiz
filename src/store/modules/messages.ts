import { IMessage } from '@/utils/models';
import api from '@/api-services/api';
import { Commit } from 'vuex';
import { DateService } from '@/services/DateService';

const state = {
    messages: [],
    text: ''
};

const dateService = new DateService();

const actions = {
    getMessages({ commit }: { commit: Commit }): void {
        api.getMessages().then((messages: IMessage[]) => {
            commit('setMessages', messages);
        });
    }
}

const mutations = {
    setMessages(state: { messages: IMessage[]; }, messages: IMessage[]): void {
        state.messages = messages;
    },
    sendMessage(state: { messages: IMessage[] }, text: string): void {
        
        state.messages.push({
            isFile: false,
            numberVersion: '',
            nameFile: '',
            typeFile: '',
            sizeFile: '',
            deliveryDate: new Date().toISOString(),
            url: '',
            text: text,
            typeMessage: 2
        });
    }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}