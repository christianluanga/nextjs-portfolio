import React from "react"
import Link from "next/link"
import styles from "../styles/Pages.module.css"
import {Button} from "react-bootstrap"

const Index = () => {
  return (
    <div className={styles.main}>
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
