import OfferSection from "../Components/OfferSection"
import PricingPlans from "../Components/PricingPlans "
import RegistrationBanner from "../Components/RegistrationBanner"
import ScrollerHome from "../Components/ScrollerHome"
import WhyChooseUs from "../Components/WhyChooseUs"

const Home = () => {
    return (
        <>
            <ScrollerHome />
            <WhyChooseUs />
            <OfferSection />
            <RegistrationBanner />
            <PricingPlans />
        </>
    )
}

export default Home
