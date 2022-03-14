import Image from "next/image";
import HeaderItem from "./HeaderItem";
import {
  BadgeCheckIcon,
  CollectionIcon,
  HomeIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon,
} from "@heroicons/react/outline";

function Header() {
  return (
    <header className=" flex justify-between flex-col sm:flex-row m-5 h-auto">
      <div className="flex flex-grow justify-evenly max-w-2xl mt-5 p-2">
        <HeaderItem title="Home" Icon={HomeIcon} />
        <HeaderItem title="TRENDING" Icon={LightningBoltIcon} />
        <HeaderItem title="VERIFIED" Icon={BadgeCheckIcon} />
        <HeaderItem title="COLLECTIONS" Icon={CollectionIcon} />
        <HeaderItem title="SEARCH" Icon={SearchIcon} />
        <HeaderItem title="ACCOUNT" Icon={UserIcon} />
      </div>
      <h1 className="text-4xl pb-2 flex justify-center items-center animate-pulse">
        Moviezz
      </h1>
    </header>
  );
}

export default Header;
