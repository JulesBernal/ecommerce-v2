import React, {useEffect} from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
export default function Footer(props) {
  return (
    <footer className={props.data ? 'theme' : '' }>
      <section id="footerSec">
        <a href="https://facebook.com/"><FacebookIcon /></a>
        <a href="https://www.linkedin.com/in/jules-bernal-benitez/"><LinkedInIcon /></a>
        <a href="https://twitter.com/"><TwitterIcon /></a>
        <a href="https://github.com/JulesBernal"><GitHubIcon /></a>
      </section>
      <p>Copyright &copy; Created by Jules Bernal Benitez</p>
    </footer>
  )
}
