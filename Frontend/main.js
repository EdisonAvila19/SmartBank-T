import '@css/style.css'
import javascriptLogo from '@assets/javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from '@js/counter.js'
import { logIn } from './src/js/Auth'

document.querySelector('#login').addEventListener('click', (e) => {
  e.preventDefault()
  logIn()
})




// setInterval(() => {
//   console.log((new Date).toUTCString() === now.toUTCString())
//   console.log(document.cookie)
// },1000)

// document.querySelector('#app').innerHTML = `
//   <div>
//     <a href="https://vitejs.dev" target="_blank">
//       <img src="${viteLogo}" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
//       <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
//     </a>
//     <h1>SmartBank</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite logo to learn more
//     </p>
//   </div>
// `

// setupCounter(document.querySelector('#counter'))
