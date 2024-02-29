import Skills from "../components/about/Skills.js";
import Layout from "../components/Layout.js";

export default function About() {
  return (
    <Layout metaTitle="About Me - Jessica Cheng">
      <>
        <section className="w-11/12 mx-auto mt-6 mb-12 sm:w-5/6 lg:w-2/3 xl:w-[54rem]">
          <p className="text-center text-4xl font-semibold capitalize">
            <span className="font-poppins font-medium text-lg uppercase text-purple dark:text-mustard">
              about me
            </span>
            <br />
            here&#39;s my story
          </p>
          <div className="mt-6 leading-7">
            <p className="mb-6">
              Hi, I&#39;m Jessica Cheng. A software developer based in Toronto, Canada. 
              My enthusiasm lies in devising creative solutions to complex problems. 
              Fast forward to today, I have developed and implemented high-performance web applications 
              utilizing cutting-edge technologies.
            </p>
            <p className="mb-6">
              I am passionate about programming because it is a very practical skill, 
              allowing me to solve real-world problems while also serving as a creative outlet. 
              Plus, there is always something new to explore, which keeps me continually excited!
            </p>
            <p className="mb-6">
              During my leisure time, I draw inspiration from others&#39; 
              work and try out with new technologies to develop side projects.
            </p>
            <p className="mb-6">
              Please do not hesitate to reach out and say hello at:{" "}
              <a
                href="mailto:ange.ppt@gmail.com"
                rel="noreferrer"
                target="_blank"
                className="text-purple underline font-medium dark:text-mustard"
              >
                codewithjessica@outlook.com
              </a>
            </p>
          </div>
          <Skills />
        </section>
      </>
    </Layout>
  );
}
