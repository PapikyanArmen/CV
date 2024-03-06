import Image from "next/image";
import styles from "./page.module.css";

import React from "react";
import {UploadForm} from "@/app/Form";


export default function Home() {

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          MY CV
        </p>
       <UploadForm/>
      </div>
    </main>
  );
}
