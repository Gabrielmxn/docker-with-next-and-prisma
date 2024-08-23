import Image from "next/image";
import { ShowInfoDockerVersion } from "./components/show-info-docker-version";

export default function Home() {

  return (
    <main className="relative w-full h-screen flex justify-center items-center">
      <div className="flex flex-col justify-center items-center">
        <ShowInfoDockerVersion />
        <div>
          <Image className="z-0 animate-bounce transform duration-200" src='https://img.mandic.com.br/blog/2015/01/homepage-docker-logo.png' width={200} height={200} alt={"Docker"}
          />
        </div>
      </div>

    </main>
  );
}
