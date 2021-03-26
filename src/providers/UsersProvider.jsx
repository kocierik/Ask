import React, { createContext, useState, useEffect } from 'react'
import { useHistory } from 'react-router'
import { auth, createUserProfileDocument } from '../server/firebase'

export const userContext = createContext({user : null})

function UsersProvider(props) {
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


  return (
    <userContext.Provider value={user}> {props.children} </userContext.Provider>
  )
}

export default UsersProvider
