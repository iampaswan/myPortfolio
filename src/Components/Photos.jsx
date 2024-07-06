import { useState } from 'react';
import styles from './Photos.module.css'
const images = [

  "https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F31a9ebbb53fb45a197334666b0eb2379",
  "https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2Fe5113e1c02db40e5bac75146fa46386f",
  "https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F385cfacb8caf42909ed89977e34e0052"

];

const Photos = () => {

  const [curr, setCurr] = useState(0)

  const prevSlide = () => {
    setCurr(curr === 0 ? images.length - 1 : curr - 1)
  }
  const nextSlide = () => {
    setCurr(curr === images.length - 1 ? 0 : curr + 1)
  }

  return <>
    <div className={styles.Photos}>
      <div className={styles.photosContainer}>
        <div id="carouselExample" className="carousel slide">
          {
            images.map((value, index) =>
              curr === index && (
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src={value} className="d-block w-100" alt="..." />
                  </div>
                </div>
              )
            )
          }


          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev"
            onClick={prevSlide}>
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next"
            onClick={nextSlide}>
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>

        </div>

      </div>


    </div>
  </>
}

export default Photos;
