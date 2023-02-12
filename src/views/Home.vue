<template>
    <main class="h-full w-full flex items-center justify-center">
        <router-link 
            :to="{ name: ROUTES.CHAT }" 
            class="bg-blue-500 hover:bg-color-1 text-color-3 font-bold py-2 px-4 rounded"
        >
            Go to the Chat!
        </router-link>
    </main>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { ROUTES } from '@/router';

@Options({})
export default class Home extends Vue {

    private ROUTES = ROUTES;
}
</script>

