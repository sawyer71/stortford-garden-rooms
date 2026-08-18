import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
}

export default function Button({
  children,
  href = "#",
  onClick,
}: ButtonProps) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="
        inline-flex
        items-center
        justify-center
        rounded-full
        bg-[#23352B]
        px-8
        py-4
        text-sm
        font-medium
        text-white
        transition
        duration-300
        hover:bg-[#314936]
        hover:scale-105
      "
    >
      {children}
    </Link>
  );
}