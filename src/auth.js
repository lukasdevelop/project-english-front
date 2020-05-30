import jwt, { decode } from 'jsonwebtoken'

export const isAuthenticate = () => {

  const secret = process.env.REACT_APP_SECRET

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
