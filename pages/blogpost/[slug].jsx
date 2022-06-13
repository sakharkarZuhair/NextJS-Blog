import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import styles from "../../styles/BlogPost.module.css";
import * as fs from "fs";

// Step 1: Find the file corresponding to the slug
// Step 2: Populate them inside the page.

const Slug = (props) => {
  const [blog, setBlog] = useState(props.myBlog);
  // const router = useRouter();

  // useEffect(() => {
  //   if (!router.isReady) return;
  //   const { slug } = router.query;
  //   fetch(`http://localhost:3000/api/getblog?slug=${slug}`)
  //     .then((a) => {
  //       return a.json();
  //     })
  //     .then((parsed) => {
  //       // console.log(parsed);
  //       setBlog(parsed);
  //     });
  // }, [router.isReady]);

  return (
    <>
      <div className={styles.container}>
        <main className={styles.main}>
          <h1>{blog && blog.title}</h1>
          <hr />
          <div>{blog && blog.content}</div>
        </main>
      </div>
    </>
  );
};

export async function getStaticPaths() {
  return {
    paths: [
      { params: { slug: "naruto" } },
      { params: { slug: "saitama" } },
      { params: { slug: "zoro" } },
    ],
    fallback: true, // false or 'blocking'
  };
}

export async function getStaticProps(context) {
  const { slug } = context.params;

  let myBlog = await fs.promises.readFile(`blogdata/${slug}.json`, "utf-8");

  return {
    props: { myBlog: JSON.parse(myBlog) }, // will be passed to the page component as props
  };
}

// export async function getServerSideProps(context) {
//   const { slug } = context.query;

//   let data = await fetch(`http://localhost:3000/api/getblog?slug=${slug}`);
//   let myBlog = await data.json();

//   return {
//     props: { myBlog }, // will be passed to the page component as props
//   };
// }

export default Slug;
