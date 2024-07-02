import styles from './MainSection.module.css'
import mainPic from './pic.png'
import myResume from './myResume.pdf'

const MainSection = () => {
  return <><div className={styles.MainSection}>

    <div className={styles.mainLeft}>
      <h4>Hii I am</h4>
      <h1>Krishna Kumar Paswan</h1>
      <h4>MERN Developer</h4>
      <p>I am from Ballia Uttar Pradesh. I had done my scholling from Gonda Uttar Pradesh. Currently i am pursuing Bachlers in Technology at NIT Bhopal in Electrical Enginering. My hobby is playing cricket, listening songs. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae possimus nihil, eligendi sunt quidem explicabo. Impedit optio cum repudiandae dicta illum. Vel explicabo assumenda repellendus doloremque debitis eius, nobis at rerum quas inventore, fuga sed ipsum error ipsam sunt asperiores dignissimos facilis? Qui laboriosam ex necessitatibus recusandae sed fugit hic.
      </p>

      <div >
        <a href={myResume}><button className={styles.twoButtons}>Download Resume</button></a>
        <a ><button className={styles.twoButtons}>Contact Now</button></a>
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