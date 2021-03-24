import { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import { auth } from '../server/firebase'

const useAuth = () => {
  const [user, setUser] = useState()
  const history = useHistory()
  
  useEffect(()=>{
    auth.onAuthStateChanged(data =>{
      const isNotLogged = data === null
      setUser(data)

      if (isNotLogged)  {
        history.push("/auth")
      }
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  return { user}
}

export default useAuth