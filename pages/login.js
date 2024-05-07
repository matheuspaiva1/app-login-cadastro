import Link from 'next/link'
import Button from '../src/components/button/button'
import Input from '../src/components/input/input'
import Logincard from '../src/components/loginCard/loginCard'
import styles from '../styles/Login.module.css'
import { useState } from 'react'
import { useRouter } from 'next/router'

import { setCookie } from 'cookies-next'



export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const [error, setError] = useState('')

  const router = useRouter('')

  const handleFormEdit = (event, name) => {
    setFormData({
      ...formData,
      [name]: event.target.value
    })
  }

  const handleForm = async (event) => {
    try {
      event.preventDefault()
      const response = await fetch(`/api/user/login`, {
        method: 'POST',
        body: JSON.stringify(formData)
      })
      const json = await response.json()      
      
      if(response.status !== 200) throw new Error(json)

      setCookie('authorization', json)
      router.push('/')
    } catch (err) {
      setError(err.message)
    }
  }



  return (
    <div className={styles.background}>
      <Logincard title="Entre em sua conta">
        <form 
        className={styles.form}
        onSubmit={handleForm}
        >
          <Input type="email" placeholder="Digite seu email" 
          onChange={(e)=>{handleFormEdit(e, 'email')}}
          value={formData.email}
          required
          />
          <Input type="password" placeholder="Digite sua senha" 
          onChange={(e)=>{handleFormEdit(e, 'password')}}
          value={formData.senha}
          required
          />
          <Button>Entrar</Button>
          {error && <p className={styles.error}>{error}</p> }
          <Link href="/cadastro">
          Ainda não possui uma Conta?
          </Link>
        </form>
      </Logincard>
    </div>
  )
}
