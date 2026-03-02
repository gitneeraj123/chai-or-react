import React,{createContext,useContext} from "react";

//we provide default value to createContext so that first user will see a default theme 
export const ThemeContext = createContext({
    themeMode:'light', 
    darkTheme: ()=> {},
    lightTheme: ()=> {},
});

export const ThemeProvider = ThemeContext.Provider;

//custom hooks , becuase in previous every time we import two time provider and usercontext.
//here only useTheme 
export default function useTheme(){
    return useContext(ThemeContext);
}
