import { Routes } from "./routes";
import { UsuarioLogadoProvider } from "./shared/contents";

export const App = () => {
  return (
    <UsuarioLogadoProvider>
      <Routes />
    </UsuarioLogadoProvider>
  );
};
