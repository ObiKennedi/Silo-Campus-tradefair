import ComingSoon from "../../../components/register/ComingSoon";
import { PhCampusSection } from "../../../components/register/CampusSection";
import { PhPaymentPlan } from "../../../components/register/PaymentPlan";
//import RegisterationForm from "../../../components/register/RegisterationForm";

export default function Portharcourt() {
    return (
        <div className="out-let">
            <h1>Porthacourt Campus' Tradefair</h1>
            <PhCampusSection />
            <PhPaymentPlan />
            <ComingSoon />
        </div>
    );
}