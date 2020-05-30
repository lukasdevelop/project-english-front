import jwt, { decode } from 'jsonwebtoken'

export const isAuthenticate = () => {

  const secret = 'cec518b33ff1c6a616a1ced8b1635ee9'
  const token = localStorage.getItem('token')

  const result = jwt.verify(token, secret, (err, decode) => {
    if(err) {
      return false
    }
    else{
      return true
    }
})

return result

}
