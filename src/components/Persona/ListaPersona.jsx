import { useEffect, useState } from "react";
import ItemPersona from "./ItemPersona";
import * as PersonaServidor from "./PersonaServidor";

const ListaPersona = () => {
    const [personas, setPersonas] = useState([]);
    const listaPersonas=async ()=> {
        try {
            const res = await PersonaServidor.listaPersonas();
            const data = await res.json();
            setPersonas(data.personas);
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        listaPersonas();
    }, []);

    return(
        <div className="row">
            {personas.map((persona) => (
                <ItemPersona key={persona.id} persona={persona} listaPersonas={listaPersonas}/>
            ))}
        </div>
    )
    
}
export default ListaPersona;