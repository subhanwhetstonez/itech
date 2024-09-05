import Image from "next/image";
import Banner from "../app/content/Home/banner";
import SecWave from "../app/content/Home/secwave";
import Secone from "../app/content/Home/secone";
import Sectwo from "../app/content/Home/sectwo";
import Secthree from "../app/content/Home/secthree";

export default function Home() {
  return (
    <div className="m-auto w-full ">
      <Banner />

      <SecWave />

      <Secone />

      <Sectwo />

      <Secthree />
    </div>
  );
}
