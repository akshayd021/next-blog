import React from "react";
import styles from "./categoryList.module.css";
import Link from "next/link";
import Image from "next/image";

// const getData = async () => {
//   const res = await fetch("http://localhost:3000/api/categories", {
//     cache: "no-store",
//   });

//   if (!res.ok) {
//     throw new Error("Failed");
//   }

//   return res.json();
// };

const CategoryList = async () => {
  // const data = await getData();
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Categories</h1>
      <div className={styles.categories}>
        {[1, 3, 3, 3,22,2]?.map((item) => (
          <Link
            href="/blog?cat=style"
            className={`${styles.category} `}
            // key={item._id}
          >
            {/* {item.img && ( */}
            <Image
              src="/p1.jpeg"
              alt=""
              width={32}
              height={32}
              className={styles.image}
            />
            {/* )} */}
            {/* {item.title} */}
       style
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
