import Footer from "../components/home/Footer/Footer";
import Header from "../components/home/Header/Header";
import Advantages from "../components/plans/Advantages";
import MiddleDescription from "../components/plans/MiddleDescription";
import MiddlePlans from "../components/plans/MiddlePlans";

function MiddleSchoolPlans() {
    return (
        <div className="min-h-screen shadow-lg">
            <Header />
            <MiddleDescription />
            <MiddlePlans />
            <Advantages />
            <Footer />
        </div>
    );
};

export default MiddleSchoolPlans;