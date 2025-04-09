/* eslint-disable @next/next/no-img-element */
'use client'

import { useState } from 'react'
import { GitHubUser } from '../../types/GitHubUser'
import './GitHubSearch.css'
import SearchForm from '../../pages/searchForm/SearchForm'
import UserCard from '../../components/UserCard'
import ErrorMessage from '../../components/ErrorMessage'

export default function GitHubSearch() {
  const [userData, setUserData] = useState<GitHubUser | null>(null)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSearch = async (username: string) => {
    setLoading(true)
    setError('')
    setUserData(null)

    try {
      const res = await fetch(`https://api.github.com/users/${username}`)
      if (!res.ok) throw new Error('Usuário não encontrado')
      const data: GitHubUser = await res.json()
      setUserData(data)
    } catch {
      setError('Nenhum perfil foi encontrado com ese nome de usuário. Tente novamente 😢')
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="container_git">
     <img className="camada_1" src="/img/Camada_1.png" alt="" />
     <img className="camada_2" src="/img/Ellipse 2.png" alt="" />
     <img className="camada_3" src="/img/Ellipse3.png" alt="" />
      <SearchForm onSearch={handleSearch} />
      {loading && <p className="mt-4 animate-pulse text-blue-500">Carregando...</p>}
      {error && <ErrorMessage message={error} />}
      {userData && <UserCard user={userData} />}
    </main>
  )
}
