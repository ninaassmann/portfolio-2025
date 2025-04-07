import Image from "next/image";

import { Outfit } from "next/font/google";
import Link from "next/link";

const outfit = Outfit({
  subsets: ["latin"],
});

export default function QRCode() {
  return (
    <>
      <section className="bg-[#D5E1EF] py-32 grid place-content-center">
        <div className="bg-white p-4 pb-10 rounded-[20px] flex flex-col gap-6 max-w-xs shadow-[0_0_25px_0_rgba(0,0,0,0.047)]">
          <Image
            className="rounded-[10px]"
            src="/challenges/qrcode/image-qr-code.png"
            alt="QR Code"
            width={288}
            height={288}
          />
          <div className="flex flex-col gap-4 px-4">
            <p
              className={`text-[22px] text-center font-bold leading-[120%] ${outfit.className} text-slate-900`}>
              Improve your front-end skills by building projects
            </p>
            <p
              className={`text-[15px] leading-[140%] tracking-[0.2px] text-center ${outfit.className} text-slate-500`}>
              Scan the QR code to visit Frontend Mentor and take your coding
              skills to the next level
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className="container my-24 flex flex-col gap-10">
          <h1>QR Code</h1>
          <Link href="https://www.frontendmentor.io/" target="_blank">
            Frontend Mentor
          </Link>
        </div>
      </section>
    </>
  );
}
