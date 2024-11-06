const Footer = () => {
  return (
    <div className='w-[100vw] h-[30vh] bg-yellow-500 py-10 px-24 font-light flex flex-row gap-32 relative z-50'>
      <div className='flex flex-col gap-3'>
        <p className='font-bold'>联系我们</p>
        <p>地址:XXX市XXX街道XXX号</p>
        <p>电话:+86 1234567890</p>
        <p>邮箱:info@artstudio.com</p>
      </div>
      <div className='flex flex-col gap-3'>
        <p className='font-bold'>社交媒体</p>
        <p>小红书</p>
        <p>Instagram</p>
        <p>Pinterest</p>
      </div>
      <p className='absolute right-10 bottom-10'>
        © 2024无界数字艺术工作室 保留所有权利
      </p>
    </div>
  );
};

export default Footer;
