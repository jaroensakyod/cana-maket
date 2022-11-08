import styles from '../styles/Home.module.css'

export default function Footer(){
          return <>
                <footer className={styles.footer}>
        <a
          href="/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
          💻 SavePlanet
          </span>
        </a>
      </footer>
          
          </>
}