import Image from 'next/image';

export default function HeaderLogo() {
  return (
    <div className='flex items-center'>
      <Image
        src='/logo_right.png'
        alt='Logo'
        width={350}
        height={75}
        className='rounded-full'
      />
    </div>
  );
}
