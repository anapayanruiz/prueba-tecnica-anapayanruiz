import { createStore } from 'vuex';
import Messages from './modules/messages';

const store = createStore({
  modules: {
    messages: Messages,
  },
});

export default store;