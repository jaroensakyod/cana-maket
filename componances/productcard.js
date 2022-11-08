import styles from '../styles/Cardbody.module.scss'

export default function Productcard() {
          const button = document.querySelector(".heart-like-button");

          
          return (<div className={styles.bodycard}>
                    <div className={styles.game}>
                              <div className={styles.rank}><a href="#" title="Love it" class="btn btn-counter multiple-count" data-count="0"><span>&#x2764;</span></a></div>
                              <div className={styles.front}>
                                        <img className={styles.img} src="/BlueDreamspng.png" alt="game" />
                                        <h3 className={styles.name}>Blue Dream</h3>
                                        <div className={styles.status}>
                                                  <p className={styles.viewers}> Sativa-dominant</p>
                                                  
                                                  
                                                  
                                        </div>
                              </div>
                              <div className={styles.back}>
                                        <div className={styles.streaminginfo}>
                                                  
                                                  <p className={styles.gamestat}>22.8%<span>THC</span></p>
                                                  <p className={styles.gamestat}>0.0%<span>CBD</span></p>
                                                  
                                                  
                                                  
                                        </div>
                                        <button className={styles.btn}>Blue Dream is a sativa-dominant hybrid and a legendary daytime strain. Shadowbox bred theirs from DJ Shorts Blueberry and Super Secret Santa Cruz Haze.</button>
                                        
                              </div>
                              <div className={styles.backgroundWrapper}></div>
                    </div>

          </div>

          )
}