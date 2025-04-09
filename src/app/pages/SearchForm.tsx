'use client' 

import { useState } from 'react';
import './SearchForm.css';
type Props = {
  // Função de callback que será chamada quando o usuário fizer a busca
  onSearch: (username: string) => void
}

export default function SearchForm({ onSearch }: Props) {
  const [input, setInput] = useState('') // Estado local para armazenar o valor digitado

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault() // Impede o comportamento padrão do formulário (recarregar a página)
    if (input.trim()) {
      onSearch(input.trim()) // Chama a função de busca com o nome de usuário
    }
  }

  return (
    <section>
      <form onSubmit={handleSubmit} >
      <input
        type="text"
        placeholder="Digite o nome do usuário"
        value={input}
        onChange={(e) => setInput(e.target.value)} // Atualiza o estado conforme o usuário digita
        className="px-4 py-2 border rounded-lg outline-none"
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
      >
        Buscar
      </button>
    </form>
    </section>
  )
}
