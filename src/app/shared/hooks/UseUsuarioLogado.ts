import { UsuarioLogadoContext } from "./../contents/UsuarioLogado";
import { useContext } from "react";
export const useUsuarioLogado = () => {
  return useContext(UsuarioLogadoContext);
};
