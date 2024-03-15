import { Button } from "@/components/ui/button";
import Link from "next/link";

const topics = [
  "Enerji Verimliliği",
  "Bilinçli Tüketim",
  "Geri Dönüşüm",
  "Sürdürülebilir Ulaşım",
  "Yenilenebilir Enerji",
  "Atık Su Yönetimi",
];

function Home() {
  return (
    <>
      <header className='flex flex-col items-center text-center px-16 pt-14 pb-4 bg-[#EFE607]'>
        <h1 className='text-8xl text-center text-neutral-800 text-opacity-80 max-md:max-w-full max-md:text-4xl'>
          SCAMPERESTLER
        </h1>
        <p className='mt-20 text-5xl text-yellow-950 max-md:mt-10 max-md:max-w-full max-md:text-4xl'>
          Sürdürülebilir Çevre için Mühendislik Oyunu
        </p>
        <Button className='p-5 mt-14 text-xl font-semibold text-white aspect-[4.65] backdrop-blur-[2px] fill-neutral-800 max-md:px-5 max-md:mt-10'>
          Tasarımı Seç
        </Button>
      </header>
      <main className='flex flex-col gap-8 md:flex-row md:justify-evenly p-5 bg-white'>
        <section className='flex flex-col justify-evenly text-6xl font-bold whitespace-nowrap max-md:text-4xl'>
          <h2 className='bg-clip-text max-md:text-4xl'>Düşün</h2>
          <h2 className='text-blue-600 max-md:mt-10 max-md:text-4xl'>
            Tasarla
          </h2>
          <h2 className='text-6xl font-bold text-sky-900 max-md:mt-10 max-md:max-w-full max-md:text-4xl'>
            Yeniden Tasarla
          </h2>
        </section>
        <section className='grid grid-cols-2 sm:grid-cols-3 gap-2'>
          {topics.map((topic, idx) => (
            <Link
              key={idx}
              href='/scamper'
              className='rounded-lg border border-black border-solid bg-[#1251F1] max-w-[155px] min-h-[142px] text-center text-xl font-bold text-white hover:bg-blue-900'
            >
              {topic}
            </Link>
          ))}
        </section>
      </main>
    </>
  );
}

export default Home;
