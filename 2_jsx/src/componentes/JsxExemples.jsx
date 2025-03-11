import React from 'react'

const JsxExemples = () => {
    const userName = 'João'

    const user = {
        name: 'Maria',
        lastName: 'Silva',
        age: 23
    }
  return (
    <div>
        <h2>Conteúdo que o usuário vai ver </h2>

        <p>O nome do usuário é {userName}</p>

        <p>Usuário: {user.name} {user.lastName}</p>

        <p>Age: {user.age}</p>
    </div>
    
  )
}

export default JsxExemples