import { useState } from "react";
import "../../styles/registeration/Form.scss";

const RegisterationForm = () => {
    const [step, setStep] = useState(0);
    const [formData, setFormData] = useState({});
    const [submitting, setSubmitting] = useState(false);
    const [error, setError] = useState("");

    const steps = ["Personal", "Contact", "Business", "Final"];

    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const next = () => setStep((s) => s + 1);
    const back = () => setStep((s) => s - 1);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitting(true);
        setError("");

        try {
            const res = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    access_key: "79973038-a952-4c90-97b9-ab03da339246",
                    ...formData,
                }),
            });

            const data = await res.json();

            if (res.ok && data.success) {
                const message = `Hello my name is ${formData["personal-name"]}, my brand is ${formData["business-name"]} and I want to pay for ${formData["campus"]} campuses, which are ${formData["campus-list"]}`;
                const whatsappURL = `https://wa.me/message/WYBLOU6MJNFOC1?text=${encodeURIComponent(message)}`;
                window.location.href = whatsappURL;
            } else {
                setError(data.message || "Submission failed. Please try again.");
            }
        } catch (err) {
            setError("Network error. Please check your connection and try again.");
        } finally {
            setSubmitting(false);
        }
    };

    const v = (name) => formData[name] || "";

    return (
        <form className="reg-form" onSubmit={handleSubmit}>
            {/* STEP INDICATOR */}
            <div className="steps">
                {steps.map((s, i) => (
                    <span key={i} className={i === step ? "active" : ""}>
                        {s}
                    </span>
                ))}
            </div>

            {/* STEP 1 */}
            {step === 0 && (
                <div className="form-step">
                    <h2>Your Personal Information</h2>

                    <input name="email" placeholder="Email" value={v("email")} onChange={handleChange} />
                    <input name="business-name" placeholder="Business Name" value={v("business-name")} onChange={handleChange} />
                    <input name="personal-name" placeholder="Personal Name" value={v("personal-name")} onChange={handleChange} />

                    <small>
                        Please state your business name as it should appear on your stand.
                    </small>
                </div>
            )}

            {/* STEP 2 */}
            {step === 1 && (
                <div className="form-step">
                    <h2>Business Contact Information</h2>

                    <input name="working-whatsapp" placeholder="Business WhatsApp" value={v("working-whatsapp")} onChange={handleChange} />
                    <input name="working-number" placeholder="Working Number" value={v("working-number")} onChange={handleChange} />
                    <input name="instagram" placeholder="Instagram" value={v("instagram")} onChange={handleChange} />
                    <input name="facebook" placeholder="Facebook" value={v("facebook")} onChange={handleChange} />
                    <input name="tiktok" placeholder="TikTok" value={v("tiktok")} onChange={handleChange} />

                    <small>
                        Ensure business name and social handles are correct. These will be used for promotion and group updates.
                    </small>
                </div>
            )}

            {/* STEP 3 */}
            {step === 2 && (
                <div className="form-step">
                    <h2>Product / Service Information</h2>

                    <select name="worth" value={v("worth")} onChange={handleChange}>
                        <option value="">Approximate worth of goods</option>
                        <option>Below ₦500,000</option>
                        <option>₦500,000 - ₦1,000,000</option>
                        <option>₦1,000,000+</option>
                        <option>₦2,000,000+</option>
                        <option>₦5,000,000+</option>
                        <option>₦10,000,000+</option>
                    </select>

                    <select name="category" value={v("category")} onChange={handleChange}>
                        <option value="">Select Category</option>
                        <option value="">Thrifts</option>
                        <option value="">Brandnew clothes</option>

                        <option value="">Food & Beverages</option>
                        <option value="">Beauty & Cosmetics</option>
                        <option value="">Electronics & Gadgets</option>
                        <option value="">Home & Decor</option>
                        <option value="">Health & Wellness</option>
                        <option value="">Education & Stationery</option>
                        <option value="">Services</option>
                        <option value="">Other</option>
                    </select>

                    <input name="state" placeholder="State" value={v("state")} onChange={handleChange} />
                    <input name="sale-item" placeholder="What exactly will you be selling?" value={v("sale-item")} onChange={handleChange} />

                    <small>
                        Be specific with your niche and ensure items match your selected category.
                    </small>
                </div>
            )}

            {/* STEP 4 */}
            {step === 3 && (
                <div className="form-step">
                    <h2>Final Questions</h2>

                    <input name="campus" placeholder="Number of campuses" value={v("campus")} onChange={handleChange} />
                    <input name="campus-list" placeholder="List campuses" value={v("campus-list")} onChange={handleChange} />

                    <select name="survey" value={v("survey")} onChange={handleChange}>
                        <option value="">How did you hear about us?</option>
                        <option>Referred by a vendor</option>
                        <option>TikTok</option>
                        <option>Instagram</option>
                        <option>Facebook</option>
                        <option>Billboard</option>
                        <option>Student</option>
                    </select>

                    <small>
                        By clicking submit you are agreeing to the terms and conditions.
                    </small>

                    {error && <p className="form-error">{error}</p>}
                </div>
            )}

            {/* NAVIGATION */}
            <div className="form-nav">
                {step > 0 && (
                    <button type="button" onClick={back} disabled={submitting}>
                        Back
                    </button>
                )}

                {step < steps.length - 1 ? (
                    <button type="button" onClick={next}>
                        Next
                    </button>
                ) : (
                    <button type="submit" disabled={submitting}>
                        {submitting ? "Submitting..." : "Submit"}
                    </button>
                )}
            </div>
        </form>
    );
};

export default RegisterationForm;