import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className='fixed py-5 px-8 w-[100vw] flex items-center justify-between text-white font-serif'>
      {/* LOGO */}
      <div className='w-1/3 pl-5'>
        <Image
          src='/infinite.svg'
          width={50}
          height={50}
          alt=''
        />
      </div>
      {/* ITEM */}
      <div className='flex flex-row gap-10 w-1/3 justify-between items-center'>
        <p>主页</p>
        <p>关于我们</p>
        <p>解决方案</p>
        <p>案例</p>
        <p>近期新闻</p>
      </div>
      {/* SOCIAL */}
      <div className='flex gap-4 w-1/3 justify-end'>
        <Link href='/'>
          <Image
            src='/github.png'
            alt=''
            width={24}
            height={24}
          />
        </Link>
        <Link href='/'>
          <Image
            src='/dribbble.png'
            alt=''
            width={24}
            height={24}
          />
        </Link>
        <Link href='/'>
          <Image
            src='/instagram.png'
            alt=''
            width={24}
            height={24}
          />
        </Link>
        <Link href='/'>
          <Image
            src='/facebook.png'
            alt=''
            width={24}
            height={24}
          />
        </Link>
        <Link href='/'>
          <Image
            src='/pinterest.png'
            alt=''
            width={24}
            height={24}
          />
        </Link>
        <Link href='/'>
          <Image
            src='/linkedin.png'
            alt=''
            width={24}
            height={24}
          />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
