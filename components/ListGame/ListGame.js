import Image from "next/image";
import Link from "next/link";
import ResponsiveVideo from "../ResponsivePlayer";

export default function ListGame() {
  return (
    <section>
        <div className="container mx-auto">
          <h2 className="xl:text-8xl lg:text-7xl md:text-6xl sm:text-5xl font-bold font-body text-center">
            List Game
          </h2>
          <div className="flex w-9/12 mx-auto xl:mt-16 lg:mt-12 md:mt-8 sm:mt-8">
            <div className="w-4/12">
              <Link href="/login">
                <a>
                  <Image
                    className="cursor-pointer"
                    src="/images/game1.png"
                    alt="game1"
                    width={294}
                    height={217}
                  />
                </a>
              </Link>
            </div>
            <div className="w-4/12">
              <Link href="/login">
                <a>
                  <Image
                    className="cursor-pointer"
                    src="/images/game2.png"
                    alt="game2"
                    width={294}
                    height={217}
                  />
                </a>
              </Link>
            </div>
            <div className="w-4/12">
              <Link href="/login">
                <a>
                  <Image
                    className="cursor-pointer"
                    src="/images/game3.png"
                    alt="game3"
                    width={294}
                    height={217}
                  />
                </a>
              </Link>
            </div>
          </div>
        </div>

        {/* Section Video Tutorial */}
      {/* <section> */}
        <div className="container mt-14">
          <ResponsiveVideo
            url="https://www.youtube.com/watch?v=M8rbVzVf_z0"
          />
        </div>
      {/* </section> */}

        <div className="sticky">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#5956E9" fillOpacity="1" d="M0,224L48,208C96,192,192,160,288,170.7C384,181,480,235,576,240C672,245,768,203,864,197.3C960,192,1056,224,1152,218.7C1248,213,1344,171,1392,149.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
        </div>
      </section>
  );
}