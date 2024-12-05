import React, { useEffect, useState } from "react";
import "./Vagas.css";
import AppBarDefault from "../components/AppBarDefault";
import axios from "axios";
import { Link } from "react-router-dom";

export interface IVaga {
  objectId: string;
  titulo: string;
  cargo: string;
  salarioMinimo: string;
  salarioMaximo: string;
  vagas: string;
  pais: string;
  cidade: string;
  descricao: string;
  createdAt: string;
  updatedAt: string;
}

export function Vagas() {
  const [vagas, setVagas] = useState<IVaga[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchVagas() {
      try {

        const config = {
          headers: {
            "X-Parse-Application-Id": "gP4FXe8g4TGqobelhZpaTPK4GJUVijNv5P4WQt9P",
            "X-Parse-REST-API-Key": "Efa3c9ISbjKMqgBPPczHI6WDWxbE26ahY3TwBaug",
            "Content-Type": "application/json"
          }
        };

        const response = await axios.get("https://parseapi.back4app.com/classes/vagas", config);
        setVagas(response.data.results);
        console.log(response.data.results);
      } catch (error) {
        console.error("Erro ao buscar vagas:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchVagas();
  }, []);

  const handleRemoveVaga = async (objectId: string) => {
    try {
      const config = {
        headers: {
          "X-Parse-Application-Id": "gP4FXe8g4TGqobelhZpaTPK4GJUVijNv5P4WQt9P",
          "X-Parse-REST-API-Key": "Efa3c9ISbjKMqgBPPczHI6WDWxbE26ahY3TwBaug",
          "Content-Type": "application/json",
        },
      };

      await axios.delete(`https://parseapi.back4app.com/classes/vagas/${objectId}`, config);

      setVagas((prevVagas) => prevVagas.filter((vaga) => vaga.objectId !== objectId));
      alert("Vaga removida com sucesso!");
    } catch (error) {
      console.error("Erro ao remover a vaga:", error);
      alert("Erro ao tentar remover a vaga.");
    }
  };

  if (loading) {
    return <div className="loading">Carregando vagas...</div>;
  }

  return (
    <div>

      <AppBarDefault></AppBarDefault>

      <div className="listar-vagas-container">
        <h1>Oportunidades em Destaque</h1>
        <div className="grid-vagas">
          {vagas.map((vaga) => (
            <div className="vaga-card" key={vaga.objectId}>
              <h2>{vaga.titulo}</h2>
              <p>
                {vaga.cidade}, {vaga.pais}
              </p>
              <p>R$ {vaga.salarioMinimo} - R$ {vaga.salarioMaximo}</p>
              <p>Vagas Disponiveis : {vaga.vagas}</p>
              <div className="buttons-line">
                <Link
                  to="/detalhesvagas"
                  state={vaga}
                  className="ver-detalhes-btn"
                  text-decoration="none"

                >
                  Ver Detalhes
                </Link>
                <button
                  className="remover-vaga-btn"
                  onClick={() => { handleRemoveVaga(vaga.objectId) }}
                >Remover</button>
              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Vagas;
