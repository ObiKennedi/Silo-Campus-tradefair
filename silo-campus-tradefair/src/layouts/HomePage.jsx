import { Outlet } from "react-router-dom";
import Header from "../../components/HomeNav";
import Footer from "../../components/Footer";
import WhatsappFloat from "../../components/WhatsAppFloat";

export default function HomePage() {
    return (
        <>
            <Header />
            <Outlet />
            <WhatsappFloat />
            <Footer />
        </>
    )
}