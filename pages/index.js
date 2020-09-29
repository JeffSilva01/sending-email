import { useCallback, useRef } from 'react'
import Head from 'next/head'
import axios from 'axios'

export default function Home() {

  const refName = useRef()  
  const refEmail = useRef()  
  const refAssunto = useRef()  
  const refTexto = useRef()  

  function handlerSubmit(event) {
    event.preventDefault()

    console.log("aqui")

     const name = refName.current.value
     const email = refEmail.current.value
     const subject = refAssunto.current.value
     const texto = refTexto.current.value

     axios.post('/api/email', {
      name,
      email,
      subject,
      texto
     })
  }

  return (
    <div>
      <Head>
        <title>Envio de Email</title>
      </Head>

      <for className="container">
        <h1>DE SUA OPINIÃO</h1>
        <input ref={refName} type="text" placeholder="nome"/>
        <input ref={refEmail} type="text" placeholder="email"/>
        <input ref={refAssunto} type="text" placeholder="assunto"/>
        <input ref={refTexto} type="text" placeholder="texto"/>
        <button type="button" onClick={handlerSubmit}>enviar</button>
      </for>

    </div>
  )
}
