import React, { useContext, useState, useEffect } from 'react'
import { Menu } from '../../Components/Menu/Menu';
import * as B from '../Blog/Styles'
import * as A from './Styles'
import { IoIosSave } from "react-icons/io";
import { SalusContext } from '../../Context/Context';
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import {
    FaBold, FaItalic, FaStrikethrough, FaCode,
    FaParagraph, FaListUl, FaListOl, FaQuoteRight,
    FaUndo, FaRedo, FaHeading, FaMinus
} from "react-icons/fa";

export const AdicionarPost = () => {

    const { categorias, createPost } = useContext(SalusContext)

    const [novoPost, setNovoPost] = useState({
        title: "",
        category: "",
        desc: "",
        categoryId: null,
    })

    useEffect(() => {
        if (!novoPost.category) return;

        const categoriaEncontrada = categorias.find(
            (cat) => cat.title === novoPost.category
        );

        if (categoriaEncontrada) {
            setNovoPost((prev) => ({
                ...prev,
                categoryId: categoriaEncontrada.id,
            }));
        }
    }, [novoPost.category, categorias]);

    console.log(categorias)

    // Criar editor do TipTap
    const editor = useEditor({
        extensions: [StarterKit],
        content: "",
        onUpdate: ({ editor }) => {
            setNovoPost((prev) => ({
                ...prev,
                desc: editor.getHTML()  // pega o conteúdo em HTML
            }));
        }
    })

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
            isHeading4: editor.isActive('heading', { level: 4 }),
            isHeading5: editor.isActive('heading', { level: 5 }),
            isHeading6: editor.isActive('heading', { level: 6 }),
            isBulletList: editor.isActive('bulletList'),
            isOrderedList: editor.isActive('orderedList'),
            isCodeBlock: editor.isActive('codeBlock'),
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

                <B.blogHeader className='header'>
                    <div>
                        <h2>Novo Post</h2>
                    </div>

                    <hr />
                </B.blogHeader>

                <A.novoPostBody>
                    <span>
                        <label htmlFor="titulo">Título</label>
                        <input type="text" name='titulo' value={novoPost.title} onChange={(e) => setNovoPost({ ...novoPost, title: e.target.value })} />
                    </span>
                    <span>
                        <label htmlFor="categoria">Categoria</label>
                        <select
                            name="categoria"
                            value={novoPost.category}
                            onChange={(e) => setNovoPost({ ...novoPost, category: e.target.value })}
                            onClick={(e) => console.log(e.target.value)}
                        >.~ryot
                            <option value="">Selecione uma categoria</option>
                            {categorias.map((cat) => (
                                <option value={cat.title} key={cat.id}>
                                    {cat.id} - {cat.title}
                                </option>
                            ))}
                        </select>
                    </span>
                    <span>
                        <label htmlFor="conteudo">Conteúdo</label>

                        <div className="toolbar">

                            <button
                                onClick={() => editor.chain().focus().toggleBold().run()}
                                disabled={!editorState.canBold}
                                className={editorState.isBold ? 'is-active' : ''}
                            >
                                <FaBold />
                            </button>

                            <button
                                onClick={() => editor.chain().focus().toggleItalic().run()}
                                disabled={!editorState.canItalic}
                                className={editorState.isItalic ? 'is-active' : ''}
                            >
                                <FaItalic />
                            </button>

                            <button
                                onClick={() => editor.chain().focus().toggleStrike().run()}
                                disabled={!editorState.canStrike}
                                className={editorState.isStrike ? 'is-active' : ''}
                            >
                                <FaStrikethrough />
                            </button>

                            <button
                                onClick={() => editor.chain().focus().toggleCode().run()}
                                disabled={!editorState.canCode}
                                className={editorState.isCode ? 'is-active' : ''}
                            >
                                <FaCode />
                            </button>

                            {/* Parágrafo */}
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

                            {/* Linha horizontal */}
                            <button onClick={() => editor.chain().focus().setHorizontalRule().run()}>
                                <FaMinus />
                            </button>

                            {/* Hard break */}
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

                        {/* EDITOR */}
                        <div className="editorWrapper">
                            <EditorContent editor={editor} />
                        </div>
                    </span>

                    <div>

                        <button onClick={() => createPost(novoPost)}> <IoIosSave size={22} /> Adicionar post</button>
                    </div>
                </A.novoPostBody>

            </A.novoPostContainer>
        </A.main>
    )
}
