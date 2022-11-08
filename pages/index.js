
import styles from '../styles/Home.module.css'
import Header from '../componances/header'
import Body from '../componances/bodys'
import Footer from '../componances/footer'
import Navigation from '../componances/navigater'




export default function Home() {
  return (
    <div className={styles.container}>
      <Navigation/>
      <Header/>
      <main className={styles.main}>
          <Body/>
      </main>

          <Footer/>
    </div>
  )
}
