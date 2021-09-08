import Link from "next/link";

import LinkNewTab from "./common/LinkNewTab";

export default function RightBar() {
  return (
    <nav className="absolute top-8 right-8 bottom-8 text-right text-gray-400 font-mono tracking-widest leading-loose">
      <ul>
        <li className="hover:text-white">
          <Link href="/">Home</Link>
        </li>
        <li className="hover:text-white">
          <LinkNewTab href="https://blog.hilmy.dev">Blog</LinkNewTab>
        </li>
        <li className="hover:text-white">
          <LinkNewTab href="https://github.com/mnaufalhilmym">
            Portofolio
          </LinkNewTab>
        </li>
        <li className="hover:text-white">
          <LinkNewTab href="https://blog.hilmy.dev/about">About</LinkNewTab>
        </li>
        <li className="absolute right-0 bottom-0 hover:text-white">
          <LinkNewTab href="mailto:naufal@hilmy.dev">Contact</LinkNewTab>
        </li>
      </ul>
    </nav>
  );
}
