import HowItWork from '../../../Components/HowItWorks/HowItWork';
import OurServices from '../../../Components/ourServices/OurServices';
import Banner from '../Banner/Banner';
import Brand from '../Brands/Brand';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HowItWork></HowItWork>
            <OurServices></OurServices>
            <Brand></Brand>
        </div>
    );
};

export default Home;