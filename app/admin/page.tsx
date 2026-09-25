"use client"

import Image from "next/image"
import { useState } from "react"


export default function AdminPage(){

     const[descricao,setDescricao] = useState("")
    const[categoria,setCategoria] = useState("")
    const[preco,setPreco] = useState("")
    const[imagem,setImagem] = useState("")


   


    async function cadastrarLanche(e:any) {
        e.preventDefault()
        try {
          const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/produtos`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                descricao,
                categoria,
                preco,
                imagem
            })

          })  

          if(response.ok){
            alert("Produto cadastrado com sucesso!")
          }

        } catch (error) {
            console.log(error)
            alert("Erro ao cadastrar")
        }
    }

    return(
        <main className="min-h-screen bg-gray-300 P-8">
            <div className="mx-auto max-w-xl rounded-lg bg-white p-8 shadow">
                <h1 className="mb-6 text-3xl font-bold  text-gray-900">Cadastrar Lanche</h1>
                <form onSubmit={cadastrarLanche} className="space-y-5">
                    <div>
                        <label className="text-gray-900">Descricao</label>
                        <input type="text"
                        value={descricao}
                        onChange={(e)=> setDescricao(e.target.value)}
                        placeholder="Ex: X-Bacon de salada com carne"
                        className="w-full rounded border p-3  text-gray-900" 
                        />
                    </div>

                    <div> 
                        <label className="text-gray-900">Categoria</label> 
                        <input type="text" 
                        value={categoria} 
                        onChange={(e)=> setCategoria(e.target.value)}
                        placeholder="Categoria..." 
                        className="w-full rounded border p-3  text-gray-900" /> </div>
                    <div>
                        <label className="text-gray-900">Preço</label>
                        <input type="number"
                        value={preco}
                        onChange={(e)=> setPreco(e.target.value)}
                        placeholder="Ex: 10.00"
                        className="w-full rounded border p-3 text-gray-900"
                        />
                    </div>

                    <div>
                       <label className="text-gray-900">Imagem</label>
                        <input 
                        type="text"
                        value={imagem}
                        onChange={(e)=> setImagem(e.target.value)}
                        placeholder="Insira o link da imagem"
                        className="w-full rounded border p-3  text-gray-900"
                        />
                    </div>



                    <button
                    type="submit"
                    className="w-full rounded bg-gray-900 py-3 font-semibold text-white hover:bg-gray-800">
                        Cadastrar Lanche
                    </button>
                </form>
            
            
            </div>
        </main>
    )
}
