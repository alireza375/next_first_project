import Image from "next/image";
import SelectProperty from "./components/home/selectProperty";
import SelectService from "./components/home/selectService";
import SelectWork from "./components/home/selectWork";
import AboutPage from "./components/home/about";
import Banner from "./components/common/banner";

export default function Home() {
  return (
    <div className="">
      <Banner title={"Home"}/>
      <SelectProperty />
      <SelectService />
      <AboutPage />
      <SelectWork />
      </div>

  );
}
