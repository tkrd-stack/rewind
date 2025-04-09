import Link from 'next/link';
type HeaderLinkProps = {
  href: string;
  title: string;
};
const HeaderLink: React.FC<HeaderLinkProps> = ({ href, title }) => {
  return (
    <Link
      href={href}
      className='hover:text-gray-400'
    >
      {title}
    </Link>
  );
};

export default HeaderLink;
