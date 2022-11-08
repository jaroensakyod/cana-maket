import Navigation from "../componances/navigater"
import styles from '../styles/Body.module.css'
import Shopproduct from "../componances/shopproduct"
import Footer from "../componances/footer"

export default function Shopspange(){
          return (
                    <>
                    <Navigation/>
                    <div className={styles.contancard}>
                    <Shopproduct/>
                    <Shopproduct/>
                    <Shopproduct/>
                    <Shopproduct/>
                    </div>
                    <div className={styles.contancard}>
                    <Shopproduct/>
                    <Shopproduct/>
                    <Shopproduct/>
                    <Shopproduct/>
                    </div>
                    <Footer/>
                    </>
          )
}