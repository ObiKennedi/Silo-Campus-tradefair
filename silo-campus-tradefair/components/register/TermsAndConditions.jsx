import "../../styles/registeration/TermsAndConditions.scss";

const TermsAndConditions = () => {
    return (
        <section className="terms-and-conditions" id="terms">
            <h1>Terms and Conditions</h1>

            <p>
                Please read the terms and conditions carefully before registering for the tradefair.
            </p>

            <ul>
                <li>While stating your niche, be specific and clear.</li>

                <li>You cannot sell goods that are not in line with your declared niche.</li>

                <li>You are not permitted to share your exhibition stand with any other vendor.</li>

                <li>
                    In the event of a pandemic, strike, or any unforeseen circumstance,
                    refunds will not be issued. Instead, participation will be deferred
                    until the event is rescheduled.
                </li>

                <li>
                    Any form of bullying, harassment, or assault — verbal, physical,
                    or otherwise — toward vendors, staff, or attendees will not be tolerated.
                </li>

                {/* 🔥 NEW CLAUSES (refined) */}

                <li>
                    By registering, you agree to actively support and participate in the
                    promotion of the tradefair, including appearing in marketing content
                    where required.
                </li>

                <li>
                    You acknowledge that sales performance at the tradefair is solely your
                    responsibility. The organizers are not liable for individual sales outcomes
                    or unmet revenue expectations.
                </li>

                <li>
                    Vendors are expected to maintain professionalism and refrain from making
                    defamatory or damaging public statements about the tradefair, its organizers,
                    or its representatives.
                </li>
            </ul>

            <small>
                By proceeding, you confirm that you have read, understood, and agreed to these terms and conditions.
            </small>
        </section>
    );
};

export default TermsAndConditions;