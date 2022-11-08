import styles from '../styles/Header.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function Header(){
          return (<div>
                    <Image  className={styles.flower}
                    src="/sweetgrass-flower-transformed.png"// Route of the image file
                    width="747" 
                    height="958"// Desired size with correct aspect ratio
                    alt="logo"
                    />
                    <div className={styles.contaner}>
                    <p className={styles.positionofp}>
                    <h1>Don't Panic,<br/>It's Organic.
                    </h1>High quality medical and recreational cannabis with<br/>
                    fast and discreet delivery anywhere in the State .<br/>
                    
                    </p>
                    <Link href="/shops"><button className={styles.bn632}>Make Order</button></Link>
                    
                    
                    
          </div>
          </div>)
}