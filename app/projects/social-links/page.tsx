import Image from "next/image";

import { Inter } from "next/font/google";
import Link from "next/link";

const font = Inter({
  subsets: ["latin"],
});

export default function BlogPreviewCard() {
  return (
    <>
      <section className="bg-[#F4D04E] py-32 px-6 grid place-content-center">
        <div className="bg-white border-1 border-gray-950 p-6 rounded-[20px] flex flex-col gap-6 max-w-96 shadow-[8px_8px_0_0_rgba(0,0,0,1)] group cursor-pointer duration-200 ease-in-out">
          <div className="h-[200px] w-full relative overflow-hidden">
            <Image
              className="rounded-[10px]"
              src="/challenges/blog-review-card/illustration-article.svg"
              alt="QR Code"
              fill={true}
            />
          </div>
          <div
            className={`flex flex-col gap-3 items-start leading-[150%] ${font.className}`}>
            <span className="py-1 px-3 bg-[#F4D04E] rounded-sm text-[14px] font-extrabold">
              Learning
            </span>
            <span className="text-[14px] font-medium">
              Published 21 Dec 2023
            </span>
            <p className="text-[24px] font-extrabold text-gray-950 group-hover:text-[#F4D04E]">
              HTML & CSS foundations
            </p>
            <p className="text-[16px] font-medium text-gray-500">
              These languages are the backbone of every website, defining
              structure, content, and presentation.
            </p>
          </div>
          <div className={`flex items-center gap-3 ${font.className}`}>
            <Image
              src="/challenges/blog-review-card/image-avatar.webp"
              alt="QR Code"
              width={32}
              height={32}
            />
            <span className="text-[14px] font-extrabold">Greg Hooper</span>
          </div>
        </div>
      </section>
      <section>
        <div className="container my-24 flex flex-col gap-10">
          <h1>Blog Preview Code</h1>
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
