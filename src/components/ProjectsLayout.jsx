import styles from "./ProjectsLayout.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function ProjectsLayout() {
  return (
    <section className={styles.section}>
      <div>
        <Carousel />
      </div>
    </section>
  );
}

export default ProjectsLayout;

function Carousel() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className={styles.box}>
      <h2> Atlikti projektai</h2>
      <Slider {...settings}>
        <div className={styles.div}>
          <h3 className={styles.ogo}>Practise project: Eat-N-Split</h3>
          <button>Click here</button>
          <img src="../public/ben.jpg" className={styles.img} />
        </div>
        <div className={styles.div}>
          <h3 className={styles.ogo}>Practise project: Eat-N-Split</h3>
          <button>Hello</button>
          <img src="../public/ben.jpg" className={styles.img} />
        </div>
        <div className={styles.div}>
          <h3 className={styles.ogo}>Practise project: Eat-N-Split</h3>
          <button>Hello</button>
          <img src="../public/ben.jpg" className={styles.img} />
        </div>
        <div className={styles.div}>
          <h3 className={styles.ogo}>Practise project: Eat-N-Split</h3>
          <button>Hello</button>
          <img src="../public/ben.jpg" className={styles.img} />
        </div>
        <div className={styles.div}>
          <h3 className={styles.ogo}>Practise project: Eat-N-Split</h3>
          <button>Hello</button>
          <img src="../public/ben.jpg" className={styles.img} />
        </div>
        <div className={styles.div}>
          <h3 className={styles.ogo}>Practise project: Eat-N-Split</h3>
          <button>Hello</button>
          <img src="../public/ben.jpg" className={styles.img} />
        </div>
      </Slider>
    </div>
  );
}
