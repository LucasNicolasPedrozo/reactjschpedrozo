import React from 'react'

export default function HomeContainer(props) {
    const { greeting } = props
  return (
    <div className="saludo">
        Bienvenidos a {greeting} con REACTJS
    </div>
  )

}
