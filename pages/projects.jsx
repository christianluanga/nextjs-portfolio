import React from "react"
import styles from "../styles/Pages.module.css"
import {Button} from "react-bootstrap"
import Link from "next/link"
import Head from "next/head"

const Projects = () => {
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
      <main className={styles.main}>
        <h1 className={styles.title}>My portfolio</h1>
        <p style={{fontSize: "1.2rem", marginTop: "1rem"}}>
          Highlight Projects
        </p>
        <div className={styles.grid}>
          <Link href="https://appleitunesearch.herokuapp.com/itunes/search/">
            <a className={styles.card}>
              <h3>Itunes API search &rarr;</h3>
              <p>
                This is link to a React and Node.js App that fetches the data
                from the itunes API and displays the results. The App displays
                the top 5 medias in the Music, Movies, Apps and books categories
                in South Africa. The user can search for a specific artist or
                media The user can also add medias to the favourite list stored
                on the session
              </p>
            </a>
          </Link>
          <Link href="https://github.com/christianluanga/wedding_boutique">
            <a className={styles.card}>
              <h3>Wedding Boutique &rarr;</h3>
              <p>
                Wedding Boutique is a simple online store built with HTML, CSS,
                Bootstrap, JavaScript and jQuery. The shop displays a list of
                wedding dresses and apparel. The user is capable of adding items
                to add/remove items to the cart, apply discounts, choose a
                delivery method and similate the checkout action.
              </p>
            </a>
          </Link>
        </div>
      </main>

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

export default Projects
