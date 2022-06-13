import React, { useEffect, useState } from "react";
import styles from "../styles/Blog.module.css";
import Link from "next/link";

//Step 1: Collect all the files from the blogdata directory
//Step 2: Iterate through them and Display them

const Blog = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/blogs")
      .then((a) => {
        return a.json();
      })
      .then((parsed) => {
        // console.log(parsed);
        setBlogs(parsed);
      });
  }, []);

  return (
    <>
      <div className={styles.container}>
        <main className={styles.main}>
          {blogs.map((blogItem) => {
            return (
              <div key={blogItem.title}>
                <Link href={`/blogpost/${blogItem.slug}`}>
                  <h3 className={styles.blogItemh3}>{blogItem.title}</h3>
                </Link>
                <p>{blogItem.content.substr(0, 140)}...</p>
              </div>
            );
          })}
        </main>
        {/* {Array.apply(0, Array(num)).map(function (x, i) {
                                        return (
                                          <>
                                            <h1>
                                              How to learn
                                              <span className={styles.nextjen} href="#">
                                                NextJS
                                              </span>
                                            </h1>
                                            <p>NextJS is ReactJS Framework</p>
                                          </>
                                        );
                                      })} */}
      </div>
    </>
  );
};

export default Blog;
