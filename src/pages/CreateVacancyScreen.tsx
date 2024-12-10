import React, { useState, ChangeEvent, FormEvent } from "react";
import axios from "axios";
import "./CreateVacancyScreen.css"
import AppBarDefault from "../components/AppBarDefault";
import FooterDefault from "../components/FooterDefault";

// Definição do tipo para os dados do formulário
interface FormData {
    id?: number;
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

const PostarVaga: React.FC = () => {
    // Estado para armazenar os dados do formulário
    const [formData, setFormData] = useState<FormData>({
        title: '',
        description: '',
        requirements: '',
        localization: '',
        workload: 0,
        salary: 0,
        status: true,
        amount: 0,
        position: '',
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

            const url = "//localhost:8080/vacancy/";


            console.log(formData)
            const response = await axios.post(url, formData);


            setMensagem("Vaga publicada com sucesso!");
            setFormData({
                title: '',
                description: '',
                requirements: '',
                localization: '',
                workload: 0,
                salary: 0,
                status: true,
                amount: 0,
                position: '',
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
                            name="title"
                            placeholder="Adicione um titulo"
                            value={formData.title}
                            onChange={handleChange}

                        />
                    </div>
                    <div className="form-group">
                        <label>Cargo</label>
                        <input
                            type="text"
                            name="position"
                            placeholder="Informe o cargo"
                            value={formData.position}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-row">
                        <div className="form-group">
                            <label>Salário Mínimo</label>
                            <input
                                type="text"
                                name="salary"
                                placeholder="Salário"
                                value={formData.salary}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group">
                            <label>Vagas</label>
                            <input
                                type="text"
                                name="amount"
                                placeholder="Número de vagas"
                                value={formData.amount}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label>Nível de trabalho</label>
                            <input
                                type="text"
                                name="workload"
                                placeholder="Nível de trabalho"
                                value={formData.workload}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group">
                            <label>País</label>
                            <input
                                type="text"
                                name="localization"
                                placeholder="Informe a localização"
                                value={formData.localization}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <label>Descrição da Vaga</label>
                        <textarea
                            name="description"
                            placeholder="Adicione a descrição..."
                            value={formData.description}
                            onChange={handleChange}
                        ></textarea>
                    </div>
                    <div className="form-group">
                        <label>Descrição da Vaga</label>
                        <textarea
                            name="requirements"
                            placeholder="Adicione os requisitos..."
                            value={formData.requirements}
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
