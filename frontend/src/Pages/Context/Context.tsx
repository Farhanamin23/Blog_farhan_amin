import  Axios  from "axios"
import React, { createContext, PropsWithChildren, useEffect, useState } from "react"

export const myContext = createContext<any>({})

  export default function Context(props: PropsWithChildren) {
  const [user, setUser] = useState<any>()
  
  useEffect(() => {
    Axios.get("http://localhost:8000/get", { withCredentials: true }).then(res => {
      setUser(res.data);
    })
  },[])
  return (
    <myContext.Provider value={user}>{props.children }</myContext.Provider>
  )
}
