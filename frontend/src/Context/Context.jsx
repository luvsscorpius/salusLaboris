import React, { createContext, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";

export const SalusContext = createContext()

const SalusProvider = ({ children }) => {

    const posts = [
        { id: 0, category: "Segurança do trabalho", date: "12/09/2025", author: "Wander Delgado", title: "EPIs essenciais para proteger sua equipe", desc: "Você sabe quais são os equipamentos de proteção individual mais importantes para a sua empresa? Neste conteúdo, explicamos quais são os EPIs indispensáveis para cada tipo de atividade, como utilizá-los corretamente e qual a periodicidade de substituição e manutenção...." },
        { id: 1, category: "Segurança do trabalho", date: "12/09/2025", author: "Wander Delgado", title: "EPIs essenciais para proteger sua equipe", desc: "Você sabe quais são os equipamentos de proteção individual mais importantes para a sua empresa? Neste conteúdo, explicamos quais são os EPIs indispensáveis para cada tipo de atividade, como utilizá-los corretamente e qual a periodicidade de substituição e manutenção...." },
        { id: 1, category: "Segurança do trabalho", date: "12/09/2025", author: "Wander Delgado", title: "EPIs essenciais para proteger sua equipe", desc: "Você sabe quais são os equipamentos de proteção individual mais importantes para a sua empresa? Neste conteúdo, explicamos quais são os EPIs indispensáveis para cada tipo de atividade, como utilizá-los corretamente e qual a periodicidade de substituição e manutenção...." },
        { id: 1, category: "Segurança do trabalho", date: "12/09/2025", author: "Wander Delgado", title: "EPIs essenciais para proteger sua equipe", desc: "Você sabe quais são os equipamentos de proteção individual mais importantes para a sua empresa? Neste conteúdo, explicamos quais são os EPIs indispensáveis para cada tipo de atividade, como utilizá-los corretamente e qual a periodicidade de substituição e manutenção...." },
        { id: 1, category: "Segurança do trabalho", date: "12/09/2025", author: "Wander Delgado", title: "EPIs essenciais para proteger sua equipe", desc: "Você sabe quais são os equipamentos de proteção individual mais importantes para a sua empresa? Neste conteúdo, explicamos quais são os EPIs indispensáveis para cada tipo de atividade, como utilizá-los corretamente e qual a periodicidade de substituição e manutenção...." },
    ]

    const categorias = [
        { id: 1, title: "Fundamentos da Segurança do Trabalho", author: "Wander Delgado", date: "15/03/2024" },
        { id: 2, title: "Legislação e Normas Regulamentadoras (NRs)", author: "Karin", date: "28/04/2025" },
        { id: 3, title: "Equipamentos de Proteção Individual (EPIs)", author: "Wander Delgado", date: "09/02/2025" },
        { id: 4, title: "Equipamentos de Proteção Coletiva (EPCs)", author: "Karin", date: "22/09/2024" },
        { id: 5, title: "CIPA e Gestão de Segurança", author: "Wander Delgado", date: "06/06/2025" },
        { id: 6, title: "Riscos Físicos, Químicos e Biológicos", author: "Karin", date: "11/07/2024" },
        { id: 7, title: "Riscos Ergonômicos e Mecânicos", author: "Wander Delgado", date: "18/11/2024" },
        { id: 8, title: "Prevenção de Acidentes", author: "Karin", date: "02/08/2025" },
        { id: 9, title: "Análise e Investigação de Acidentes", author: "Wander Delgado", date: "27/04/2024" },
        { id: 10, title: "PGR e Gerenciamento de Riscos Ocupacionais", author: "Karin", date: "14/10/2024" },
        { id: 11, title: "PCMSO e Saúde Ocupacional", author: "Wander Delgado", date: "30/09/2025" },
        { id: 12, title: "Ergonomia no Trabalho", author: "Karin", date: "08/05/2024" },
        { id: 13, title: "Prevenção e Combate a Incêndios", author: "Wander Delgado", date: "03/03/2025" },
        { id: 14, title: "Primeiros Socorros e Emergências", author: "Karin", date: "19/12/2024" },
        { id: 15, title: "Treinamentos Obrigatórios", author: "Wander Delgado", date: "21/06/2024" },
        { id: 16, title: "Comportamento Seguro e Cultura de Segurança", author: "Karin", date: "04/11/2025" },
        { id: 17, title: "Segurança na Construção Civil", author: "Wander Delgado", date: "12/02/2024" },
        { id: 18, title: "Segurança na Indústria", author: "Karin", date: "09/01/2025" },
        { id: 19, title: "Segurança em Obras e Canteiros", author: "Wander Delgado", date: "16/08/2024" },
        { id: 20, title: "Segurança em Espaços Confinados", author: "Karin", date: "24/09/2025" },
        { id: 21, title: "Segurança em Altura", author: "Wander Delgado", date: "10/04/2024" },
        { id: 22, title: "Segurança Elétrica", author: "Karin", date: "28/07/2024" },
        { id: 23, title: "Segurança em Máquinas e Equipamentos", author: "Wander Delgado", date: "06/10/2025" },
        { id: 24, title: "Transporte e Logística Segura", author: "Karin", date: "25/03/2024" },
        { id: 25, title: "Saúde Mental e Bem-Estar do Trabalhador", author: "Wander Delgado", date: "01/09/2025" },
        { id: 26, title: "Prevenção ao Estresse e Burnout", author: "Karin", date: "19/01/2024" },
        { id: 27, title: "Higiene Ocupacional", author: "Wander Delgado", date: "13/05/2025" },
        { id: 28, title: "Inspeções e Auditorias de Segurança", author: "Karin", date: "07/11/2024" },
        { id: 29, title: "Documentos e Programas Obrigatórios (LTCAT, ASO, PPP)", author: "Wander Delgado", date: "15/06/2025" },
        { id: 30, title: "Indicadores e Estatísticas de Segurança", author: "Karin", date: "22/08/2025" },
        { id: 31, title: "Sustentabilidade e Meio Ambiente no Trabalho", author: "Wander Delgado", date: "05/04/2025" },
        { id: 32, title: "Tendências e Inovações em SST", author: "Karin", date: "18/12/2024" },
        { id: 33, title: "Mudanças nas NRs e Atualizações Legais", author: "Wander Delgado", date: "09/07/2024" },
        { id: 34, title: "Casos Reais e Estudos de Caso", author: "Karin", date: "29/09/2025" },
        { id: 35, title: "Entrevistas com Profissionais da Área", author: "Wander Delgado", date: "16/05/2024" },
        { id: 36, title: "Dicas e Materiais Educativos", author: "Karin", date: "08/08/2025" },
        { id: 37, title: "Modelos e Checklists de Segurança", author: "Wander Delgado", date: "20/01/2025" },
        { id: 38, title: "Eventos, Palestras e Seminários", author: "Karin", date: "17/03/2024" },
        { id: 39, title: "Opiniões e Reflexões sobre Segurança do Trabalho", author: "Wander Delgado", date: "02/09/2025" }
    ]


    const [users, setUsers] = useState([
        { email: "and@gmail.com", password: "123" },
        { email: "wander@gmail.com", password: "123" }
    ])

    const navigate = useNavigate()

    const [isUserLogged, setIsUserLogged] = useState(() => {
        const storedValue = sessionStorage.getItem("isUserLogged");
        return storedValue === "true" // converte pra boolean
    })

    const logout = () => {
        setIsUserLogged(false)
        sessionStorage.setItem("isUserLogged", false)
        toast.error("Usuário deslogado com sucesso")
    }

    // função para enviar e-mail
    const changePassword = (email) => {
        const userFound = users.find(
            (user) => user.email === email
        )

        if (userFound) {
            toast.success("Usuário encontrado, enviaremos um link de verificação para o seu e-mail")
            navigate("/login")
        } else {
            toast.error("Usuário não encontrado, informe um e-mail cadastrado no sistema ou entre em contato com o desenvolvedor")
        }
    }

    const contextValue = { posts, users, isUserLogged, setIsUserLogged, navigate, logout, changePassword, categorias }
    return (
        <SalusContext.Provider value={contextValue}  >
            {children}
        </SalusContext.Provider>
    )
}

export default SalusProvider