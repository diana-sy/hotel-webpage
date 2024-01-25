import ClientComponent from "./ClientComponent";
import { heroHeading, imgHeroSection } from "./ServerComponent";


const HeroSection = () => {
 return <ClientComponent heroHeading={heroHeading} imgHeroSection={imgHeroSection}/>

};

export default HeroSection
