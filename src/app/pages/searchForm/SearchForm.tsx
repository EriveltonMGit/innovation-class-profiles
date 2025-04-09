/* eslint-disable @next/next/no-img-element */
"use client"

import { useState } from "react"
import { FiSearch } from "react-icons/fi"
import "./SearchForm.css"

type Props = {
  onSearch: (username: string) => void
}

export default function SearchForm({ onSearch }: Props) {
  const [input, setInput] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (input.trim()) {
      onSearch(input.trim())
    }
  }

  return (
    <section className="container_form">

      <div className="area_title">
        <img src="/img/image.png" alt="logo" />
        <h1>Perfil GitHub</h1>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="input-button-wrapper">
          <input
            type="text"
            placeholder="Digite o nome do usuário"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button type="submit" aria-label="Buscar usuário">
            <FiSearch size={28} />
          </button>
        </div>
      </form>
    </section>
  )
}
