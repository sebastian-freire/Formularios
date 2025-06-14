import { createContext, useContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const UserContext = createContext(null);

const STORAGE_USERNAME_KEY = "app_username";

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loadUser = async () => {
      try {
        const savedUsername = await AsyncStorage.getItem(STORAGE_USERNAME_KEY);
        setUser(savedUsername ? JSON.parse(savedUsername) : null);
      } catch (error) {
        console.error("Error reading from AsyncStorage", error);
      }
    };
    loadUser();
  }, []);

  useEffect(() => {
    const saveUser = async () => {
      try {
        if (user !== null) {
          await AsyncStorage.setItem(
            STORAGE_USERNAME_KEY,
            JSON.stringify(user)
          );
        } else {
          await AsyncStorage.removeItem(STORAGE_USERNAME_KEY);
        }
      } catch (error) {
        console.error("Error writing to AsyncStorage", error);
      }
    };
    saveUser();
  }, [user]);

  const login = (nuevoUsuario) => {
    setUser(nuevoUsuario);
    console.log(`Nuevo user logeado: ${nuevoUsuario}`);
  };

  const logout = () => {
    setUser(null);
    console.log(`Usuario cerrando sesion`);
  };

  const contextValue = {
    user,
    login,
    logout,
    isLoggedIn: user !== null
  };
  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
