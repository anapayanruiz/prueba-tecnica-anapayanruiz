<template>
  <body v-if="messages.length > 0" class="flex flex-col items-center justify-center w-screen min-h-screen bg-gray-100 text-gray-800 p-10">
    <div class="flex flex-col flex-grow w-full max-w-xl bg-white shadow-xl rounded-lg overflow-hidden">
      <div v-for="message, index in messages" :key="index" class="flex flex-col flex-grow p-4 border-b border-gray-300">
        <!-- <div class="flex w-full mt-2 space-x-3 max-w-xs">
          <div class="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
          <div>
            <div class="bg-gray-300 p-3 rounded-r-lg rounded-bl-lg">
              <p class="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <span class="text-xs text-gray-500 leading-none">2 min ago</span>
          </div>
        </div>
        <div class="flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end">
          <div>
            <div class="bg-blue-600 text-white p-3 rounded-l-lg rounded-br-lg">
              <p class="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
            </div>
            <span class="text-xs text-gray-500 leading-none">2 min ago</span>
          </div>
          <div class="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
        </div> -->
        <ChatMessage 
          :message="message"
          class="flex w-full mt-2 max-w-xs"
          :class="{ 'ml-auto justify-end': message.author === AUTHOR.STUDENT }" 
        />
      </div>
      <div class="bg-white border-t border-gray-300 p-4">
        <input class="border border-gray-300 flex items-center h-10 w-full rounded-full px-3 text-sm" type="text" placeholder="Type your message…">
      </div>
    </div>
  </body>
</template>


<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { useStore } from 'vuex';
import { IMessage } from '@/utils/models';
import ChatMessage from '@/components/chat/chat-message.vue';

@Options({ 
  components: { ChatMessage }
})

export default class ChatModal extends Vue {

  private AUTHOR = {
    TEACHER: 1,
    STUDENT: 2
  };

  private get messages(): IMessage[] {
    const store = useStore();
    return store.state.messages.messages;
  }

  async created(): Promise<void> {
    const store = useStore();
    await store.dispatch('messages/getMessages');
  }
}
</script>