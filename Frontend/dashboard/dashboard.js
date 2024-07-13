import '@css/style.css'
import { checkLogin, logOut } from '@js/Auth.js'

checkLogin()

document.querySelector('#logOut').addEventListener('click', (e) => {
  e.preventDefault()
  logOut()
})