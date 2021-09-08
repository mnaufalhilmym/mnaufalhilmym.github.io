import LinkNewTab from "./common/LinkNewTab";

export default function LeftBar() {
  return (
    <nav className="absolute bottom-8 left-8">
      <ul className="text-gray-400 font-mono tracking-widest leading-loose">
        <li className="hover:text-white">
          <LinkNewTab href="https://www.linkedin.com/in/naufalhilmy/">
            LinkedIn
          </LinkNewTab>
        </li>
        <li className="hover:text-white">
          <LinkNewTab href="https://www.instagram.com/mnaufalhilmym/">
            Instagram
          </LinkNewTab>
        </li>
        <li className="hover:text-white">
          <LinkNewTab href="https://www.facebook.com/mnaufalhilmym/">
            Facebook
          </LinkNewTab>
        </li>
      </ul>
    </nav>
  );
}
