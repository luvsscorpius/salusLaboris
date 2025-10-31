import React from 'react'
import { Menu } from '../../Components/Menu/Menu';
import * as B from '../Blog/Styles'
import * as A from './Styles'
import { IoIosSave } from "react-icons/io";
import { CiCirclePlus } from "react-icons/ci";

export const EditarPost = () => {

    const blogCategories = [
        "Fundamentos da Segurança do Trabalho",
        "Legislação e Normas Regulamentadoras (NRs)",
        "Equipamentos de Proteção Individual (EPIs)",
        "Equipamentos de Proteção Coletiva (EPCs)",
        "CIPA e Gestão de Segurança",
        "Riscos Físicos, Químicos e Biológicos",
        "Riscos Ergonômicos e Mecânicos",
        "Prevenção de Acidentes",
        "Análise e Investigação de Acidentes",
        "PGR e Gerenciamento de Riscos Ocupacionais",
        "PCMSO e Saúde Ocupacional",
        "Ergonomia no Trabalho",
        "Prevenção e Combate a Incêndios",
        "Primeiros Socorros e Emergências",
        "Treinamentos Obrigatórios",
        "Comportamento Seguro e Cultura de Segurança",
        "Segurança na Construção Civil",
        "Segurança na Indústria",
        "Segurança em Obras e Canteiros",
        "Segurança em Espaços Confinados",
        "Segurança em Altura",
        "Segurança Elétrica",
        "Segurança em Máquinas e Equipamentos",
        "Transporte e Logística Segura",
        "Saúde Mental e Bem-Estar do Trabalhador",
        "Prevenção ao Estresse e Burnout",
        "Higiene Ocupacional",
        "Inspeções e Auditorias de Segurança",
        "Documentos e Programas Obrigatórios (LTCAT, ASO, PPP)",
        "Indicadores e Estatísticas de Segurança",
        "Sustentabilidade e Meio Ambiente no Trabalho",
        "Tendências e Inovações em SST",
        "Mudanças nas NRs e Atualizações Legais",
        "Casos Reais e Estudos de Caso",
        "Entrevistas com Profissionais da Área",
        "Dicas e Materiais Educativos",
        "Modelos e Checklists de Segurança",
        "Eventos, Palestras e Seminários",
        "Opiniões e Reflexões sobre Segurança do Trabalho"
    ];

    return (
        <A.main>
            <Menu />

            <A.novoPostContainer>

                <B.blogHeader className='header'>
                    <div>
                        <h2>Editar Post</h2>
                        <button onClick={() => window.open("/adm/criarpost", "_self")}><CiCirclePlus size={45} /></button>
                    </div>

                    <hr />
                </B.blogHeader>

                <A.novoPostBody>
                    <span>
                        <label htmlFor="titulo">Título</label>
                        <input type="text" name='titulo' />
                    </span>
                    <span>
                        <label htmlFor="categoria">Categoria</label>
                        <select name="categoria">
                            {blogCategories.map((cat, index) => (
                                <option value={cat} key={index}>{cat}</option>
                            ))}
                        </select>
                    </span>
                    <span>
                        <label htmlFor="conteudo">Conteúdo</label>
                        <textarea name="conteudo" id="conteudo"></textarea>
                    </span>

                    <div>

                        <button> <IoIosSave size={22} /> Adicionar post</button>
                    </div>
                </A.novoPostBody>

            </A.novoPostContainer>
        </A.main>
    )
}
