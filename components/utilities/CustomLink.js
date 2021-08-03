import Link from 'next/link';

const CustomLink = (props) => {
  const href = props.href;
  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'));

  if (isInternalLink) {
    return (
      <Link href={href}>
        <a {...props}></a>
      </Link>
    );
  }
  return <a target="_blank" rel="noopener noreferrer" {...props}></a>;
};

export default CustomLink;
