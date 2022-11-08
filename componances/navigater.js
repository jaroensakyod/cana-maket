import styles from '../styles/Naviga.module.css'
import Image from 'next/image'
import Link from 'next/link'



export default function Navigation(){
          return (
          <div>     <Link href="/">
                    <span className={styles.logo}>
                    <Image 
                    src="/logo.png"// Route of the image file
                    width="64" 
                    height="86"// Desired size with correct aspect ratio
                    alt="logo"
                    href=""
                    />
                    </span>
                    </Link>
                    
                    <div className={styles.navMenu}>
                    
                    
                    <a href="/shops">Shop</a>
                    <a href="/contacts">Contact</a>
                    <a href="/about">About</a>
                    
                    
          </div>
          <Link href="/shops">
          <span className={styles.logocarshop}><Image
                    src="/ShopMarket.png"// Route of the image file
                    width="32" 
                    height="32"// Desired size with correct aspect ratio
                    alt="logo"
                    /></span>
          </Link>
          
          </div>
          )
}