import styles from '../styles/Cardbody.module.scss'

export default function Shopproduct(){
          var cartButtons = document.querySelectorAll('.cartbutton');
var card_value = document.querySelector(".added");
var pqtplus = document.querySelector(".pqtplus");
var pqtminus = document.querySelector(".pqtminus");
var cartvalue = 0;

cartButtons.forEach(button => {
  button.addEventListener('click', cartClick);
});
function cartClick() {
  let button = this;
  button.classList.add('clicked');
    card_value.textContent = cartvalue += 1;
}

if(pqtplus){
          pqtplus.addEventListener('click', function(){
                    if(card_value.nodeValue <= 0){
                     card_value.textContent = cartvalue +=1;
                    }
                });
}else if (pqtminus){
          pqtminus.addEventListener('click', function(){
                    if(Number(card_value.innerText) - 1 >= 0){
                        card_value.textContent = cartvalue -=1;
                }
                });
}




          
          return ( <div>
          
          <div className={styles.bodycard}>
          <div className={styles.game}>
                              
  <div className={styles.rank}>1</div>
<div className={styles.front}>
  <img className={styles.img} src="/BlueDreamspng.png" alt="game"/>
  <h3 className={styles.name}>Blue Dream</h3>
  <div className={styles.status}>
    <p className={styles.viewers}> Sativa-dominant</p>
    <p className={styles.gamestat}>19.9<span> $</span></p>
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
                    <br></br>
                    <br></br>
                    <div className={styles.countposition}>
                              <span className={styles.pqtminus}>-</span>
                              <button className={styles.cartbutton}>
                                        <div className={styles.count}>2</div>
                                        <span className={styles.added}></span>
                                        <i class="fa fa-shopping-cart"></i>
                              </button>
                              <span className={styles.pqtplus}>+</span>
                    </div>
                    
          </div>
                    
          )
}