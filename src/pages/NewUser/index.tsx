import { useForm } from "react-hook-form";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { useNavigate } from "react-router-dom";

import {
  Container,
  CreateContainer,
  Column,
  Spacing,
  Title,
  Row
} from "./styles";
import { defaultValues, IFormData } from "./types";

const schema = yup
  .object({
    name: yup
    .string()
    .required("Campo Obrigatório")
    .min(3, "No mínimo 3 caracteres"),

    email: yup.string().email("Email inválido").required("Campo obrigatório"),

    password: yup
      .string()
      .min(6, "No minimo 6 caracteres")
      .required("Campo obrigatório"),
  })
  .required();



const NewUser= () => {

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

  const handleOnLogin = () => {
    navigate("/");
  }
  
  return (
    <Container>
      <CreateContainer>
        <Column>
          <Title>Criar conta</Title>
          <Spacing />
          <Input
            name="name"
            placeholder="Nome"
            control={control}
            errorMessage={errors?.email?.message}
          />
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
          <Button title="Criar conta" disabled={!isValid} /> 
          <Spacing />
          <Row>Já tem conta?<button onClick={handleOnLogin}>Fazer login.</button></Row>   
        </Column>
      </CreateContainer>
    </Container>
  );
};

export { NewUser };
