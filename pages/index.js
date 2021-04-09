import Head from "next/head";
import Avatar from "../components/Avatar";
import { MicrophoneIcon, ViewGridIcon } from "@heroicons/react/solid";
import { SearchIcon } from "@heroicons/react/outline";
import Image from "next/image";
import Footer from "../components/Footer";
import { useRef } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const searchInputRef = useRef(null);

  const Search = (e) => {
    e.preventDefault();
    const term = searchInputRef.current.value;

    if (!term) return;
    router.push(`/search?term=${term}`);
  };

  return (
    <div className="flex flex-col justify-center h-screen">
      <Head>
        <title>Google</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="flex w-full p-5 justify-between text-sm text-gray-700">
        <div className="flex space-x-4 items-center">
          <p className="link">About</p>
          <p className="link">Store</p>
        </div>

        <div className="flex space-x-4 items-center">
          <p className="link">Gmail</p>
          <p className="link">Images</p>

          <ViewGridIcon className="h-10 w-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer" />
          <Avatar url="https://scontent.fkul14-1.fna.fbcdn.net/v/t1.6435-1/p240x240/51904299_2006881456033063_6086460870274056192_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=7206a8&_nc_ohc=GuTM1MPJiaUAX-lkz3T&_nc_ht=scontent.fkul14-1.fna&tp=6&oh=ba0bfd2fe96533050903017939b8dbb9&oe=6095D19A" />
        </div>
      </header>
      <form className="flex flex-col items-center mt-44 flex-grow ">
        <Image
          src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
          height={100}
          width={300}
        />
        <div
          className="flex w-full mt-5 hover:shadow-lg 
        focus-within:shadow-lg max-w-md rounded-full border
         border-gray-200 px-5 py-3 items-center sm:max-w-xl 
         lg:max-w-2xl"
        >
          <SearchIcon className="h-5 mr-3 text-gray-500" />
          <input
            ref={searchInputRef}
            className="focus:outline-none flex-grow"
          />
          <MicrophoneIcon className="h-5 mr-3" />
        </div>
        <div className="flex flex-col w-1/2 space-y-2 justify-center mt-8 sm:space-y-0 sm:flex-row sm:space-x-4">
          <button onClick={Search} className="btn">
            Google Search
          </button>
          <button onClick={Search} className="btn">
            I'm Feeling Lucky
          </button>
        </div>
      </form>
      <Footer />
    </div>
  );
}
