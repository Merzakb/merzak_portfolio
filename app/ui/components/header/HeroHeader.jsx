import React from "react";
import Image from 'next/image';
import homeLogo from "../../assets/home-main.svg";
import styles from './hero-header.module.css'; 

function HeroHeader() {
  return (
    <section className={`bg-dark pt-5 ${styles.homeSection}`}> 
      <div className={styles.homeSection} id="home">
        <div className={`container ${styles.homeContent}`}> 
          <div className="row">
            <div className={`col-md-7 text-white ${styles.homeHeader}`}> 
              <h1 className={`heading my-3 ${styles.heading}`}> 
               Salut !
                <span className={`wave ${styles.wave}`} role="img" aria-labelledby="wave"> 
                  👋🏻
                </span>
              </h1>
              <h1 className={`heading-name pb-5 ${styles.headingName}`}> 
                je suis
                <strong className={`text-secondary main-name ${styles.mainName}`}> Merzak BENAISSI</strong> 
              </h1>

              <div className={`my-5 d-flex justify-content-end ${styles.typewriterWrapper}`} > 
                <h1 className="text-secondary">Intégrateur web</h1>
              </div>
            </div>

            <div className={`col-md-5 pb-5`} > 
                <Image className="img-fluid" src={homeLogo} alt="home pic" width={500} height={500} priority/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroHeader;
