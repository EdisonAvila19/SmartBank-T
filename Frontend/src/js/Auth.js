export function checkLogin() {
  document.addEventListener('DOMContentLoaded', () => {
    console.log('Load Page')
    // Tiempo inactivo
    const initialTime = sessionStorage.getItem('tm')
    const InactTime = 15 * 60 * 1000; // 15 min
    const now = (new Date).getTime()
    const isActiveSession = initialTime ? (now - initialTime) <= InactTime : false
    // Check login
    const isLoggedIn = sessionStorage.getItem('isLoggedIn') === 'true'

    if (!isActiveSession || !isLoggedIn) {
      console.log('redir to /')
      setTimeout(() => {
        window.location.href = '/'
      }, 500)
    } 
    // else if (isAdmin) {
    //   window.location.href = '/admin.html';
    // }
    // console.log(import.meta.env)
  })
}

export async function logIn() { 
  console.log('logIn')
  
  // TODO - Fetch formulario
  /*e.preventDefault();
  const { email, name } =  e.target.elements
  const formData = {
    email: email.value, 
    name: name.value
  }
  try {
    const response = await fetch(`${import.meta.env.PUBLIC_API}/login`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body:  JSON.stringify(formData)
    });
    if (response.status === 500) throw new Error('Error 500')
    const data = await response.json()
    if (response.status === 200) {
      window.location.href = '/dashboard'
    }
  } catch (e) {
  }*/
  sessionStorage.setItem('isLoggedIn', 'true')
  sessionStorage.setItem('tm', (new Date).getTime())
  setTimeout(() => {
    window.location.href = '/dashboard/'
  }, 2000)
}

export function logOut() {
  console.log('logOut')
  setTimeout(() => {
    // document.cookie = `isLoggedIn=false; SameSite=None; Secure; Path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;`
    sessionStorage.removeItem('isLoggedIn')
    sessionStorage.removeItem('tm')
    window.location.href = '/'
  }, 2000)
}

export function Inactivity () {

}

// document.cookie = `name=oeschger; SameSite=None; Secure; expires=${now.toUTCString()}`
// document.cookie = `date=123; SameSite=None; Secure; expires=${now.toUTCString()}`
// document.cookie = `isLoggedIn=true; SameSite=None; Secure; Path=/; expires=${now.toUTCString()}`
// sessionStorage.setItem('isLoggedIn','{"test": "test1", "test2": "test"}') // sessionStorage Example


// const cookies = document.cookie.split(';').reduce((acc, item) => {
//   const [key, value] = item.trim().split('=')
//   acc[key] = value
//   return acc
// }, {});
// const isLoggedIn = cookies.isLoggedIn === 'true'