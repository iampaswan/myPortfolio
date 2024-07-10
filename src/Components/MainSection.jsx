import styles from './MainSection.module.css'
import mainPic from './pic.png'
import myResume from './myResume.pdf'

const showContact = () => {
  console.log("726704472");

}

const MainSection = () => {
  return <>
    <div className={styles.MainSection}>

      <div className={styles.mainLeft}>
        <h4>Hii I am</h4>
        <h1>Krishna Kumar Paswan</h1>
        <h4>MERN Developer</h4>
        <p>I am from Ballia Uttar Pradesh. I had done my scholling from Gonda Uttar Pradesh. Currently i am pursuing Bachlers in Technology at NIT Bhopal in Electrical Enginering. I like to do Coding and Web development. I wanted to make my carrier in software development field. My hobby is playing cricket and listening songs.
        </p>

        <div className={styles.twoButtonsContainer}>
          <a href={myResume}><button className={styles.twoButtons}>Download Resume</button></a>
          <a ><button className={styles.twoButtons} onClick={showContact}>Contact Now</button></a>
        </div>

      </div>

      <div className={styles.mainRight}>
        <center>
          <img src={mainPic} alt="" className={styles.mainPic} />
        </center>
      </div>

    </div>
  </>
}

export default MainSection;