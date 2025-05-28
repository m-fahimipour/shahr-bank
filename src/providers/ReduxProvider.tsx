//@Third-Party
import { Provider } from "react-redux";
//------------------------------------------------------

//@Store
import { store } from "~/store/store";
//------------------------------------------------------

//@Types
import type { ReactNode } from "react";
//------------------------------------------------------

interface IReduxProvider {
  children: ReactNode;
}

export function ReduxProvider({ children }: IReduxProvider) {
  return <Provider store={store}>{children}</Provider>;
}
