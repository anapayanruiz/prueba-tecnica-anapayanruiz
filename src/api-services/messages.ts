import { IMessage } from "@/utils/models";

export default {
    async getMessages(): Promise<IMessage[]> {
        return new Promise<IMessage[]>((response, reject) => {
            setTimeout(() => {
                response([
                    {
                        isFile: false,
                        numberVersion: '',
                        nameFile: '',
                        typeFile: '',
                        sizeFile: '',
                        deliveryDate: '2018-12-28T14:45:00Z',
                        url: '',
                        text: 'Buenas tardes, acabo de subir el primer archivo con el primer caso práctico, espero revisión',
                        typeMessage: 2
                    },
                    {
                        isFile: true,
                        numberVersion: '1',
                        nameFile: 'Titulo del archivo a subir 2.pdf',
                        typeFile: 'pdf',
                        sizeFile: '3.8 MB',
                        deliveryDate: '2018-12-28T14:40:00Z',
                        url: '',
                        text: '',
                        typeMessage: 2
                    },
                    {
                        isFile: true,
                        numberVersion: '2',
                        nameFile: 'Titulo del archivo a subir 2.pdf',
                        typeFile: 'pdf',
                        sizeFile: '4.8 MB',
                        deliveryDate: '2018-12-30T08:22:00Z',
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
                        deliveryDate: '2018-12-29T10:11:00Z',
                        url: '',
                        text: '¡Gran trabajo Silvia! Pero creo que deberías revisar el punto 3. Intenta añadir un poco más de contexto y un apartado final de conclusiones personales',
                        typeMessage: 1
                    },
                    {
                        isFile: false,
                        numberVersion: '',
                        nameFile: '',
                        typeFile: '',
                        sizeFile: '',
                        deliveryDate: '2018-12-30T08:22:00Z',
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
                        deliveryDate: '2018-12-30T15:25:00Z',
                        url: '',
                        text: 'Perfecto, excelente trabajo',
                        typeMessage: 1
                    },
                ]);
            }, 1000)
        });
    }
}