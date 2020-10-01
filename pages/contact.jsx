import React from "react"
import styles from "../styles/Pages.module.css"
import Head from "next/head"
import {Button} from "react-bootstrap"
import Link from "next/link"

const Contact = () => {
  return (
    <div className={styles.container}>
      <Head>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=UA-172500369-2"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
          window.dataLayer = window.dataLayer || []; function gtag()
          {dataLayer.push(arguments)}
          gtag('js', new Date()); gtag('config', 'UA-172500369-2');
          `
          }}
        />
      </Head>
      <div className={styles.main}>
        <h1 className={styles.title}>Contact details</h1>
        <ol style={{listStyle: "none", fontSize: "1.4rem"}}>
          <li>Phone: +27 68 5485 923</li>
          <li>E-mail: christianluanga@gmail.com</li>
        </ol>
      </div>
      <footer>
        <Link href="/">
          <a>
            <Button variant="link">Home</Button>
          </a>
        </Link>
        <Link href="/about">
          <a>
            <Button variant="link">About</Button>
          </a>
        </Link>
        <Link href="/projects">
          <a>
            <Button variant="link">projects</Button>
          </a>
        </Link>
      </footer>
    </div>
  )
}

export default Contact
