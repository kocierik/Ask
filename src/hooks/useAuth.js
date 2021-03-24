import { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import { auth, createUserProfileDocument } from '../server/firebase'

const useAuth = () => {
  const [user, setUser] = useState()
  const history = useHistory()
  
  useEffect(()=>{
    auth.onAuthStateChanged( async data =>{
      const isNotLogged = data === null
      const user = await createUserProfileDocument(data)
      setUser(user)

      if (isNotLogged)  {
        history.push("/auth")
      }
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  return { user}
}

export default useAuth