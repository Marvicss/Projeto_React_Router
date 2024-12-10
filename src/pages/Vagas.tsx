import React, { useEffect, useState } from "react";
import "./Vagas.css";
import AppBarDefault from "../components/AppBarDefault";
import axios from "axios";
import { Link } from "react-router-dom";

export interface IVaga {
  id: number;
  title: string;
  description: string;
  requirements: string;
  localization: string;
  workload: number;
  salary: number;
  status: boolean;
  amount: number;
  position: string
}

export function Vagas() {
  const [vagas, setVagas] = useState<IVaga[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchVagas() {
      try {

        const response = await axios.get("//localhost:8080/vacancy/");
        setVagas(response.data);
        console.log(response.data.results);
      } catch (error) {
        console.error("Erro ao buscar vagas:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchVagas();
  }, []);

  const handleRemoveVaga = async (id: number) => {
    try {

      await axios.delete(`//localhost:8080/vacancy/${id}`, { data: vagas });

      setVagas((prevVagas) => prevVagas.filter((vaga) => vaga.id !== id));
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
            <div className="vaga-card" key={vaga.id}>
              <h2>{vaga.title}</h2>
              <p>
                {vaga.localization}
              </p>
              <p>R$ {vaga.salary}</p>
              <p>Vagas Disponiveis : {vaga.amount}</p>
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
                  onClick={() => { handleRemoveVaga(vaga.id) }}
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
