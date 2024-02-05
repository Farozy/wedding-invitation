'use client';
import {createContext, useContext, Dispatch, SetStateAction, useState} from "react";
interface ContextProps {
    id: string,
    setId: Dispatch<SetStateAction<string>>,
    phone: string,
    setPhone: Dispatch<SetStateAction<string>>,
    name: string;
    setName: Dispatch<SetStateAction<string>>
}

const GlobalContext = createContext<ContextProps>({
    id: '',
    setId: (): string => '',
    phone: '',
    setPhone: (): string => '',
    name: '',
    setName: (): string => '',
});

export const GlobalContextProvider = ({children}: any) => {
    const [id, setId] = useState("");
    const [phone, setPhone] = useState("");
    const [name, setName] = useState("");

    return (
        <GlobalContext.Provider value={{ id, setId, phone, setPhone, name, setName }}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () => useContext(GlobalContext);