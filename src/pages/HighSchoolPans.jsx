import Footer from "../components/home/Footer/Footer";
import Header from "../components/home/Header/Header";
import Advantages from "../components/plans/Advantages";
import HighDescription from "../components/plans/HighDescription";
import HighPlans from "../components/plans/HighPlans";

function HighSchoolPlans() {
    return (
        <div className="min-h-screen shadow-lg">
            <Header />
            <HighDescription />
            <HighPlans />
            <Advantages />
            <Footer />
        </div>
    );
};

export default HighSchoolPlans;