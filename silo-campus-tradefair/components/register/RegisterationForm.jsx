import { useState } from "react";
import "../../styles/registeration/Form.scss";
import { Link } from "react-router-dom";

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

    const v = (name) => formData[name] || "";

    // ✅ STEP VALIDATION
    const validateStep = () => {
        if (step === 0) {
            if (!v("email") || !v("business-name") || !v("personal-name")) {
                return "Please fill all personal information fields.";
            }
        }

        if (step === 1) {
            if (!v("working-whatsapp") || !v("working-number")) {
                return "Please provide your contact details.";
            }
        }

        if (step === 2) {
            if (!v("category") || !v("sale-item")) {
                return "Please complete your business details.";
            }
        }

        if (step === 3) {
            if (!v("campus") || !v("campus-list")) {
                return "Please complete final questions.";
            }
        }

        return "";
    };

    const next = () => {
        const err = validateStep();
        if (err) {
            setError(err);
            return;
        }
        setError("");
        setStep((s) => s + 1);
    };

    const back = () => {
        setError("");
        setStep((s) => s - 1);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const err = validateStep();
        if (err) {
            setError(err);
            return;
        }

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

            if (!res.ok || !data.success) {
                throw new Error(data.message || "Submission failed");
            }

            // ✅ WhatsApp redirect
            const message = `Hello my name is ${v("personal-name")}, my brand is ${v("business-name")} and I want to pay for ${v("campus")} campuses, which are ${v("campus-list")}`;
            const url = `https://wa.me/2349063508366?text=${encodeURIComponent(message)}`;

            window.location.href = url;

        } catch (err) {
            setError(err.message || "Something went wrong. Try again.");
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <form className="reg-form" onSubmit={handleSubmit} noValidate>
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

                    <small>Please state your business name as it should appear on your stand.</small>
                </div>
            )}

            {/* STEP 2 */}
            {step === 1 && (
                <div className="form-step">
                    <h2>Business Contact Information</h2>

                    <input name="working-whatsapp" placeholder="Business WhatsApp" value={v("working-whatsapp")} onChange={handleChange} />
                    <input name="working-number" placeholder="Working Number" value={v("working-number")} onChange={handleChange} />
                    <input name="state" placeholder="State of Residence" value={v("state")} onChange={handleChange} />

                    <input name="instagram" placeholder="Instagram" value={v("instagram")} onChange={handleChange} />
                    <input name="facebook" placeholder="Facebook" value={v("facebook")} onChange={handleChange} />
                    <input name="tiktok" placeholder="TikTok" value={v("tiktok")} onChange={handleChange} />

                    <small>Ensure details are correct. Used for promotion & updates.</small>
                </div>
            )}

            {/* STEP 3 */}
            {step === 2 && (
                <div className="form-step">
                    <h2>Product / Service Information</h2>

                    <select name="worth" value={v("worth")} onChange={handleChange}>
                        <option value="">Worth of goods</option>
                        <option value="below_500k">Below ₦500,000</option>
                        <option value="500k_1m">₦500k - ₦1M</option>
                        <option value="1m_2m">₦1M - ₦2M</option>
                        <option value="2m_plus">₦2M+</option>
                        <option value="5m_plus">₦5M+</option>
                    </select>

                    {/* ✅ FIXED CATEGORY VALUES */}
                    <select name="category" value={v("category")} onChange={handleChange}>
                        <option value="">Select Category</option>
                        <option value="thrifts">Thrifts</option>
                        <option value="clothing">Brand New Clothes</option>
                        <option value="footwear">Footwear</option>
                        <option value="bags">Bags</option>
                        <option value="perfume/fragrance">Perfume/Fragrance</option>
                        <option value="nightwear/lingerie/underwear">Nightwear/Lingerie/Underwear</option>
                        <option value="adult-toys/accessories">Adult product and Accessories</option>
                        <option value="make-up-products">Make Up products and Accessories</option>
                        <option value="skincare/bodycare">Skincare/Bodycare products</option>
                        <option value="jewelry">Jewel/Fashion Accessories</option>
                        <option value="phone/accessories">Phone and Accessories</option>
                        <option value="stationaries">Stationaries and Educational materials</option>
                        <option value="fabrics">Fabrics</option>
                        <option value="groceries">Groceries</option>
                        <option value="drinks&liquor">Drinks and Liquor</option>
                        <option value="grills">Grills</option>
                        <option value="fanfair-merchandise">Anime/KPOP/Manga/KDrama Merchandise</option>
                        <option value="female-ready-to-wear">Female Ready to wear</option>
                        <option value="male-ready-to-wear">Male ready to wear</option>
                        <option value="body-shapers">Body Shapers</option>
                        <option value="kiddies-fashion">Kiddies Fashion</option>
                        <option value="electronics">Electronics/Home Appliances</option>
                        <option value="cooked-food">Cooked Food</option>
                        <option value="services">Services</option>
                        <option value="other">Other</option>
                    </select>

                    <input name="sale-item" placeholder="What exactly will you be selling?" value={v("sale-item")} onChange={handleChange} />

                    <small>Ensure items match your category.</small>
                </div>
            )}

            {/* STEP 4 */}
            {step === 3 && (
                <div className="form-step">
                    <h2>Final Questions</h2>

                    <select name="campus" value={v("campus")} onChange={handleChange}>
                        <option value="">Select Number of Campuses</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                    <input name="campus-list" placeholder="List campuses" value={v("campus-list")} onChange={handleChange} />

                    <select name="survey" value={v("survey")} onChange={handleChange}>
                        <option value="">How did you hear about us?</option>
                        <option value="referral">Referred</option>
                        <option value="tiktok">TikTok</option>
                        <option value="instagram">Instagram</option>
                        <option value="facebook">Facebook</option>
                        <option value="student">Student</option>
                    </select>
                    <div className="checkbox-group">
                        <input
                            type="checkbox"
                            id="agree-to-terms"
                            name="agree-to-terms"
                            value="yes"
                            onChange={handleChange}
                            required
                        />
                        <label htmlFor="agree-to-terms">
                            I agree to the <Link to="#terms">terms and conditions</Link>
                        </label>
                    </div>

                    <small>Only 60 vendors per campus will be selected and less than 5 in each category. Payment secures slot.</small>

                    {error && <p className="form-error">{error}</p>}
                </div>
            )}

            {/* NAV */}
            <div className="form-nav">
                {step > 0 && (
                    <button type="button" onClick={back}>
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