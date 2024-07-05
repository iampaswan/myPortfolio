import styles from './Footer.module.css'

const instaLink = "https://www.instagram.com/iampaswanx?igsh=NDg2c2NjeDZoeXdu"

const Footer = () => {
  return <>
    <div className={styles.Footer}>

      <div className={styles.leftFooter}>
        <div>Whatsapp</div>
        <div className={styles.FooterButtons}><i className="bi bi-whatsapp"></i></div>
      </div>
      <div className={styles.middleFooter}>
        <div>Email</div>
        <div className={styles.FooterButtons}><i className="bi bi-envelope"></i></div>
      </div>
      <div className={styles.rightFooter}>
        <div>Follow me</div>
        <div className={styles.FooterButtons}> <a href={instaLink}><i href="" className="bi bi-instagram"></i></a></div>
      </div>

    </div>
  </>
}

export default Footer;
