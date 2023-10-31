import Link from "next/link";

import styles from "./RoundSquareLink.module.css";

type RoundSquareLinkProps = {
  linkTitle: string;
  url: string;
  className?: string;
};
function RoundSquareLink({ linkTitle, url, className }: RoundSquareLinkProps) {
  let localLink = true;
  if (url.includes("http://") || url.includes("https://")) {
    localLink = false;
  }
  return (
    <>
      {localLink ? (
        <Link
          href={url}
          className={`${className ? className : ""} ${
            styles.squaredLink
          } clickable__animation`}
        >
          <h4 className="font-bold p-4 text-center xs:text-base">
            {linkTitle}
          </h4>
        </Link>
      ) : (
        <a
          href={url}
          className={`${className ? className : ""} ${
            styles.squaredLink
          } clickable__animation`}
        >
          <h4 className="font-bold p-4 text-center xs:text-base">
            {linkTitle}
          </h4>
        </a>
      )}
    </>
  );
}

export default RoundSquareLink;
