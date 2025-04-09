'use client'

import { useState } from 'react'
import { GitHubUser } from './types/GitHubUser' 

import SearchForm from './pages/SearchForm'
import UserCard from './components/UserCard'
import ErrorMessage from './components/ErrorMessage'

export default function Home() {
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
      setError('Perfil não encontrado 😢')
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="container_git">
      <h1 className="">Busca de Perfil no GitHub</h1>
      <SearchForm onSearch={handleSearch} />
      {loading && <p className="mt-4 animate-pulse text-blue-500">Carregando...</p>}
      {error && <ErrorMessage message={error} />}
      {userData && <UserCard user={userData} />}
    </main>
  )
}
