import { IMessage } from "@/utils/models";

export default {
    async getMessages(): Promise<IMessage[]> {
        return fetch('api/messages.json')
        .then(response => response.json())
        .catch(error => console.error('Error:', error));
    }
}
