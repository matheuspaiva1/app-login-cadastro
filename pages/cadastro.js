import { useState } from 'react'
import { useRouter } from 'next/router'

import Link from 'next/link'
import Button from '../src/components/button/button'
import Input from '../src/components/input/input'
import Logincard from '../src/components/loginCard/loginCard'
import styles from '../styles/Login.module.css'

import { setCookie } from 'cookies-next'

export default function CadastroPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  })

  const [error, setError] = useState('')

  const router = useRouter()

  const handleFormEdit = (event, name) => {
    setFormData({
      ...formData,
      [name]: event.target.value
    })
  }

  const handleForm = async (event) => {
    try {
      event.preventDefault()
      const response = await fetch(`/api/user/cadastro`, {
        method: 'POST',
        body: JSON.stringify(formData)
      })
      const json = await response.json()      
      
      if(response.status !== 201) throw new Error(json)

      setCookie('authorization', json)
      router.push('/')
    } catch (err) {
      setError(err.message)
    }
  }

  return (
    <div className={styles.background}>
      <Logincard title="Crie sua conta">
        <form
        onSubmit={handleForm} 
        className={styles.form}>
          <Input type="nome" placeholder="Digite seu nome" required 
          value={formData.name}
          onChange={(e) => {handleFormEdit(e, 'name')}}/>
          <Input type="email" placeholder="Digite seu email" required 
          value={formData.email}
          onChange={(e) => {handleFormEdit(e, 'email')}}/>
          <Input type="password" placeholder="Digite sua senha"  required 
          value={formData.password}
          onChange={(e) => {handleFormEdit(e, 'password')}}/>
          <Button>Cadastrar</Button>
          {error && <p className={styles.error}>{error}</p> }
          <Link href="/login">
          Já possui uma Conta?
          </Link>
        </form>
      </Logincard>
    </div>
  )
}
