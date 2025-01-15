import Email from "@/components/shared/icons/email";
import Github from "@/components/shared/icons/git";
import Linkedin from "@/components/shared/icons/linkedin";
import Toggle from "@/components/shared/icons/toggle";
import Twitter from "@/components/shared/icons/twitter";
import MaxWidthWrapper from "@/components/shared/maxWidthWrapper";
import Skillset from "@/components/shared/skillset";
import { Meteors } from "@/components/ui/meteors";
import Image from "next/image";

export default function Home() {
  return (
    <MaxWidthWrapper>
      <main className="mx-auto border overflow-hidden pb-28">
        <div className="fixed bottom-5 right-[50%] translate-x-[50%] z-50">
          <div className="mx-auto w-max mt-8 h-[58px] p-2 flex gap-2 rounded-2xl border supports-backdrop-blur:bg-white/10 supports-backdrop-blur:dark:bg-black/10 backdrop-blur-md items-end">
            <Github />
            <Linkedin />
            <Twitter />
            <Toggle />
          </div>
        </div>
        <div className="overflow-hidden">
          <div className="w-full px-4">
            <div className="relative">
              <Meteors />
              <div className="flex items-center pt-[100px]">
                <div className="relative border cursor-pointer rounded-xl overflow-hidden z-10 w-20 h-20">
                  <Image
                    alt="profile"
                    src={"/profile.jpg"}
                    width={100}
                    height={100}
                    unoptimized
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>

            <div className="text-left space-y-3 pt-6">
              <div className="w-full flex items-center justify-between">
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-white">
                  Hi, I&apos;m Karan
                </h1>
                <div className="flex items-center gap-2">
                  <div
                    title="Email"
                    className="p-1 rounded-full border border-gray-300 dark:border-gray-500"
                  >
                    <a
                      href="mailto:snorlax.karan@gmail.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Email />
                    </a>
                  </div>
                </div>
              </div>
              <div className="text-gray-600 dark:text-gray-300">
                Passionate Software Developer with over one year of experience
                in building production-ready applications from the ground up.
                Currently developing{" "}
                <a
                  data-state="closed"
                  className="dark:text-white font-semibold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500 underline z-40"
                  href="https://slugy"
                >
                  Slugy
                </a>{" "}
                , a SaaS platform. My expertise encompasses frontend, backend,
                and full-stack development.
              </div>
            </div>

            <Skillset />
          </div>
        </div>
      </main>
    </MaxWidthWrapper>
  );
}
