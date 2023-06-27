import { ButtonContainer } from "./style";
import { IButtonProps } from "./types";

const Button = ({ title, onClick, disabled }: IButtonProps) => {
  return <ButtonContainer onClick={onClick} disabled={disabled}>{title}</ButtonContainer>;
};

export default Button;