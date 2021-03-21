import { useEffect } from "react"

const useOnMount = (fn) =>{
  useEffect(()=>{
    fn()
 // eslint-disable-next-line react-hooks/exhaustive-deps
 },[])
}
export default useOnMount