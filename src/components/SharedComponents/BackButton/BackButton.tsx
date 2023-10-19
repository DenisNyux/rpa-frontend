import Link from "next/link";

type BackButtonProps = {
  href: string;
  text: string;
};

function BackButton({ href, text }: BackButtonProps) {
  return (
    <Link href={href} className=" text-[#5E050D] text-base leading-5">
      ← {text}
    </Link>
  );
}

export default BackButton
