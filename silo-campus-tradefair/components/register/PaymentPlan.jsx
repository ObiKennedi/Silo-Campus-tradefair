import "../../styles/registeration/Payment.scss"

const PaymentPlan = () => {
    return (
        <div className="payment-plan">
            <h1>Payment Plan</h1>
            <div className="payment-grid">
                <p>Payment for 1 campus: ₦70,000</p>
                <p>Payment for 2 campuses: ₦130,000</p>
                <p>Payment for 3 campuses: ₦180,000</p>
            </div>
        </div>
    );
};

export default PaymentPlan;