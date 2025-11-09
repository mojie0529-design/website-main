import Home from "@/pages/home/page";
import { Route, Switch } from "react-router-dom";
import { ContactPage } from "./pages/contact/page";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/contact",
    component: ContactPage,
  },

];

export const renderRoutes = () => {
  return (
    <Switch>
      {routes.map((route, i) => (
        <Route
          key={route.path}
          exact
          path={route.path}
          render={(props) => <route.component {...props} />}
        />
      ))}
    </Switch>
  );
};
