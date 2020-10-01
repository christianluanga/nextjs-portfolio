import React from "react"
import Link from "next/link"
import styles from "../styles/Pages.module.css"
import {Button} from "react-bootstrap"
import Head from "next/head"

const Index = () => {
  return (
    <div className={styles.main}>
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
      <p>
        Welcome to my dev portfolio. Please visit the individual pages for more
        details.
      </p>
      <footer>
        <div>
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
          <Link href="/contact">
            <a>
              <Button variant="link" color="danger">
                Contact
              </Button>
            </a>
          </Link>
        </div>
      </footer>
    </div>
  )
}

export default Index
