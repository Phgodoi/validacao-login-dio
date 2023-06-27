import { useForm } from "react-hook-form";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { useNavigate } from "react-router-dom";

import {
  Container,
  LoginContainer,
  Column,
  Spacing,
  Title,
  Row
} from "./styles";
import { defaultValues, IFormData } from "./types";

const schema = yup
  .object({
    email: yup.string().email("Email inválido").required("Campo obrigatório"),
    password: yup
      .string()
      .min(6, "No minimo 6 caracteres")
      .required("Campo obrigatório"),
  })
  .required();



const Login = () => {
  const navigate = useNavigate();

  const {
    control,
    formState: { errors, isValid },
  } = useForm<IFormData>({
    resolver: yupResolver(schema),
    mode: "onBlur",
    defaultValues,
    reValidateMode: "onChange",
  });
  
  const handleOnNewUser = () => {
    navigate("/NewUser")
  }

  return (
    <Container>
      <LoginContainer>
        <Column>
          <Title>Login</Title>
          <Spacing />
          <Input
            name="email"
            placeholder="Email"
            control={control}
            errorMessage={errors?.email?.message}
          />
          <Spacing />
          <Input
            name="password"
            type="password"
            placeholder="Senha"
            control={control}
            errorMessage={errors?.password?.message}
          />
          <Spacing />
          <Button title="Entrar" disabled={!isValid} /> 
          <Spacing />
          <Row>Novo por aqui?<button onClick={handleOnNewUser}>Criar conta</button></Row>   
        </Column>
      </LoginContainer>
    </Container>
  );
};

export { Login };
