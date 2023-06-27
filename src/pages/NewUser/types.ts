export interface IFormData {
    email: string;
    password: string;
    name: string;
}

export const defaultValues: IFormData = {
    email: '',
    password: '',
    name: ''
}