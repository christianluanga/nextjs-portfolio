import React from "react"
import styles from "../styles/Pages.module.css"
import Link from "next/link"

const Projects = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>My portfolio</h1>
        <p style={{fontSize: "1.2rem"}}>
          I have selected and included on this page some of my highlight work. A
          <br />
          full list of my work can be found on my GitHub repo using the link{" "}
          <br />
          provided on the footer of this page.
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

      <footer className={styles.footer}>
        <a
          href="https://github.com/christianluanga"
          target="_blank"
          rel="noopener noreferrer"
          style={{marginRight: "20px", marginLeft: "20px"}}
        >
          checkout my github repo
        </a>
        <a
          href="https://github.com/christianluanga"
          target="_blank"
          rel="noopener noreferrer"
        >
          checkout my linkedIn profile
        </a>
      </footer>
    </div>
  )
}

export default Projects
