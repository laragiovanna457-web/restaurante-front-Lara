"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"
import Swal from "sweetalert2"

export default function Login() {
    const router = useRouter()
    const [usuario, setUsuario] = useState("")
    const [senha, setSenha] = useState("")

    function entrar() {
        if (usuario === "admin" && senha === "123456") {
            localStorage.setItem("admin_logado", "true")
            router.push("/admin")
            return
        }

        Swal.fire({
            title: "Login inválido",
            text: "Usuário ou senha incorretos",
            icon: "error",
            confirmButtonText: "Tentar novamente"
        })
    }

    return (
        <main className="flex min-h-screen items-center justify-center bg-gray-600 p-4">
            <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg">
                <h1 className="mb-2 text-center text-gray-800 text-xl font-bold">Área administrativa</h1>
                <p className="mb-8 text-center text-gray-900">Faça login para acessar o painel</p>

                <div className="mb-4">
                    <label className="block mb-2 text-sm font-medium text-gray-700">Usuário</label>
                    <input 
                        type="text"
                        value={usuario}
                        onChange={(e) => setUsuario(e.target.value)}
                        placeholder="Digite seu usuário"
                        className="w-full rounded-lg border p-3 outline-none focus:ring-2 focus:ring-gray-800"
                    />
                </div>

                <div className="mb-6">
                    <label className="block mb-2 text-sm font-medium text-gray-900">Senha</label>
                    <input 
                        type="password"
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                        placeholder="Digite sua senha"
                        className="w-full rounded-lg border p-3 outline-none focus:ring-2 focus:ring-gray-800"
                    />
                </div>

                <button
                    onClick={entrar}
                    className="w-full rounded-lg bg-gray-800 py-3 font-semibold text-white hover:bg-gray-900 cursor-pointer"
                >
                    Entrar
                </button>
            </div>
        </main>
    )
}