import { XIcon, MicrophoneIcon } from "@heroicons/react/solid";
import { SearchIcon } from "@heroicons/react/outline";
import Image from "next/image";
import { useRouter } from "next/router";
import { useRef } from "react";
import Avatar from "./Avatar";
import HeaderOptions from "./HeaderOptions";

function Header() {
  const router = useRouter();
  const searchInputRef = useRef(null);

  const Search = (e) => {
    e.preventDefault();
    const term = searchInputRef.current.value;

    if (!term) return;
    router.push(`/search?term=${term}`);
  };

  return (
    <header className="sticky top-0 bg-white">
      <div className="flex w-full p-6 items-center">
        <Image
          src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
          height={40}
          width={120}
          onClick={() => router.push("/")}
          className="cursor-pointer"
        />
        <form className="flex flex-grow px-6 py-3 ml-10 mr-5 bordr border-gray-200 rounded-full shadow-lg max-w-3xl items-center">
          <input
            ref={searchInputRef}
            className="flex-grow w-full focus:outline-none"
            type="text"
          />
          <XIcon
            className="h-7 text-gray-500 cursor-pointer transition duration-100 transform hover:scale-125"
            onClick={() => (searchInputRef.current.value = "")}
          />
          <MicrophoneIcon
            className="mr-3 h-6 
        hidden sm:inline-flex text-blue-500 border-l-2 pl-4 border-gray-300"
          />
          <SearchIcon className="h-6 text-blue-500 hidden sm:inline-flex " />
          <button type="submit" hidden onClick={Search}>
            Search
          </button>
        </form>
        <Avatar
          className="ml-auto"
          url="https://scontent.fkul14-1.fna.fbcdn.net/v/t1.6435-1/p240x240/51904299_2006881456033063_6086460870274056192_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=7206a8&_nc_ohc=GuTM1MPJiaUAX-lkz3T&_nc_ht=scontent.fkul14-1.fna&tp=6&oh=ba0bfd2fe96533050903017939b8dbb9&oe=6095D19A"
        />
      </div>
      <HeaderOptions />
    </header>
  );
}

export default Header;
