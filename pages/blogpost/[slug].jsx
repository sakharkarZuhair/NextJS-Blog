import { useRouter } from "next/router";
import styles from "../../styles/BlogPost.module.css";

// Step 1: Find the file corresponding to the slug
// Step 2: Populate them inside the page.

const slug = () => {
  const router = useRouter();
  const { slug } = router.query;
  return (
    <>
      <div className={styles.container}>
        <main className={styles.main}>
          <h1>Title of the page {slug}</h1>
          <hr />
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
            officiis eum a est, repudiandae fugiat nobis unde cum libero, magni
            ex? Aut corporis laboriosam quo distinctio dolorum ratione sed
            laudantium officia non culpa, exercitationem accusamus est, tenetur
            asperiores aspernatur incidunt tempore. Veritatis, quidem illum. In
            voluptatem repellendus molestiae? Excepturi, laborum!
          </div>
        </main>
      </div>
    </>
  );
};

export default slug;
