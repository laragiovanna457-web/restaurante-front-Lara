'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'

interface Produto {
    id: number
    nome: string
    descricao: string
    categoria: string
    preco: number
    imagem: string
}

export default function CardapioPage() {
    const [produtos, setProdutos] = useState<Produto[]>([])
    const [loading, setLoading] = useState(true)

    // Simulando o carregamento do produto com a imagem
    async function mostrarProdutos() {
        setProdutos([
            {
                id: 1,
                nome: "Milkshake",
                descricao: "Delicioso milkshake",
                categoria: "Bebidas",
                preco: 15.90,
                imagem: "/milkshake.jpg"
            }, // <-- Adicionada vírgula aqui
            {
                id: 2,
                nome: "Hambéguer capivara",
                descricao: "Hambúrguer temático",
                categoria: "comida",
                preco: 19.90,
                imagem: "/capivara.jpg"
            }, // <-- Adicionada vírgula aqui
            {
                id: 3,
                nome: "Pizza",
                descricao: "Pizza doce",
                categoria: "comida",
                preco: 20.90,
                imagem: "/pizzaa.jpg"
            }
        ])
        setLoading(false)
    }

    // Chama a função quando a página carrega
    useEffect(() => {
        mostrarProdutos()
    }, [])

    return (
        <main className="p-8 bg-white text-gray-900">
            <h1 className="mb-6 text-3xl font-bold">
                Cardapio
            </h1>

            <div className="grid grid-cols-3 gap-6">
                {produtos.map((produto) => (
                    <div key={produto.id}>
                        <Image
                            src={produto.imagem} 
                            alt={produto.nome}
                            width={400}
                            height={250}
                            className="h-80 w-full rounded object-cover"
                        />

                        <h2 className="mt-3 text-xl font-semibold">
                            {produto.nome}
                        </h2>

                        <p className="mt-2 text-lg text-green-700">
                            R$ {produto.preco.toFixed(2)}
                        </p>

                        <button
                            className="mt-4 w-full cursor-pointer rounded bg-gray-900 py-2 text-white hover:bg-gray-800"
                        >
                            Fazer pedido
                        </button>
                    </div>
                ))}
            </div>
        </main>
    )
}