import { IMessage } from "@/utils/models";

export default {
    async getMessages(): Promise<IMessage[]> {
        return new Promise<IMessage[]>((response, reject) => {
            setTimeout(() => {
                response([
                    {
                        isFile: true,
                        numberVersion: '1',
                        name: 'Titulo del archivo a subir 2.pdf',
                        typeFile: 'pdf',
                        sizeFile: '3.8 MB',
                        deliveryDate: '28 dic 2018/14:45',
                        url: '',
                        text: '',
                        authorName: 'Silvia'
                    },
                    {
                        isFile: false,
                        numberVersion: '',
                        name: '',
                        typeFile: '',
                        sizeFile: '',
                        deliveryDate: '29 dic 2018/10:11',
                        url: '',
                        text: '¡Gran trabajo Silvia! Pero creo que deberías revisar el punto 3. Intenta añadir un poco más de contexto y un apartado final de conclusiones personales',
                        authorName: 'Profesor'
                    },
                    {
                        isFile: true,
                        numberVersion: '2',
                        name: 'Titulo del archivo a subir 2.pdf',
                        typeFile: 'pdf',
                        sizeFile: '4.8 MB',
                        deliveryDate: '30 dic 2018/8:22',
                        url: '',
                        text: '',
                        authorName: 'Silvia'
                    },
                    {
                        isFile: false,
                        numberVersion: '',
                        name: '',
                        typeFile: '',
                        sizeFile: '',
                        deliveryDate: '30 dic 2018/8:22',
                        url: '',
                        text: 'Realizados los cambios según feedback',
                        authorName: 'Silvia'
                    },
                    {
                        isFile: false,
                        numberVersion: '',
                        name: '',
                        typeFile: '',
                        sizeFile: '',
                        deliveryDate: '30 dic 2018/15:25',
                        url: '',
                        text: 'Perfecto, excelente trabajo',
                        authorName: 'Profesor'
                    },
                ]);
            }, 1000)
        });
    }
}