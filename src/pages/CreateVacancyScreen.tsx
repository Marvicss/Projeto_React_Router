import React, { useState, ChangeEvent, FormEvent } from "react";
import axios from "axios";
import "./CreateVacancyScreen.css"
import AppBarDefault from "../components/AppBarDefault";
import FooterDefault from "../components/FooterDefault";

// Definição do tipo para os dados do formulário
interface FormData {
    objectId: string;
    titulo: string;
    tags: string;
    cargo: string;
    salarioMinimo: string;
    salarioMaximo: string;
    vagas: string;
    nivelTrabalho: string;
    pais: string;
    cidade: string;
    descricao: string;
}

const PostarVaga: React.FC = () => {
    // Estado para armazenar os dados do formulário
    const [formData, setFormData] = useState<FormData>({
        objectId: "",
        titulo: "",
        tags: "",
        cargo: "",
        salarioMinimo: "",
        salarioMaximo: "",
        vagas: "",
        nivelTrabalho: "",
        pais: "",
        cidade: "",
        descricao: "",
    });

    const [mensagem, setMensagem] = useState<string>(""); // Mensagem de feedback para o usuário

    // Função para capturar alterações no formulário
    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };


    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {

            const url = "https://parseapi.back4app.com/classes/vagas"

            const config = {
                headers: {
                    "X-Parse-Application-Id": "gP4FXe8g4TGqobelhZpaTPK4GJUVijNv5P4WQt9P",
                    "X-Parse-REST-API-Key": "Efa3c9ISbjKMqgBPPczHI6WDWxbE26ahY3TwBaug",
                    "Content-Type": "application/json"
                }
            };


            const response = await axios.post(url, formData, config);


            setMensagem("Vaga publicada com sucesso!");
            setFormData({
                objectId: "",
                titulo: "",
                tags: "",
                cargo: "",
                salarioMinimo: "",
                salarioMaximo: "",
                vagas: "",
                nivelTrabalho: "",
                pais: "",
                cidade: "",
                descricao: "",
            })
            console.log(response.data);
        } catch (error) {
            console.error("Erro ao publicar a vaga:", error);
            setMensagem("Erro ao publicar a vaga. Tente novamente.");
        }
    };

    return (
        <div>


            <AppBarDefault></AppBarDefault>


            <div className="postar-vaga-container">
                <h1>Publicar a vaga</h1>
                <p>Encontre os melhores talentos para sua empresa</p>
                <form className="vaga-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Título da vaga</label>
                        <input
                            type="text"
                            name="titulo"
                            placeholder="Adicione um titulo"
                            value={formData.titulo}
                            onChange={handleChange}

                        />
                    </div>
                    <div className="form-group">
                        <label>Tags</label>
                        <input
                            type="text"
                            name="tags"
                            placeholder="Palavra-chave da vaga, tags etc."
                            value={formData.tags}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Cargo</label>
                        <input
                            type="text"
                            name="cargo"
                            placeholder="Informe o cargo"
                            value={formData.cargo}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-row">
                        <div className="form-group">
                            <label>Salário Mínimo</label>
                            <input
                                type="text"
                                name="salarioMinimo"
                                placeholder="Salário Mínimo"
                                value={formData.salarioMinimo}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label>Salário Máximo</label>
                            <input
                                type="text"
                                name="salarioMaximo"
                                placeholder="Salário Máximo"
                                value={formData.salarioMaximo}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group">
                            <label>Vagas</label>
                            <input
                                type="text"
                                name="vagas"
                                placeholder="Número de vagas"
                                value={formData.vagas}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label>Nível de trabalho</label>
                            <input
                                type="text"
                                name="nivelTrabalho"
                                placeholder="Nível de trabalho"
                                value={formData.nivelTrabalho}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group">
                            <label>País</label>
                            <input
                                type="text"
                                name="pais"
                                placeholder="Informe o país"
                                value={formData.pais}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label>Cidade</label>
                            <input
                                type="text"
                                name="cidade"
                                placeholder="Informe a cidade"
                                value={formData.cidade}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <label>Descrição da Vaga</label>
                        <textarea
                            name="descricao"
                            placeholder="Adicione a descrição..."
                            value={formData.descricao}
                            onChange={handleChange}
                        ></textarea>
                    </div>
                    <button type="submit" className="publicar-btn">
                        Publicar vaga
                    </button>
                </form>
                {mensagem && <p className="mensagem">{mensagem}</p>}
            </div>

            <FooterDefault></FooterDefault>
        </div>
    );
};

export default PostarVaga;
