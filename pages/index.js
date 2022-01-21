import Head from "next/head";
import Animation from "../components/Animation";
import AnimatedText from "../components/elements/AnimatedText";
import HeaderAnimation from "../components/elements/HeaderAnimation";
import NavBar from "../components/NavBar";
import HomePage from "../components/slides/HomePage";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        ></link>
      </Head>

      <body className="bg-zinc-800 overflow-x-hidden max-w-[100vw] p-4 text-green-200">
        <NavBar />
        <HeaderAnimation />
        <HomePage/>
      </body>
    </>
  );
}
