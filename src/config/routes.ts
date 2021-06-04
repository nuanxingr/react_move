import { FunctionComponent } from "react";
import PhoneLogin from "../pages/Login/PhoneLogin";
import PasswordLogin from "../pages/Login/PasswordLogin";
import PhoneRegister from "../pages/Register/PhoneRegister";
import CodeRegister from "../pages/Register/CodeRegister";
import PasswordRegister from "../pages/Register/PasswordRegister";

export interface RouteType {
  path: string;
  component: FunctionComponent;
}

const routes: RouteType[] = [
  {
    path: "/phoneLogin",
    component: PhoneLogin,
  },
  {
    path: "/passwordLogin",
    component: PasswordLogin,
  },
  {
    path: "/phoneRegister",
    component: PhoneRegister,
  },
  {
    path: "/codeRegister",
    component: CodeRegister,
  },
  {
    path: "/passwordRegister",
    component: PasswordRegister,
  },
];

export default routes;