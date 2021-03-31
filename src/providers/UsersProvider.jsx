import React, { createContext, useState, useEffect } from "react"
import { useHistory } from "react-router"
import { auth, createUserProfileDocument } from "../server/firebase"

export const userContext = createContext({ user: null })

function UsersProvider(props) {
  const [user, setUser] = useState()
  const history = useHistory()

  useEffect(() => {
    auth.onAuthStateChanged(async (data) => {
      const isNotLogged = data === null
      if (data) {
        const userRef = await createUserProfileDocument(data)
        userRef.onSnapshot((snapshot) => {
          // WHEN CHANGE
          const currentUser = { uid: data.uid, ...snapshot.data() }
          setUser(currentUser)
        })
      } else {
        setUser(undefined)
      }

      if (isNotLogged) {
        history.push("/auth")
      }
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return <userContext.Provider value={user}> {props.children} </userContext.Provider>
}

export default UsersProvider
