import React, { useContext, useState, useEffect } from 'react'
import { Menu } from '../../Components/Menu/Menu';
import * as B from '../Blog/Styles'
import * as A from './Styles'
import { IoIosSave } from "react-icons/io";
import { CiCirclePlus } from "react-icons/ci";
import { SalusContext } from '../../Context/Context';

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import {
    FaBold, FaItalic, FaStrikethrough, FaCode,
    FaParagraph, FaListUl, FaListOl, FaQuoteRight,
    FaUndo, FaRedo, FaHeading, FaMinus
} from "react-icons/fa";

export const EditarPost = () => {

    const { editPost, categorias, categoryId, posts } = useContext(SalusContext);

    const findPost = posts.find(
        (post) => post.id === Number(categoryId)
    );

    const [updatePost, setUpdatePost] = useState({
        id: categoryId,
        title: findPost.title,
        desc: findPost.desc,
        category: findPost.category || "",
        author: sessionStorage.getItem("loggedUser"),
        date: findPost.date
    });

    // Inicializar editor TipTap já com o conteúdo
    const editor = useEditor({
        extensions: [StarterKit],
        content: findPost.desc,   // 🔥 carrega o conteúdo existente
        onUpdate: ({ editor }) => {
            setUpdatePost((prev) => ({
                ...prev,
                desc: editor.getHTML()
            }));
        }
    });

    const editorState = editor
        ? {
            isBold: editor.isActive('bold'),
            isItalic: editor.isActive('italic'),
            isStrike: editor.isActive('strike'),
            isCode: editor.isActive('code'),
            isParagraph: editor.isActive('paragraph'),
            isHeading1: editor.isActive('heading', { level: 1 }),
            isHeading2: editor.isActive('heading', { level: 2 }),
            isHeading3: editor.isActive('heading', { level: 3 }),
            isBulletList: editor.isActive('bulletList'),
            isOrderedList: editor.isActive('orderedList'),
            isBlockquote: editor.isActive('blockquote'),

            canBold: editor.can().toggleBold(),
            canItalic: editor.can().toggleItalic(),
            canStrike: editor.can().toggleStrike(),
            canCode: editor.can().toggleCode(),
            canUndo: editor.can().undo(),
            canRedo: editor.can().redo(),
        }
        : {};

    return (
        <A.main>
            <Menu />

            <A.novoPostContainer>

                <B.blogHeader className="header">
                    <div>
                        <h2>Editar Post</h2>
                        <Link to="/adm/criarpost"><CiCirclePlus size={45} /></Link>
                    </div>

                    <hr />
                </B.blogHeader>

                <A.novoPostBody>

                    {/* Título */}
                    <span>
                        <label htmlFor="titulo">Título</label>
                        <input
                            type="text"
                            name="titulo"
                            value={updatePost.title}
                            onChange={(e) => setUpdatePost({ ...updatePost, title: e.target.value })}
                        />
                    </span>

                    {/* Categoria */}
                    <span>
                        <label htmlFor="categoria">Categoria</label>
                        <select
                            name="categoria"
                            value={updatePost.category}
                            onChange={(e) => setUpdatePost({ ...updatePost, category: e.target.value })}
                        >
                            <option value="">Selecione uma categoria</option>

                            {categorias.map((cat, index) => (
                                <option value={cat.title} key={index}>
                                    {cat.title}
                                </option>
                            ))}
                        </select>
                    </span>

                    {/* Conteúdo com TipTap */}
                    <span>
                        <label htmlFor="conteudo">Conteúdo</label>

                        {/* Toolbar */}
                        <div className="toolbar">

                            <button
                                onClick={() => editor.chain().focus().toggleBold().run()}
                                className={editorState.isBold ? 'is-active' : ''}
                            >
                                <FaBold />
                            </button>

                            <button
                                onClick={() => editor.chain().focus().toggleItalic().run()}
                                className={editorState.isItalic ? 'is-active' : ''}
                            >
                                <FaItalic />
                            </button>

                            <button
                                onClick={() => editor.chain().focus().toggleStrike().run()}
                                className={editorState.isStrike ? 'is-active' : ''}
                            >
                                <FaStrikethrough />
                            </button>

                            <button
                                onClick={() => editor.chain().focus().toggleCode().run()}
                                className={editorState.isCode ? 'is-active' : ''}
                            >
                                <FaCode />
                            </button>

                            <button
                                onClick={() => editor.chain().focus().setParagraph().run()}
                                className={editorState.isParagraph ? 'is-active' : ''}
                            >
                                <FaParagraph />
                            </button>

                            {/* Headings */}
                            <button
                                onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
                                className={editorState.isHeading1 ? 'is-active' : ''}
                            >
                                H1
                            </button>

                            <button
                                onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
                                className={editorState.isHeading2 ? 'is-active' : ''}
                            >
                                H2
                            </button>

                            <button
                                onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
                                className={editorState.isHeading3 ? 'is-active' : ''}
                            >
                                H3
                            </button>

                            {/* Listas */}
                            <button
                                onClick={() => editor.chain().focus().toggleBulletList().run()}
                                className={editorState.isBulletList ? 'is-active' : ''}
                            >
                                <FaListUl />
                            </button>

                            <button
                                onClick={() => editor.chain().focus().toggleOrderedList().run()}
                                className={editorState.isOrderedList ? 'is-active' : ''}
                            >
                                <FaListOl />
                            </button>

                            {/* Blockquote */}
                            <button
                                onClick={() => editor.chain().focus().toggleBlockquote().run()}
                                className={editorState.isBlockquote ? 'is-active' : ''}
                            >
                                <FaQuoteRight />
                            </button>

                            {/* Divider */}
                            <button onClick={() => editor.chain().focus().setHorizontalRule().run()}>
                                <FaMinus />
                            </button>

                            {/* Hard Break */}
                            <button onClick={() => editor.chain().focus().setHardBreak().run()}>
                                ↵
                            </button>

                            {/* Undo / Redo */}
                            <button
                                onClick={() => editor.chain().focus().undo().run()}
                                disabled={!editorState.canUndo}
                            >
                                <FaUndo />
                            </button>

                            <button
                                onClick={() => editor.chain().focus().redo().run()}
                                disabled={!editorState.canRedo}
                            >
                                <FaRedo />
                            </button>

                        </div>

                        {/* Editor */}
                        <div className="editorWrapper">
                            <EditorContent editor={editor} />
                        </div>

                    </span>

                    {/* Botão salvar */}
                    <div>
                        <button onClick={() => editPost(updatePost)}>
                            <IoIosSave size={22} /> Editar post
                        </button>
                    </div>

                </A.novoPostBody>

            </A.novoPostContainer>
        </A.main>
    )
}
