
export interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    control:  any,   
    name: string;
    errorMessage?: string;
}
