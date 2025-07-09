import About from "../components/home/About/About";
import Footer from "../components/home/Footer/Footer";
import Header from "../components/home/Header/Header";
import Advantages from "../components/plans/Advantages";
import Documents from "../components/plans/Documents";

function AboutPage() {
    return (
        <div className="min-h-screen shadow-lg">
            <Header />
            <Documents />
            <Footer />
        </div>
    );
};

export default AboutPage;