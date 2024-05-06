import Link from 'next/link'
import Button from '../src/components/button/button'
import Input from '../src/components/input/input'
import Logincard from '../src/components/loginCard/loginCard'
import styles from '../styles/Login.module.css'

export default function LoginPage() {
  return (
    <div className={styles.background}>
      <Logincard title="Entre em sua conta">
        <form className={styles.form}>
          <Input type="email" placeholder="Digite seu email" />
          <Input type="password" placeholder="Digite sua senha" />
          <Button>Entrar</Button>
          <Link href="/cadastro">
          Ainda não possui uma Conta?
          </Link>
        </form>
      </Logincard>
    </div>
  )
}
