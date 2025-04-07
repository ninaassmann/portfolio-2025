import Image from "next/image";
import Link from "next/link";

import { Inter } from "next/font/google";

import { Dribbble, Github, Instagram } from "lucide-react";
import FrontendMentor from "@/app/components/FrontendMentorIcon";

const font = Inter({
  subsets: ["latin"],
});

const links: { title: string; icon?: React.ComponentType }[] = [
  { title: "GitHub", icon: Github },
  {
    title: "Frontend Mentor",
    icon: FrontendMentor,
  },
  { title: "Dribble", icon: Dribbble },
  { title: "Instagram", icon: Instagram },
];

export default function SocialLinks() {
  return (
    <>
      <section className="bg-[#141414] py-32 px-6 grid place-content-center">
        <div className="bg-[#1f1f1f] p-8 rounded-2xl flex flex-col gap-6 items-center max-w-96">
          <Image
            className="rounded-full"
            src="/challenges/social-links/avatar-jessica.jpeg"
            alt="Jessica Randall"
            width={100}
            height={100}
          />
          <div
            className={`flex flex-col gap-2 items-center leading-[150%] ${font.className}`}>
            <h2 className="text-[24px] font-semibold text-white group-hover:text-[#F4D04E]">
              Jessica Randall
            </h2>
            <p className="text-[14px] font-semibold text-[#c5f82a]">
              London, United Kingdom
            </p>
          </div>
          <p className="text-[14px] text-white px-4 opacity-80">
            &quot;Front-end developer and avid reader.&quot;
          </p>
          <ul className="flex flex-col gap-5 items-center w-full text-[14px]">
            {links &&
              links.map((link) => (
                <li
                  className="bg-[#333333] group duration-200 ease-in-out text-center text-white font-bold w-full rounded-lg cursor-pointer flex overflow-hidden"
                  key={link.title}>
                  <span className="bg-[#3d3d3d] group-hover:bg-[#c5f82abb] group-hover:text-[#141414]  h-full w-14 grid place-content-center">
                    {link.icon && <link.icon />}
                  </span>
                  <span className="py-4 grow group-hover:bg-[#c5f82a] group-hover:text-[#141414] ">
                    {link.title}
                  </span>
                </li>
              ))}
          </ul>
        </div>
      </section>
      <section>
        <div className="container my-24 flex flex-col gap-10">
          <h1>Social Links</h1>
          <p>
            Challenge by{" "}
            <Link
              className="underline underline-offset-4"
              href="https://www.frontendmentor.io/"
              target="_blank">
              Frontend Mentor
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
