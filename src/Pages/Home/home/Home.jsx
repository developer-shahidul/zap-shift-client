import Banner from "../Banner/Banner";
import HowItWork from "../HowItWorks/HowItWork";
import OurServices from "../ourServices/OurServices";
import Brand from "../Brands/Brand";
import HighLight from "../highLight/HighLight";
import MerchantPromo from "../MerchantPromo/MerchantPromo";
import Reviews from "../Reviews/Reviews";
import HelpAccordion from "../helpAccordion/HelpAccordion";
const reviewsPromise = fetch("../../../../public/data/reviews.json").then(
  (res) => res.json(),
);

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <HowItWork></HowItWork>
      <OurServices></OurServices>
      <Brand></Brand>
      <HighLight></HighLight>
      <MerchantPromo></MerchantPromo>
      <Reviews reviewsPromise={reviewsPromise}></Reviews>
      <HelpAccordion></HelpAccordion>
    </div>
  );
};

export default Home;
