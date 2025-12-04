import { createContext, ReactNode, useState } from "react";

interface GlobalContextType {
    count: number;
}

interface GlobalProviderProps {
    children: ReactNode;
}

interface Employees { 
    id: number;
    name: string;
    location: String;
    designation: string 
}

// export const GlobalContext = createContext('');
export const GlobalContext = createContext<GlobalContextType>({ employees: 0 });


const GlobalProvider = (props: GlobalProviderProps) => {

    const [employees , setEmployees] = useState(
        { id: 1, name: 'Bruce Wayne', location: 'Gotham', designation: 'Bachelor' }
    )
    return (
        <GlobalContext.Provider value={{ employees: employees }}>
            {props.children}
        </GlobalContext.Provider>
    );
}

export default GlobalProvider;
