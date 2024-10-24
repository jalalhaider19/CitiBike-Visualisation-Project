// src/pages/index.js
import Head from "next/head";
import Charts from "./assignment4_student.js"; // Correct relative path

export default function Home() {
  return (
    <>
      <Head>
        <title>Assignment 4 - CitiBike</title>
        <meta name="description" content="Data Visualization for CitiBike 2020" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Charts /> {/* Render the Charts component */}
      </div>
    </>
  );
}
