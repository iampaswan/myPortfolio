import styles from './Project.module.css'

const Project = () => {
  return <>
    <div className={styles.Project}>
      <div className={styles.projectContainer}>

        <div className={styles.projectContainerElements}>
          <h6>Project 1 : Dark Light Mode</h6>

        </div>
        <div className={styles.projectContainerElements}>
          <h6>Project 2 : </h6>

        </div>
        <div className={styles.projectContainerElements}>
          <h6>Project 3 :</h6>

        </div>

      </div >
    </div>

  </>
}

export default Project;
