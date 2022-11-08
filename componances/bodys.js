import styles from '../styles/Body.module.css'
import Productcard from './productcard'


export default function Body(){
          return( <div className={styles.contantop}>
                    <div className={styles.contaner}>
                    <p>
                    <h1>Featured products
                    </h1>Choose your favorite strains. Prices will be<br/>
                    clculated upon checkout .<br/></p>
          </div>
          <div className={styles.contancard}>
          <Productcard/>
          <Productcard/>
          <Productcard/>
          <Productcard/>
          </div>
          <div className={styles.contancard}>
          <Productcard/>
          <Productcard/>
          <Productcard/>
          <Productcard/>
          </div>
          
          
          </div>)
}