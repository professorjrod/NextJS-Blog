import React from "react";
import Link from "next/link";
import Head from "next/head";
import Layout from "../../components/layout";

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <h1> Welcome to my first blog post</h1>
      <Link href="/">Back home</Link>
    </Layout>
  );
}
