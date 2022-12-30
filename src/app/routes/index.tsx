import {
  BrowserRouter as Router,
  Routes as Rotas,
  Route
} from "react-router-dom";
import { Dashboard, Login } from "../pages";

export const Routes = () => {
  return (
    <Router>
      <Rotas>
        <Route path="/entrar" element={<Login />} />
        <Route path="/pagina-inicial" element={<Dashboard />} />

        {/* <Route path="*" element={ <Redirect to="/pagina-inicial" />}/> */}

      </Rotas>
    </Router>
  );
};
