import styles from './Footer.module.css'

const instaLink = "https://www.instagram.com/iampaswanx?igsh=NDg2c2NjeDZoeXdu"
const mailLink = "https://mail.google.com/mail/u/0/#inbox?compose=DmwnWrRmVGhLkPBZbTxzgGmkpkvgsPlJhzHPzrVwzHXWBGCSPcgmHRPrtLgXPNLcljRsHDtGxBHB"

const Footer = () => {
  return <>
    <div className={styles.Footer}>

      <div className={styles.leftFooter}>
        <div>Whatsapp</div>
        <div className={styles.FooterIcons}> <a href="" className={styles.footerIcon1Colour}><i className="bi bi-whatsapp"></i></a></div>
      </div>

      <div className={styles.middleFooter}>
        <div>Email</div>
        <div className={styles.FooterIcons}><a href={mailLink} className={styles.footerIcon2Colour}><i className="bi bi-envelope"></i></a></div>
      </div>

      <div className={styles.rightFooter}>
        <div>Follow me</div>
        <div className={styles.FooterIcons}> <a href={instaLink} className={styles.footerIcon3Colour}><i href="" className="bi bi-instagram"></i></a></div>
      </div>

    </div>
  </>
}

export default Footer;

