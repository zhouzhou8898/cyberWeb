'use client';

import dynamic from 'next/dynamic';

const Scene = dynamic(() => import('@/components/Scene'));

export default function Home() {
  return (
    <>
      <main className='hero'>
        <section className='bg-black h-screen w-screen pt-[6vh]'>
          <Scene />
          <div
            className='flex flex-col items-center justify-center text-center gap-20 h-full w-full'
            style={{
              fontFamily: 'Noto Sans SC, serif',
            }}
          >
            <div className='text-white flex flex-col z-5 gap-14'>
              <div className='flex flex-row font-bold text-[180px] gap-[10vw]'>
                <h1 className=''>跨越边界</h1>
                <h1 className=''>数字未来</h1>
              </div>
              <div className='flex flex-col gap-5 mt-20'>
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
          <div
            className=' w-full h-full flex flex-col items-center justify-center text-center gap-10'
            style={{
              fontFamily: 'Noto Sans SC, serif',
            }}
          >
            <div className='w-full h-1/6 flex flex-col px-24 py-6 justify-center gap-5'>
              <p className='w-[20vw] right-0 text-white text-left font-serif font-light text-lg leading-9'>
                关于我们
              </p>
              <p className='w-[30vw] text-left text-white font-serif font-bold text-xl leading-10'>
                专注于创造创新和引人入胜的数字艺术作品，融合科技与创意，探索全新的表达方式,致力于推动数字艺术的界限
              </p>
              {/* <p className='w-[20vw] right-0 text-white text-left font-serif font-medium text-lg leading-9'>
                无论是沉浸式体验、互动装置还是游戏设计，我们都旨在通过独特的视角和叙事手法，让每一件作品都能引发深思和情感共鸣
              </p> */}
            </div>
            {/* <button className='bg-white px-5 py-2 mt-8 font-semibold z-50'>
              了解更多
            </button> */}
          </div>
        </section>

        <section className='bg-black h-screen w-screen flex flex-row'>
          <div
            className=' w-full h-full flex flex-col items-center justify-center text-center gap-10'
            style={{
              fontFamily: 'Noto Sans SC, serif',
            }}
          >
            <div className='w-full h-1/6 px-24 py-6 flex flex-col justify-center items-end gap-5'>
              <p className='w-[20vw] right-0 text-white text-left font-serif font-light text-lg leading-9'>
                我们希望
              </p>
              <p className='w-[20vw] right-0 text-white text-left font-serif font-bold text-xl leading-10'>
                无论是沉浸式体验、互动装置还是游戏设计，我们都旨在通过独特的视角和叙事手法，让每一件作品都能引发深思和情感共鸣
              </p>
              <div className='w-[20vw] items-center'>
                <button className='bg-white px-5 py-2 mt-8 font-semibold z-50'>
                  查看案例
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
