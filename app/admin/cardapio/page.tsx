
"use client"

import { useEffect, useState } from "react"
import Swal from "sweetalert2"

interface Produto {
    id: number
    descricao: string
    categoria: string
    preco: number
    imagem: string
}

export default function CardapioAdmin() {

    const [produtos, setProdutos] = useState<Produto[]>([])
    const [carregando, setCarregando] = useState(true)

    async function carregarProdutos() {
        try {
            const response = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL}/produtos`
            )

            if (!response.ok) {
                throw new Error("Erro ao buscar produtos")
            }

            const data = await response.json()

            setProdutos(data)

        } catch (error) {
            console.error(error)

            await Swal.fire({
                title: "Erro",
                text: "Não foi possível carregar os produtos",
                icon: "error",
                confirmButtonText: "Ok"
            })

        } finally {
            setCarregando(false)
        }
    }

    async function excluirProduto(id: number) {

        const resultado = await Swal.fire({
            title: "Excluir produto?",
            text: "Essa opção não poderá ser desfeita.",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Sim, excluir",
            cancelButtonText: "Cancelar",
            confirmButtonColor: "#dc2626",
            cancelButtonColor: "#6b7280"
        })

        if (!resultado.isConfirmed) {
            return
        }

        try {

            const response = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL}/produtos/${id}`,
                {
                    method: "DELETE"
                }
            )

            if (!response.ok) {
                throw new Error("Erro ao excluir o produto")
            }

            setProdutos((produtosAtuais) =>
                produtosAtuais.filter(
                    (produto) => produto.id !== id
                )
            )

            await Swal.fire({
                title: "Excluído",
                text: "O produto foi excluído com sucesso",
                icon: "success",
                confirmButtonText: "Ok"
            })

        } catch (error) {

            console.error(error)

            await Swal.fire({
                title: "Erro",
                text: "Não foi possível excluir o produto",
                icon: "error",
                confirmButtonText: "Ok"
            })
        }
    }

    useEffect(() => {
        carregarProdutos()
    }, [])

    if (carregando) {
        return (
            <main className="p-8">
                <p>Carregando produtos...</p>
            </main>
        )
    }

    return (
        <main className="min-h-screen bg-gray-100 p-8">

            <div className="mx-auto max-w-6xl">

                <h1 className="mb-6 text-3xl font-bold">
                    Gerenciar Cardápio
                </h1>

                {produtos.length === 0 ? (

                    <div className="rounded-lg bg-white p-8 text-center shadow">

                        <p className="text-gray-500">
                            Nenhum produto cadastrado
                        </p>

                    </div>

                ) : (

                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

                        {produtos.map((produto) => (

                            <div
                                key={produto.id}
                                className="overflow-hidden rounded-lg bg-white shadow"
                            >

                                {produto.imagem && (
                                    <div className="relative h-48 w-full bg-gray-200">
                                        <img
                                            src={produto.imagem}
                                            alt={produto.descricao}
                                            className="h-full w-full object-cover"
                                        />
                                    </div>
                                )}

                                <div className="p-5">

                                    <h2 className="text-xl font-bold">
                                        {produto.descricao}
                                    </h2>

                                    <p className="mt-3 text-lg text-gray-500">
                                        {produto.categoria}
                                    </p>

                                    <p className="mt-3 text-lg font-semibold">
                                        R$ {Number(produto.preco).toFixed(2)}
                                    </p>

                                    <button
                                        className="mt-4 w-full rounded-lg bg-red-600 px-4 py-2 font-semibold text-white hover:bg-red-700"
                                        onClick={() =>
                                            excluirProduto(produto.id)
                                        }
                                    >
                                        Excluir
                                    </button>

                                </div>

                            </div>

                        ))}

                    </div>
                )}

            </div>

        </main>
    )
}