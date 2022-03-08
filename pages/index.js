/* eslint-disable @next/next/link-passhref */
/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import About from "../components/About/About";
import Main from '../components/Main/Main';
import ListGame from '../components/ListGame/ListGame';


export default function Home() {
  return (
    <div className="overflow-hidden">
      <Head>
        <title>Impostor | Homepage</title>
        <meta name="description" content="Impostor Website dengan Next JS" />
      </Head>
      <Main />
      <ListGame />
      <About />

      {/* Footer */}
      <section className="py-20 font-body">
      <div className="container">
        <div className="flex xl:items-center lg:items-center">
          <div className="flex flex-col w-4/12 justify-start px-16">
            <div className="flex">
              <Image
                src="/images/impostor-logo.svg"
                alt="impostor-logo"
                width={30}
                height={30}
              />
              <span className="font-bold xl:px-2.5 lg:px-2.5 md:px-0 xl:text-4xl lg:text-4xl md:text-3xl text-primary">
                Impostor
              </span>
            </div>
            <p className="mt-5 leading-relaxed">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy
              text ever since the 1500s, when an unknown printer took a galley
              of type and scrambled it to make a type specimen book.
            </p>
          </div>
          <div className="w-4/12 xl:px-16 lg:px-16 md:px-14 sm:px-7">
            <h3 className="xl:text-3xl lg:text-2xl">CONTRIBUTOR</h3>
            <ul className="mt-5">
              <li>
              <a href="#" className="text-lg">
                Bogiant
              </a>
            </li>
            <li>
              <a href="#" className="text-lg">
                Fikri
              </a>
            </li>
            <li>
              <a href="#" className="text-lg">
                Hasby
              </a>
            </li>
            <li>
              <a href="#" className="text-lg">
                Oja
              </a>
            </li>
            <li>
            <a href="#" className="text-lg">
                Ulfa
              </a>
            </li>
          </ul>
        </div>
        <div className="xl:w-4/12 lg:w-4/12 md:w-[45%] sm:w-[60%] xl:px-16 lg:px-16 md:px-14 sm:px-7">
          <h3 className="xl:text-3xl lg:text-2xl md:text-2xl sm:text-2xl">Newsletter</h3>
          <form className="mt-5">
            <input
              className="w-full border rounded-full py-3 xl:px-10 lg:px-7 md:px-2 sm:px-2"
              type="text"
              name="email"
              placeholder="Enter email address"
            />
          </form>
          <Link href="/#">
            <a className="mt-3 rounded-full bg-primary text-white text-lg px-10 py-3 inline-block text-center">
              SUBSCRIBE
            </a>
          </Link>
          <p className="mt-5">We never spam you!</p>
        </div>
      </div>
        </div>
      </section>
      <footer>
        <div className="container text-center py-10">
          <p>©2022 Impostor Team. All Rights Reserved</p>
        </div>
      </footer>

    </div>
  );
}