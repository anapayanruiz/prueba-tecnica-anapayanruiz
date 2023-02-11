<template>
  <body v-if="mappedMessages.length > 0" class="flex flex-col items-center justify-center w-screen min-h-screen bg-gray-100 text-gray-800 p-4">
    <div class="flex flex-col flex-grow w-full max-w-xl bg-white shadow-xl rounded-lg overflow-auto">
      <h3 class="w-full flex items-center justify-center font-bold pt-4">Comentarios</h3>
      <div v-for="message, index in mappedMessages" :key="index" class="flex flex-col flex-grow p-4">
        <ChatFile 
          v-if="message.isFile" 
          :message="message"
        />
        <ChatMessage 
          v-else
          :message="message"
          :class-name="MESSAGES_CLASS[message.typeMessage]"
          class="flex w-full mt-2 max-w-md"
          :class="{ 'ml-auto justify-end': message.typeMessage === MESSAGES_TYPE.INCOMING }" 
        />
      </div>
      <div class="bg-white p-4 border-t border-gray-300">
        <input class="bg-slate-50 border border-gray-300 flex items-center h-10 w-full rounded-full px-3 text-sm" type="text" placeholder="Type your message…">
      </div>
    </div>
  </body>
</template>


<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { useStore } from 'vuex';
import { IMessage } from '@/utils/models';
import { MESSAGES_TYPE, MESSAGES_CLASS } from '@/utils/constants';
import ChatMessage from '@/components/chat/chat-message.vue';
import ChatFile from '@/components/chat/chat-file.vue';
import { DateService } from '@/services/DateService';

@Options({ 
  components: { 
    ChatMessage,
    ChatFile
  }
})

export default class ChatModal extends Vue {

  private MESSAGES_CLASS = MESSAGES_CLASS;
  private MESSAGES_TYPE = MESSAGES_TYPE;

  private get mappedMessages(): IMessage[] {    
    const store = useStore();
    const source = store.state.messages.messages || [];
    const dateService = new DateService();

    return source
    .sort((a: IMessage, b: IMessage) => {      
      const
        dateA = new Date(a.deliveryDate),
        dateB = new Date(b.deliveryDate);

      if (dateA < dateB) {
        return -1;
      }
      else if (dateA > dateB) {
        return 1;
      }
      return 0;
    })
    .map((e: IMessage) => ({
      ...e,
      deliveryDate: dateService.formatDate(e.deliveryDate, 1, true)
    }));
  }

  async created(): Promise<void> {
    const store = useStore();
    await store.dispatch('messages/getMessages');
  }
}
</script>