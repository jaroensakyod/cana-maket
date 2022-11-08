import styles from '../styles/Home.module.css'

export default function Vdoflower(){ 
          return (
                    <div>
                              <video className={styles.vdoflower} loop autoPlay muted >
                                        <source src="/vdoflower.mp4" />
                              </video> 
                    </div>
          )
          
                        
}