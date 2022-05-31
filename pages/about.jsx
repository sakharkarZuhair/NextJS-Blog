import styles from "../styles/Home.module.css";

const about = () => {
  return (
    <>
      <div className={styles.aboutContainer}>
        <div>
          <div className={styles.firstAbout}>
            <h1>About Us</h1>
            <p>
              Our philosophy is simple: We deliver good, clean food to make
              eating smart easy. But were obsessed with good food, too not just
              good-for-you food. Big flavors, high-quality ingredients, and
              fresh produce are the cornerstones of our prepared meals. We dont
              use preservatives, and our meals are always fresh never frozen. We
              also customize meals to accommodate dietary restrictions, and
              offer gluten-free, paleo, vegetarian, and vegan meals.
            </p>
          </div>

          <div className={styles.secondAbout}>
            <h2>catering and wellness</h2>

            <p>
              Clean Creations caters! We prepare fresh, healthy gourmet meals
              for private parties, corporate events, office lunches, and more.
              We can also create custom menus for particular dietary
              restrictions, including gluten-free, paleo, vegetarian, or vegan.
              For more information about catering and menus, send an e-mail to:
              events@cleancreations.net
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default about;
