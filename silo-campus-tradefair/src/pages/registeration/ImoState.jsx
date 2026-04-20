import { ImoCampusSection } from "../../../components/register/CampusSection";
import PaymentPlan from "../../../components/register/PaymentPlan";
import RegisterationForm from "../../../components/register/RegisterationForm";

export default function ImoState() {
    return (
        <div className="out-let">
            <h1>Imo State Campus' Tradefair</h1>
            <ImoCampusSection />
            <PaymentPlan />
            <RegisterationForm />
        </div>
    );
}