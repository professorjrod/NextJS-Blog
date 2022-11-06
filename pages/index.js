import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          I am a smart, hungry and humble Full Stack Developer. I have been
          programming since middle school and have a passion for finding
          efficient and fiscally minded solutions for all digital products. I am
          a lifelong learner and open source contributor who enjoys creating
          unique solutions to complex problems. I am proficient in JavaScript
          and Ruby and can work with SQL and NoSQL like MongoDB and GraphQL.
        </p>
        <p>
          This is a sample website - you’ll be building a site like this on{" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.
        </p>
      </section>
    </Layout>
  );
}
