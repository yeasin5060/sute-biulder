import { AuthProvider } from "@better-auth-ui/react";
import { authClient } from "./lib/auth-client";
import { useNavigate , NavLink} from "react-router-dom";


export function Providers ({children} : {children : React.ReactNode}){
    const navigate = useNavigate();

    return (
        <AuthProvider
            authClient = {authClient}
            navigate = {navigate}
            Link={(props)=> <NavLink {...props} to = {props.href}/>}
        >
            {children}
        </AuthProvider>
    )
}