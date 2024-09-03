import Hero from '@/components/hero';
import Image from 'next/image';
import Link from 'next/link';

import Button from '@/components/button';
import Footer from '@/components/footer';
import ProjectSection from '@/components/projectSection';
import { getProjectsData } from "@/lib/projects"

export const metadata = {
  title: 'Casper Guo',
  icons: {
    icon: '/logo.png',
    // shortcut: '/shortcut-icon.png',
    // apple: '/apple-icon.png',
    // other: {
    //   rel: 'apple-touch-icon-precomposed',
    //   url: '/apple-touch-icon-precomposed.png',
    // },
  },
}

export default async function Home() {
  const projectsData = await getProjectsData();
  return (
    <div>
      <Hero />
      <section className='py-10 bg-gray-200 dark:bg-gray-800'>
        <div className='flex flex-col items-center text-center gap-4'>
          <h2 className='text-3xl font-bold'>Some of My Projects</h2>
          <Button text="View All My Projects 👨‍💻" href='/projects' />
        </div>


        {
          projectsData.slice(0, 3).map((projectData, index) => (<ProjectSection key={projectData.name} data={projectData} left={index % 2} />))
        }
      </section>
      <section className='py-10 bg-gradient-to-t from-slate-300 dark:from-slate-700 to-gray-200 dark:to-gray-800'>

        <div className='container mx-auto px-2 flex items-center content-between flex-col md:flex-row gap-4'>
          <Image
            className="rounded h-[400px] w-auto object-cover md:mr-auto "
            width={500}
            height={500}
            src="/profile_pic.png"
            alt="Me, myself, and I"
          />
          <div className='md:w-2/3 lg:w-1/2'>
            <h2 className='text-3xl font-bold mb-2'>A bit about me</h2>
            <p className='mb-2'>I graduated from the University of Michigan in 2024 with a bachelor of science in engineering in data science <i>summa cum laude</i>. I also completed two minors, in math and linguistics respectively. 〽️ Go Blue! 〽️</p>
            <p className='mb-2'>I am now pursuing a master's degree in computer science at the Georgia Institute of Technology, expecting to graduate in spring 2026. 🐝 Sting 'Em! 🐝</p>
            <p className='mb-2'>You can probably guess by now that I am a big college football fan. I will also not give up an opportunity to nerd out about formula 1 🏎️ and talk your ears about soccer ⚽.</p>
            <p className='mb-2'>Otherwise, catch me on the hiking trails 🗻 or in the theaters 🎭.</p>
            <Button text="View My Resume 📄" href='/resume' />
          </div>
        </div>
      </section>
      <Footer />

    </div>
  );
}

