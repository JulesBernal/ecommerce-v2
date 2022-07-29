import React from 'react'

export default function Footer(props) {
  return (
    <footer className={props.data ? 'theme' : '' }>
      <a href="https://github.com/JulesBernal"><img src="" alt="rabbit icon" /></a>
      <p>Copyright &copy; Created by Jules Bernal Benitez</p>
    </footer>
  )
}
