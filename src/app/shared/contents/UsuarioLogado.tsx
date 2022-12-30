import { createContext, useCallback, useEffect, useState } from "react";

interface IUsuarioLogadoContextData {
  nomeDoUsuario: string;
  logout: () => void;
}

interface IChildren {
  children: React.ReactNode;
}

export const UsuarioLogadoContext = createContext<IUsuarioLogadoContextData>(
  {} as IUsuarioLogadoContextData
);

const handleLogout = () => {
  console.log("logout executado");
};

export const UsuarioLogadoProvider: React.FC<IChildren> = ({ children }) => {
  const [nome, setNome] = useState("jose");

  useEffect(() => {
    setTimeout(() => {
      setNome("Adriano");
    }, 2000);
  });

  return (
    <UsuarioLogadoContext.Provider
      value={{
        nomeDoUsuario: nome,
        logout: handleLogout,
      }}
    >
      {children}
    </UsuarioLogadoContext.Provider>
  );
};
