"use client"

import Image from 'next/image'

export default function Home() {

  async function cadastrar(e:any){
    e.preventDefault()
    alert("Produto cadastrado com sucesso!")
  }
  return (
    <main className="min-h-screen bg-gray-300 flex items-center justify-center p-6">
      <div className="w-full max-w-lg bg-white rounded-xl shadow-md p-8 grid grid-cols-1 gap-4">

        <Image
          src="/images.jpg"
          alt="Logotipo"
          width={200}
          height={200}
          className="mx-auto mb-4"
        />

        <h1 className="text-2xl font-bold mb-6 text-gray-900">
          Restaurante - Come menos
        </h1>

        <input
          type="text"
          placeholder="Digite a descrição..."
          className="w-full rounded-xl border border-gray-900 bg-white px-4 py-3 text-sm text-gray-900"
        />

        <input
          type="number"
          placeholder="Digite o preço..."
          className="w-full rounded-xl border border-gray-900 bg-white px-4 py-3 text-sm text-gray-900"
        />

        <input
          type="text"
          placeholder="Digite a categoria..."
          className="w-full rounded-xl border border-gray-900 bg-white px-4 py-3 text-sm text-gray-900"
        />

        <input
          type="text"
          placeholder="O lanche está disponível?"
          className="w-full rounded-xl border border-gray-900 bg-white px-4 py-3 text-sm text-gray-900"
        />

        <button
         onClick={cadastrar} 
         className="w-full 
         rounded-xl bg-gray-900
          px-4 py-3 font-medium text-white
         shadow-sm cursor-pointer
         hover:bg-gray-800">Cadastrar</button>
      </div>
    </main>
  )
}