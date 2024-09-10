import Image from "next/image";
import Banner from "./content/Home/banner";
import SecWave from "./content/Home/secwave";
import Secone from "./content/Home/creativesec";
import Sectwo from "./content/Home/securitysec";
import Secthree from "./content/Home/themesec";
import Integrate from "./content/Home/integration";
import Screen from "./content/Home/mobilesec";
import Customer from "./content/Home/customer";
import Hub from "./content/Home/hubsec";
import Download from "./content/Home/downloadsec";

export const metadata = {
  title: "ITech",
  description: "A Mobile App",
};

export default function Home() {
  return (
    <div className="m-auto w-full ">
      <Banner />

      <SecWave />

      <Secone />

      <Sectwo />

      <Secthree />

      <Integrate />

      <Screen />

      <Customer />

      <Hub />

      <Download />
    </div>
  );
}
