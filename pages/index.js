import { getCookie } from "cookies-next"
import { useEffect } from "react"
import { verifica } from "../services/user"

export default function Home() {
  return (
    
    <div>
      Pagina Inicial - Pagina Perfil
    </div>
  )
}

export const getServerSideProps = async ({req, res}) => {
  try {
    const token = getCookie('authorization', {req, res})
    console.log(token)

    if(!token) throw new Error('Token Inváido')
    
    verifica(token)

    return {
      props: {}
    }

  } catch (error) {

    return {
      redirect: {
        permanent: false,
        destination: '/login',

      }
      props: {}
    }
  }
}
