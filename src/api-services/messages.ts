import { IMessage } from "@/utils/models";

export default {
    async getMessages(): Promise<IMessage[]> {
        return new Promise<IMessage[]>((response, reject) => {
            setTimeout(() => {
                response([
                    {
                        isFile: true,
                        numberVersion: '1',
                        nameFile: 'Titulo del archivo a subir 2.pdf',
                        typeFile: 'pdf',
                        sizeFile: '3.8 MB',
                        deliveryDate: '28 dic 2018/14:45',
                        url: '',
                        text: '',
                        typeMessage: 2
                    },
                    {
                        isFile: false,
                        numberVersion: '',
                        nameFile: '',
                        typeFile: '',
                        sizeFile: '',
                        deliveryDate: '28 dic 2018/14:45',
                        url: '',
                        text: 'Buenas tardes, acabo de subir el primer archivo con el primer caso práctico, espero revisión',
                        typeMessage: 2
                    },
                    {
                        isFile: false,
                        numberVersion: '',
                        nameFile: '',
                        typeFile: '',
                        sizeFile: '',
                        deliveryDate: '29 dic 2018/10:11',
                        url: '',
                        text: '¡Gran trabajo Silvia! Pero creo que deberías revisar el punto 3. Intenta añadir un poco más de contexto y un apartado final de conclusiones personales',
                        typeMessage: 1
                    },
                    {
                        isFile: true,
                        numberVersion: '2',
                        nameFile: 'Titulo del archivo a subir 2.pdf',
                        typeFile: 'pdf',
                        sizeFile: '4.8 MB',
                        deliveryDate: '30 dic 2018/8:22',
                        url: '',
                        text: '',
                        typeMessage: 2
                    },
                    {
                        isFile: false,
                        numberVersion: '',
                        nameFile: '',
                        typeFile: '',
                        sizeFile: '',
                        deliveryDate: '30 dic 2018/8:22',
                        url: '',
                        text: 'Realizados los cambios según feedback',
                        typeMessage: 2
                    },
                    {
                        isFile: false,
                        numberVersion: '',
                        nameFile: '',
                        typeFile: '',
                        sizeFile: '',
                        deliveryDate: '30 dic 2018/15:25',
                        url: '',
                        text: 'Perfecto, excelente trabajo',
                        typeMessage: 1
                    },
                ]);
            }, 1000)
        });
    }
}