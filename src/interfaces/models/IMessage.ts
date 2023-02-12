import { IFile } from "./IFile";

export interface IMessage extends IFile {
    deliveryDate: string;
    text: string;
    typeMessage: number;
}