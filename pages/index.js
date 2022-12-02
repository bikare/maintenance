import Head from 'next/head'
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <section className="h-screen background-animate bg-gradient-to-tr hover:bg-gradient-to-r from-[#cee6ff] to-[#e7d6ff]">
        <Head>
            <title>Bakım çalışması..</title>
        </Head>
        <div className="flex flex-col justify-around h-screen px-5">
            <div className="container mx-auto flex flex-col md:flex-row  items-center gap-y-10 gap-x-10 pt-10">
                <div className="w-2/3 h-[250px] lg:h-[400px] relative">
                    <Image src="/maintenance.svg" layout="fill" />
                </div>
                <div className="flex flex-col gap-y-10">
                    <h4 className="text-3xl text-center md:text-start md:text-4xl font-black text-[#353945]">Bakım çalışması</h4>
                    <p className="text-md text-center md:text-start md:text-lg font-medium text-[#353945]">Sizlere daha iyi hizmet verebilmek adına alt yapımızı güçlendiriyoruz. En kısa sürede tekrar sitemiz yayında olacaktır.</p>
                </div>
            </div>
            <div className="flex w-full justify-center items-end">
                <Link href="https://bikare.net" target="_blank">
                    <p className="flex flex-row items-end gap-x-3">
                        <Image src="/Logo.svg" layout="fixed" width="50" height="50" />
                        <span className="font-Pacifico text-2xl text-[#353945]">web agency</span>
                    </p>
                </Link>
            </div>
        </div>
    </section>
  )
}
