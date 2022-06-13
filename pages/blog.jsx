import React from "react";
import styles from "../styles/Blog.module.css";
import Link from "next/link";

//Step 1: Collect all the files from the blogdata directory
//Step 2: Iterate through them and Display them

const Blog = () => {
  return (
    <>
      <div className={styles.container}>
        <main className={styles.main}>
          <div>
            <Link href={"/blogpost/learn-javascript"}>
              <h3 className={styles.blogItemh3}>
                How to learn{" "}
                <span className={styles.nextjen} href="#">
                  NextJS{" "}
                </span>
                in 2022 by Zuhair
              </h3>
            </Link>
            <p> NextJS is ReactJS Framework </p>
          </div>
          <div className="blogItem">
            <h3>
              How to learn{" "}
              <span className={styles.nextjen} href="#">
                NextJS{" "}
              </span>
              in 2022 by Zuhair
            </h3>
            <p> NextJS is ReactJS Framework </p>
          </div>
          <div className="blogItem">
            <h3>
              How to learn{" "}
              <span className={styles.nextjen} href="#">
                NextJS{" "}
              </span>
              in 2022 by Zuhair
            </h3>
            <p> NextJS is ReactJS Framework </p>
          </div>
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
