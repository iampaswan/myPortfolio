import styles from './Blog.module.css'

const Blog = () => {
  return <>
    <div className={styles.Blog}>

      <div className={styles.blogContainer}>

        <div className={styles.blogContainerElements}>
          <h6>Blog 1 : </h6>

        </div>
        <div className={styles.blogContainerElements}>
          <h6>Blog 2 : </h6>

        </div>
        <div className={styles.blogContainerElements}>
          <h6>Blog 3 :</h6>
        </div>

      </div >
    </div>
  </>

}
export default Blog;