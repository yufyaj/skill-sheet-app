import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react";

type AuthContextType = {
  isLoggedIn: boolean;
  setIsLoggedIn: Dispatch<SetStateAction<boolean>>;
};

export const LoginContext = createContext<Pick<AuthContextType, "isLoggedIn">>({
  isLoggedIn: false,
});

export const SetLoginContext = createContext<
  Pick<AuthContextType, "setIsLoggedIn">
>({
  setIsLoggedIn: () => {},
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <LoginContext.Provider value={{ isLoggedIn }}>
      <SetLoginContext.Provider value={{ setIsLoggedIn }}>
        {children}
      </SetLoginContext.Provider>
    </LoginContext.Provider>
  );
};

export const useAuth = () => {
  const { isLoggedIn } = useContext(LoginContext);
  const { setIsLoggedIn } = useContext(SetLoginContext);

  return {
    isLoggedIn,
    setIsLoggedIn,
  };
};
