import "../../styles/registeration/Payment.scss"

const ImoPaymentPlan = () => {
    return (
        <div className="payment-plan">
            <h1>Payment Plan</h1>
            <div className="payment-grid">
                <p>Payment for 2 campus: ₦100,000</p>
                <p>Payment for 4 campuses: ₦200,000</p>
            </div>
        </div>
    );
};

const PhPaymentPlan = () => {
    return (
        <div className="payment-plan">
            <h1>Payment Plan</h1>
            <div className="payment-grid">
                <p>Payment for 1 campus: ₦69,999</p>
                <p>Payment for 2 campuses: ₦129,999</p>
                <p>Payment for 3 campuses: ₦179,999</p>
            </div>
        </div>
    );
};

export { ImoPaymentPlan, PhPaymentPlan };