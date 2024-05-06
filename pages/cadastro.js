import Logincard from "../src/components/loginCard/loginCard";
import styles from "../styles/Login.module.css"

export default function CadastroPage(){
  return (
    <div className={styles.background}>
      <Logincard title="Crie sua conta">
        ABCD        
      </Logincard>
    </div>
  )
}