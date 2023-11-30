import styles from "./GoogleMap.module.css";

function GoogleMap() {
  return (
    <div className={styles.GoogleMap}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2304.424190384712!2d25.280947877082617!3d54.719753071082415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dd914bb933d827%3A0xb1d772006abe01ff!2sJ.%20Bal%C4%8Dikonio%20g.%203%2C%2008200%20Vilnius!5e0!3m2!1slt!2slt!4v1701345573916!5m2!1slt!2slt"
        width="380"
        height="320"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Responsive Google Map"
      ></iframe>
    </div>
  );
}

export default GoogleMap;
