import * as PersonaServidor from "./PersonaServidor";
import { useNavigate } from "react-router-dom";

const ItemPersona = ({ persona, listaPersonas }) => {
  const habdleDelete = async(personaId) => {
    await PersonaServidor.borrarPersona(personaId);
    listaPersonas();
  };
  const navigate = useNavigate();
  return (
    <div className="col-md-4 mb-4">
      <div className="card card-body">
        <h3 className="card-title">{persona.names}</h3>
        <h3 className="card-title">{persona.last_names}</h3>
        <p className="card-text">
          <strong>Tipo de documento: </strong>
          {persona.TDocument_Type}
        </p>
        <p className="card-text">
          <strong>Número de documento: </strong>
          {persona.document}
        </p>
        <p className="card-text">
          <strong>Hobbie: </strong>
          {persona.hobbie}
        </p>
        <button onClick={() => navigate(`/actualizar/${persona.id}`)} className="btn btn-info my-2">
            Actualizar datos
          </button>
        <button
          onClick={() => persona.id && habdleDelete(persona.id)}
          className="btn btn-danger my-2"
        >
          Eliminar persona
        </button>
      </div>
    </div>
  );
};
export default ItemPersona;
