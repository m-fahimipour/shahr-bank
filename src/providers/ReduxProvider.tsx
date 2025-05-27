import { Provider } from "react-redux";
import { store } from "../store/store";
import type { ReactNode } from "react";

interface IReduxProvider {
  children: ReactNode;
}

export function ReduxProvider({ children }: IReduxProvider) {
  return <Provider store={store}>{children}</Provider>;
}
