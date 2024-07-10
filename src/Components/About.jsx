import styles from './About.module.css'

const About = () => {
  return <>
    <div className={styles.About}>
      <div className={styles.aboutContainer}>

        <div className={styles.aboutContainerElements}>
          <h6>Ballia Uttar Pradesh : 2003 - 2007</h6>
          I am Krishna Kumar Paswan. I was born on 1st September 2003 in <b>Ballia</b> Uttar Pradesh. I studied there for 1 years in primary school. Then I went to <b>Gonda</b> city in 2008 with my uncle and aunty.
        </div>
        <div className={styles.aboutContainerElements}>
          <h6>Gonda Uttar Pradesh : 2008 - 2021</h6>
          In Gonda I studied for 12 years and completed my schooling from <b>Sri Raghukul Vidya Peeth</b> in 2020. After 12th durring covid period i had given JEE Main exam and i qualify it but not get sufficient marks to get a colleage, so I decided to take a drop year for preparation of JEE exam. I started self study with youtube and different books and again given JEE exam in 2021 and got good marks in JEE Mains and also qualify JEE Advanced but with low marks. During counselling of colleage i got <b>Mualana Azad National Institute of Technology</b> (MANIT) Bhopal for batch 2021-2025.
        </div>
        <div className={styles.aboutContainerElements}>
          <h6>Bhopal Madhya Pradesh : 2022 - Present</h6>
          Now currently i am in final year student of colleage and pursuing Electrical Engineering.
        </div>

      </div >
    </div >
  </>
}

export default About;