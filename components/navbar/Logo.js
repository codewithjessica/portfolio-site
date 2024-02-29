import Link from "next/link.js";

export default function Logo() {
  return (
    <Link href="/">
      <svg
        className="cursor-pointer fill-purple hover:fill-gray-700 dark:fill-mustard dark:hover:fill-white"
        height="2rem"
        viewBox="0 0 190 59"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <text x="5" y="45" fontSize="52" fontFamily="fantasy">Jessica</text>
      </svg>
    </Link>
  );
}
