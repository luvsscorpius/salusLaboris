import React, { useContext } from 'react'
import * as G from '../GerenciarPosts/Styles'
import * as B from '../Blog/Styles'
import * as D from './Styles'
import { Menu } from '../../Components/Menu/Menu'
import { SalusContext } from '../../Context/Context'
import { MdOutlinePostAdd } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { FaFilter } from "react-icons/fa6";
import { CartesianGrid, Legend, Line, LineChart, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

export const Dashboard = () => {

    const { posts, users, categorias } = useContext(SalusContext)

    let wander = 0
    let karin = 0

    const maxUser = posts.forEach((post) => {
        if (post.author === "Wander Delgado") {
            wander++
        } else if (post.author === "Anderson Vitor") {
            karin++
        }
    })

    const autoresData = [
        { name: "Wander", value: wander, fill: "#4A7C59" },
        { name: "Anderson", value: karin, fill: "#233D4D" }
    ]

    const renderCustomizedLabel = ({ value, percent, name }) => {
        const percentage = (percent * 100).toFixed(0);
        return `${name} ${percentage}%`;
    };

    // CONTAGEM DAS CATEGORIAS
    const categoriasCount = posts.reduce((acc, post) => {
        acc[post.category] = (acc[post.category] || 0) + 1;
        return acc;
    }, {});

    const colors = [
        "#4A7C59",
        "#233D4D",
        "#E63946",
        "#457B9D",
        "#F4A261",
        "#2A9D8F",
        "#8D99AE",
    ];

    const categoriasData = Object.entries(categoriasCount).map(([name, value], index) => ({
        name,
        value,
        fill: colors[index % colors.length] 
    }));

    return (
        <G.main>
            <Menu />

            <G.gerenciarPostsBody>
                <B.blogHeader className='header'>
                    <div>
                        <h2>Dashboard</h2>
                    </div>

                    <hr />
                </B.blogHeader>

                <D.dashBoardContainer>
                    <D.metricsContainer>

                        <D.card>
                            <D.cardHeader>
                                <MdOutlinePostAdd size={25} />
                                <p>Posts publicados</p>
                            </D.cardHeader>

                            <D.cardBody>
                                <p>{posts.length}</p>
                            </D.cardBody>
                        </D.card>

                        <D.card>
                            <D.cardHeader>
                                <FaUsers size={25} />
                                <p>Administradores</p>
                            </D.cardHeader>

                            <D.cardBody>
                                <p>{users.length}</p>
                            </D.cardBody>
                        </D.card>

                        <D.card>
                            <D.cardHeader>
                                <FaFilter size={20} />
                                <p>Categorias</p>
                            </D.cardHeader>

                            <D.cardBody>
                                <p>{categorias.length}</p>
                            </D.cardBody>
                        </D.card>

                    </D.metricsContainer>

                    <D.chartsContainer>
                        <D.chatCard>

                            <h3>Autor que mais publicou</h3>

                            <ResponsiveContainer width="100%" height={230}>
                                <PieChart>
                                    <Pie
                                        data={autoresData}
                                        cx="50%"
                                        cy="50%"
                                        outerRadius={80}
                                        dataKey="value"
                                        nameKey="name"
                                        label={renderCustomizedLabel}
                                        labelLine={false}
                                    />
                                    <Tooltip />
                                    <Legend />
                                </PieChart>
                            </ResponsiveContainer>
                        </D.chatCard>

                        <D.chatCard>

                            <h3>Categoria mais publicada</h3>

                            <ResponsiveContainer width="100%" height={230}>
                                <PieChart>
                                    <Pie
                                        data={categoriasData}
                                        cx="50%"
                                        cy="50%"
                                        outerRadius={80}
                                        dataKey="value"
                                        nameKey="name"
                                        label={renderCustomizedLabel}
                                        labelLine={false}
                                    />
                                    <Tooltip />
                                    <Legend />
                                </PieChart>
                            </ResponsiveContainer>
                        </D.chatCard>
                    </D.chartsContainer>
                </D.dashBoardContainer>
            </G.gerenciarPostsBody>
        </G.main>
    )
}
