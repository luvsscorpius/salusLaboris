import React, { useContext } from 'react'
import * as G from '../GerenciarPosts/Styles'
import * as B from '../Blog/Styles'
import * as D from './Styles'
import { Menu } from '../../Components/Menu/Menu'
import { SalusContext } from '../../Context/Context'
import { MdOutlinePostAdd } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { FaFilter } from "react-icons/fa6";
import { Bar, BarChart, CartesianGrid, Legend, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

export const Dashboard = () => {

    const { posts, users, categorias } = useContext(SalusContext)

    const colors = [
        "#4A7C59",
        "#233D4D",
        "#E63946",
        "#457B9D",
        "#F4A261",
        "#2A9D8F",
        "#8D99AE",
    ];

    const autoresCount = posts.reduce((acc, post) => {
        const foundUser = users.find(user => user.id === post.author_id)

        if (!foundUser) return acc

        const authorName = foundUser.name

        acc[authorName] = (acc[authorName] || 0) + 1
        return acc;
    }, {});

    const autoresData = Object.entries(autoresCount).map(([name, value], index) => ({
        name,
        value,
        fill: colors[index % colors.length]
    }));

    const renderCustomizedLabel = ({ value, percent, name }) => {
        const percentage = (percent * 100).toFixed(0);
        return `${name} ${percentage}%`;
    };

    // CONTAGEM DAS CATEGORIAS
    const categoriasCount = posts.reduce((acc, post) => {

        const foundCategory = categorias.find(cat => cat.id === post.category_id)

        acc[foundCategory.title] = (acc[foundCategory.title] || 0) + 1;
        return acc;
    }, {});

    // CONTAGEM Dos posts
    const postsCount = posts.reduce((acc, post) => {
        acc[post.views] = (acc[post.views] || 0) + 1;
        return acc;
    }, {});

    const categoriasData = Object.entries(categoriasCount).map(([name, value], index) => ({
        name,
        value,
        fill: colors[index % colors.length]
    }));

    // achar post mais acessado 
    const postsData = posts.map(post => ({
        name: post.title,
        value: post.views || 0,
        fill: colors[Math.floor(Math.random() * colors.length)]
    }))

    return (
        <G.main style={{ height: "auto" }}>
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

                            <ResponsiveContainer width="100%" height={250}>
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

                            <ResponsiveContainer width="100%" height={250}>
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

                        <D.chatCard>

                            <h3>Post mais acessado</h3>

                            <ResponsiveContainer width="100%" height={230}>
                                <BarChart data={postsData}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis
                                        dataKey="name"
                                        interval={0}
                                        angle={-25}
                                        textAnchor="end"
                                        height={60}
                                    />
                                    <YAxis />
                                    <Tooltip />
                                    <Legend />

                                    <Bar dataKey="value" fill={postsData.fill} />
                                </BarChart>
                            </ResponsiveContainer>
                        </D.chatCard>

                    </D.chartsContainer>
                </D.dashBoardContainer>
            </G.gerenciarPostsBody>
        </G.main>
    )
}
