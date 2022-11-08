import styles from '../styles/Header.module.css'
import Image from 'next/image'
import Link from 'next/link'
import Navigation from "../componances/navigater"
import Footer from "../componances/footer"
import sty from '../styles/Contacts.module.css'
import Slide from '../componances/slids'




export default function contactspange(){
          return ( <div>
                    <Navigation/>
                    <div>
                    <Image  className={styles.flower}
                    src="/sweetgrass-flower-transformed.png"// Route of the image file
                    width="747" 
                    height="958"// Desired size with correct aspect ratio
                    alt="logo"
                    />
                    <div className={styles.contaner}>
                    <p className={styles.positionofp}>
                    <h1>The most reliable,<br/>cannabis retailer our city.
                    </h1>At Plantie, we use forward-thinking, cutting-edge<br/>
                    technology and expertise to provide cannabis<br/>
                    products and services that are unmatched in the local industry.
                    
                    </p>
                    <Link href="/about"><button className={styles.bn632}>CONTACTS</button></Link>
                    
                    
                    
          </div>
          



          </div>
          <div className={sty.footerposition}>
          <Footer/>
          </div>
          </div>
                    
          )
}