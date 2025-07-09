import About from "../components/home/About/About";
import Footer from "../components/home/Footer/Footer";
import Header from "../components/home/Header/Header";
import Advantages from "../components/plans/Advantages";
import PrimaryDescription from "../components/plans/PrimaryDescription";
import PrimaryPlans from "../components/plans/PrimaryPlans";
import ServicesTable from "../components/plans/ServicesTable";

function PrimarySchoolPlans() {
    return (
        <div className="min-h-screen shadow-lg">
            <Header />
            <PrimaryDescription />
            {/* Нижче має бути опис 1-4 класів, поки вставив "чому варто обрати" */}
            {/* <ServicesTable /> */}
            <PrimaryPlans />
            <Advantages />
            <Footer />
        </div>
    );
};

export default PrimarySchoolPlans;