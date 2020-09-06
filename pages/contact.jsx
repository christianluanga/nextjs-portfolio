import React from "react"
import styles from "../styles/Pages.module.css"

const Contact = () => {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <h1 className={styles.title}>Contact details</h1>
        <ol style={{listStyle: "none", fontSize: "1.4rem"}}>
          <li>Phone: +27 68 5485 923</li>
          <li>E-mail: christianluanga@gmail.com</li>
        </ol>
      </div>
    </div>
  )
}

export default Contact
