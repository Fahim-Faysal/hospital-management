import { useContext } from "react"
import { AuthContex } from "../Context/AuthProvider"

const useAuth = () => {
      return useContext(AuthContex)
}
export default useAuth