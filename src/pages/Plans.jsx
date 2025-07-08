import Footer from "../components/home/Footer/Footer";
import Header from "../components/home/Header/Header";
import Advantages from "../components/plans/Advantages"
import AllPlans from "../components/plans/AllPlans";
import ServicesTable from "../components/plans/ServicesTable";

function Plans() {
    return (
        <div className="min-h-screen shadow-lg">
            <Header />
            <ServicesTable />
            <Advantages />
            <AllPlans />
            <Footer />
        </div>
    );
};

export default Plans;