import Link from 'next/link'
import Button from '../src/components/button/button'
import Input from '../src/components/input/input'
import Logincard from '../src/components/loginCard/loginCard'
import styles from '../styles/Login.module.css'

export default function CadastroPage() {
  return (
    <div className={styles.background}>
      <Logincard title="Crie sua conta">
        <form className={styles.form}>
          <Input type="nome" placeholder="Digite seu nome" />
          <Input type="email" placeholder="Digite seu email" />
          <Input type="password" placeholder="Digite sua senha" />
          <Button>Cadastrar</Button>
          <Link href="/login">
          Já possui uma Conta?
          </Link>
        </form>
      </Logincard>
    </div>
  )
}
