import Link from "next/link";
import { IconType, IconContext } from "react-icons";
// Icon container, pass in react Icon

export default function Icon({
  link,
  PropIcon,
  size,
  dark = false,
}: {
  link: string;
  PropIcon: IconType;
  size: number;
  dark?: boolean;
}) {
  return (
    <Link href={link}>
      <span className="">
        {/* <Image
          src={path}
          alt=""
          width={size}
          height={size}
          className={dark ? "filter invert" : ""}
        /> */}
        <IconContext.Provider
          value={size ? { size: `${size}rem` } : {}}
        >
          <PropIcon />
        </IconContext.Provider>
      </span>
    </Link>
  );
}
