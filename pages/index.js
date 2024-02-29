import Image from "next/image.js";
import Link from "next/link.js";
import Layout from "../components/Layout.js";
import Jessica from "../public/img/jessica.jpg";


export default function Home() {
  return (
    <Layout metaTitle="Jessica Cheng: software developer">
      <>
        <div className="text-center h-[90vh] flex flex-col items-center justify-center px-5">
          <div className="h-[250px] w-[250px] mb-6 border-4 border-gray-200 dark:border-gray-700 rounded-full">
            <Image
              src={Jessica}
              alt="Jessica Cheng"
              width={250}
              height={250}
              placeholder="blur"
              priority
              objectFit="cover"
              className="rounded-full"
            />
          </div>

          <p className="text-[22px] capitalize font-semibold text-purple dark:text-mustard">
            hey, I&#39;m
          </p>
          <p className="font-semibold text-7xl mb-4 mt-2 capitalize">
          Jessica Cheng
          </p>
          <p className="md:w-3/4 lg:w-[38rem]">
          A software developer, self-motivated and passionate about learning new technologies.
          </p>
          <div className="sm:flex gap-6 mt-6">
            <Link href="/about">
              <a
                className="text-[17px] text-white w-52 rounded-full font-medium block mx-auto py-3 border-2 transition-all duration-200 bg-purple border-purple
          hover:text-purple hover:bg-transparent dark:border-mustard dark:bg-mustard dark:hover:bg-transparent dark:hover:text-mustard
          text-center"
              >
                More About Me
              </a>
            </Link>
          </div>
        </div>
      </>
    </Layout>
  );
}
