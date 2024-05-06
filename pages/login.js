import Logincard from '../src/components/loginCard/loginCard'
import styles from '../styles/Login.module.css'

export default function LoginPage() {
  return (
    <div className={styles.background}>
      <Logincard title="Entre em sua conta">
        login
      </Logincard>
    </div>
  )
}
