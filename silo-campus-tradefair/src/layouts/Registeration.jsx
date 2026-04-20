import { Outlet } from "react-router-dom";
import Header from "../../components/register/Header";
import Expectactions from "../../components/register/Expectactions";
import TermsAndConditions from "../../components/register/TermsAndConditions";
import Footer from "../../components/Footer";
import WhatsappFloat from "../../components/WhatsAppFloat";
import VendorNote from "../../components/register/Note";

import "../../components/register/index.scss";

export default function Registeration() {
    return (
        <div className="registeration">
            <Header />
            <Expectactions />
            <TermsAndConditions />
            <VendorNote />
            <WhatsappFloat />
            <Outlet />
            <Footer />
        </div>
    );
}