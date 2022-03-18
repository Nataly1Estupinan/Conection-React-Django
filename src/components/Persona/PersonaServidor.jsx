const API_URL = "https://app-django-naty.herokuapp.com/";

export const listaPersonas = async () => {
  return await fetch(API_URL);
};

export const getPersona = async (personaId) => {
    return await fetch(`${API_URL}${personaId}`);
  };

export const registrarPersona = async (nuevaPersona) => {
  return await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      TDocument_Type: String(nuevaPersona.TDocument_Type).trim(),
      document: parseInt(nuevaPersona.document),
      names: String(nuevaPersona.names).trim(),
      last_names: String(nuevaPersona.last_names).trim(),
      hobbie: String(nuevaPersona.hobbie).trim(),
    }),
  });
};

export const actualizarPersona = async (personaId, actualizarPersona) => {
    return await fetch(`${API_URL}${personaId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            TDocument_Type: String(actualizarPersona.TDocument_Type).trim(),
            document: parseInt(actualizarPersona.document),
            names: String(actualizarPersona.names).trim(),
            last_names: String(actualizarPersona.last_names).trim(),
            hobbie: String(actualizarPersona.hobbie).trim(),
        })
    });
};

export const borrarPersona = async (personaId) => {
    return await fetch(`${API_URL}${personaId}`, {
        method: 'DELETE'
    });
};
