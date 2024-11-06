'use client';

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import dynamic from 'next/dynamic';
import { useStore } from '@/hooks/useStore';
import Image from 'next/image';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Scene = dynamic(() => import('@/components/Scene'));

export default function Home() {
  const ready = useStore((state) => state.ready);

  useGSAP(() => {
    // if (!ready) return;
    const scrollTl = gsap.timeline({
      scrollTrigger: {
        trigger: '.aboutUs',
        pin: false,
        start: 'top 70%',
        end: 'bottom 50%',
        scrub: 1.5,
      },
    });

    scrollTl.from('.aboutUs-title', {
      y: 40,
      opacity: 0,
      duration: 1,
    });
    scrollTl.from(
      '.aboutUs-para',
      {
        y: 40,
        opacity: 0,
        duration: 1,
      },
      '+=0.5'
    );

    const scrollTl2 = gsap.timeline({
      scrollTrigger: {
        trigger: '.weWish',
        start: 'top 70%',
        end: 'bottom 50%',
        scrub: 1.5,
      },
    });

    scrollTl2.from('.weWish-title', {
      y: 40,
      opacity: 0,
      duration: 1,
    });
    scrollTl2.from(
      '.weWish-para',
      {
        y: 40,
        opacity: 0,
        duration: 1,
      },
      '+=0.5'
    );
    scrollTl2.from(
      '.weWish-button',
      {
        y: 40,
        opacity: 0,
        duration: 1,
      },
      '+=0.6'
    );
  });

  return (
    <>
      <main className='hero'>
        <section className='bg-black h-screen w-screen pt-[6vh]'>
          <Scene />
          <div className='flex flex-col items-center justify-center text-center gap-20 h-full w-full'>
            <div className='text-white flex flex-col z-5 gap-14 w-full '>
              <div className='flex flex-row font-bold text-[150px] hero-header  text-center w-full'>
                <h1 className='mr-36'>超越艺术</h1>
                <h1 className='ml-36'>数字未来</h1>
              </div>
              <div className='flex flex-col gap-5 mt-20 hero-bottom pl-20 subName'>
                <p className='font-semibold text-2xl text-left '>
                  无界数字艺术工作室
                </p>
                <p className='font-medium text-2xl text-left'>
                  InfiniteBd Studio
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className='bg-black h-screen w-screen flex flex-row'>
          <div className=' w-full h-full flex flex-col items-center justify-center text-center gap-10'>
            <div className='w-full h-1/6 flex flex-col px-24 py-6 justify-center gap-5 aboutUs'>
              <p className='w-[20vw] right-0 text-white text-left font-bold text-3xl leading-9 aboutUs-title'>
                关于我们
              </p>
              <p className='w-[30vw] text-left text-white font-light text-xl leading-10 aboutUs-para'>
                专注于创造创新和引人入胜的数字艺术作品，融合科技与创意，致力于推动数字艺术的界限
              </p>
            </div>
          </div>
        </section>

        <section className='bg-black h-screen w-screen flex flex-row'>
          <div className=' w-full h-full flex flex-col items-center justify-center text-center gap-10'>
            <div className='w-full h-1/6 px-24 py-6 flex flex-col justify-center items-end gap-5 weWish'>
              <p className='w-[20vw] right-0 text-white text-left font-bold text-3xl leading-9 weWish-title'>
                我们希望
              </p>
              <p className='w-[20vw] right-0 text-white text-left font-light text-xl leading-10 weWish-para'>
                通过独特的视角和叙事手法，让每一件作品都能引发深思和情感共鸣
              </p>
              <div className='w-[20vw] items-center weWish-button'>
                <button className='bg-white px-5 py-2 mt-4 font-semibold z-50'>
                  查看案例
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className='bg-black h-screen w-screen flex items-center justify-center'>
          <div className='w-full h-full flex items-center justify-center text-center gap-10 bg-black z-30'>
            <div className='flex flex-row gap-20 overflow-x-auto whitespace-nowrap mx-14'>
              <Image
                src='/img1.jpg'
                alt=''
                width={350}
                height={600}
              />
              <Image
                src='/img2.jpg'
                alt=''
                width={350}
                height={600}
              />
              <Image
                src='/img3.jpg'
                alt=''
                width={350}
                height={600}
              />
              <Image
                src='/img4.jpg'
                alt=''
                width={350}
                height={600}
              />
              <Image
                src='/img5.jpg'
                alt=''
                width={350}
                height={600}
              />
              <Image
                src='/img6.jpg'
                alt=''
                width={350}
                height={600}
              />
              <Image
                src='/img7.jpg'
                alt=''
                width={350}
                height={600}
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
