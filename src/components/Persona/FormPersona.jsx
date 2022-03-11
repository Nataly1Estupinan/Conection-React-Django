import { useEffect, useState } from "react";
import * as PersonaServidor from "./PersonaServidor";
import { useNavigate, useParams } from "react-router-dom";

const FormPersona = () => {
  const navigate = useNavigate();
  const params = useParams();

  const initialState = {
    id: 0,
    TDocument_Type: "",
    document: 123,
    names: "",
    last_names: "",
    hobbie: "",
  };
  const [persona, setPersona] = useState(initialState);
  const handleInputChange = (e) => {
    setPersona({ ...persona, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res;
      if (!params.id) {
        res = await PersonaServidor.registrarPersona(persona);
        const data = await res.json();
        if (data.message === "Success") {
          setPersona(initialState);
        }
      } else {
        await PersonaServidor.actualizarPersona(params.id, persona);
      }
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const getPersona = async (personaId) => {
    try {
      const res = await PersonaServidor.getPersona(personaId);
      const data = await res.json();
      const { TDocument_Type, document, names, last_names, hobbie } =
        data.persona;
      setPersona({ TDocument_Type, document, names, last_names, hobbie });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (params.id) {
      getPersona(params.id);
    }
    // eslint-disable-next-line
  }, []);

  return (
    <div className="col-md-3 mx-auto">
      <h2 className="mb-3 text-center">Persona</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Tipo de documento</label>
          <input
            type="text"
            name="TDocument_Type"
            value={persona.TDocument_Type}
            onChange={handleInputChange}
            className="form-control"
            minLength="2"
            maxLength="100"
            autoFocus
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Número de documento</label>
          <input
            type="number"
            name="document"
            className="form-control"
            value={persona.document}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Nombres</label>
          <input
            type="text"
            name="names"
            value={persona.names}
            onChange={handleInputChange}
            className="form-control"
            minLength="2"
            maxLength="200"
            autoFocus
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Apellidos</label>
          <input
            type="text"
            name="last_names"
            value={persona.last_names}
            onChange={handleInputChange}
            className="form-control"
            minLength="2"
            maxLength="200"
            autoFocus
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Hobbie</label>
          <input
            type="text"
            name="hobbie"
            value={persona.hobbie}
            onChange={handleInputChange}
            className="form-control"
            minLength="2"
            maxLength="100"
            autoFocus
            required
          />
        </div>

        <div className="d-grid gap-2">
          {params.id ? (
            <button type="submit" className="btn btn-block btn-primary">
              Actualizar
            </button>
          ) : (
            <button type="submit" className="btn btn-block btn-success">
              Registrar
            </button>
          )}
        </div>
      </form>
    </div>
  );
};
export default FormPersona;
