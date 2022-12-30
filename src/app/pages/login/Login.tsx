import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useUsuarioLogado } from "../../shared/hooks";
import { ButtonLogin } from "./components/ButtonLogin";
import { InputLogin } from "./components/InputLogin";

import "./Login.css";

export const Login = () => {
  const inputPasswordRef = useRef<HTMLInputElement>(null);

  const { nomeDoUsuario } = useUsuarioLogado();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  // useEffect(() => {
  //   if (window.confirm("Voce e homem ou mulher")) {
  //     console.log("homem");
  //   } else {
  //     console.log("mulher");
  //   }
  // }, []);

  const emaillength = useMemo(() => {
    console.log("executou");
    return email.length * 1000;
  }, [email.length]);

  useEffect(() => {
    console.log(email);
  }, [email]);

  useEffect(() => {
    console.log(senha);
  }, [senha]);

  const handleEntar = useCallback(() => {
    console.log(email);
    console.log(senha);
  }, [email, senha]);

  return (
    <div>
      <form>
        <p>Usuario Logado: {nomeDoUsuario}</p>

        <p>Quantidade de caracteres no email: {emaillength}</p>

        <InputLogin
          label="Email"
          type="text"
          onChange={(e) => setEmail(e)}
          value={email}
          placeholder="email"
          onPressEnter={() => inputPasswordRef.current?.focus()}
        />

        <InputLogin
          ref={inputPasswordRef}
          label="Senha"
          type="password"
          onChange={(e) => setSenha(e)}
          value={senha}
          placeholder="senha"
        />

        <div>
          <ButtonLogin type="button" onClick={handleEntar}>
            Entrar
          </ButtonLogin>
          <ButtonLogin type="button" onClick={handleEntar}>
            Cadastrar-se
          </ButtonLogin>
        </div>
      </form>
    </div>
  );
};
