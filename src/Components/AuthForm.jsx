import { useState } from "react";
// import axios from "axios";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./form.css";
import { FaGooglePlusG, FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { z } from "zod";

// Define password validation schema
const passwordSchema = z.string()
    .min(8, "Password must be at least 8 characters")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/[a-z]/, "Password must contain at least one lowercase letter")
    .regex(/[0-9]/, "Password must contain at least one number")
    .regex(/[\W_]/, "Password must contain at least one special character");

const signUpSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Invalid email format"),
    password: passwordSchema,
});

const signInSchema = z.object({
    email: z.string().email("Invalid email format"),
    password: passwordSchema,
});

const AuthForm = () => {
    const navigate = useNavigate(); // Initialize useNavigate
    const [isSignUp, setIsSignUp] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
    });
    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({});

    // Validate the field immediately when user types
    const validateField = (name, value) => {
        const schema = isSignUp ? signUpSchema : signInSchema;
        const result = schema.safeParse({ ...formData, [name]: value });

        if (result.success) {
            setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
        } else {
            const formattedErrors = result.error.format();
            setErrors((prevErrors) => ({
                ...prevErrors,
                [name]: formattedErrors[name]?._errors[0] || "",
            }));
        }
    };

    // Handle input change
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));

        // Validate immediately on every keystroke
        validateField(name, value);
    };

    // Mark field as touched
    const handleBlur = (e) => {
        const { name } = e.target;
        setTouched((prev) => ({ ...prev, [name]: true }));
    };

    // Handle form submission
    const handleSubmit = async (e, type) => {
        e.preventDefault();
        const schema = type === "Sign Up" ? signUpSchema : signInSchema;
        const result = schema.safeParse(formData);

        if (!result.success) {
            const formattedErrors = result.error.format();
            setErrors({
                name: formattedErrors.name?._errors[0] || "",
                email: formattedErrors.email?._errors[0] || "",
                password: formattedErrors.password?._errors[0] || "",
            });
            setTouched({ name: true, email: true, password: true });
        } else {
            setErrors({});
            try {
                localStorage.setItem("authToken", `${type} successfully`);
                navigate("/dashboard");
                console.log(`Form Submitted: ${type}`, formData);
                // const endpoint = type === "Sign Up" ? "/api/signup" : "/api/signin";
                // const { data } = await axios.post(endpoint, formData);

            } catch (error) {
                console.error("Error:", error.response?.data?.message || error.message);
            }
        }
    };

    return (

        <div className="authbody">
            <div className={`container ${isSignUp ? "active" : ""}`} >
                {/* Sign Up Form */}
                <div className="form-container sign-up">
                    <form onSubmit={(e) => handleSubmit(e, "Sign Up")}>
                        <h1>Create Account</h1>
                        <div className="social-icons">
                            <a href="#" className="icon"><FaGooglePlusG /></a>
                            <a href="#" className="icon"><FaFacebookF /></a>
                            <a href="#" className="icon"><FaGithub /></a>
                            <a href="#" className="icon"><FaLinkedinIn /></a>
                        </div>
                        <span>or use your email for registration</span>

                        <input type="text" name="name" placeholder="Name"
                            value={formData.name} onChange={handleInputChange} onBlur={handleBlur} />
                        {touched.name && errors.name && <p className="error">{errors.name}</p>}

                        <input type="email" name="email" placeholder="Email"
                            value={formData.email} onChange={handleInputChange} onBlur={handleBlur} />
                        {touched.email && errors.email && <p className="error">{errors.email}</p>}

                        <input type="password" name="password" placeholder="Password"
                            value={formData.password} onChange={handleInputChange} onBlur={handleBlur} />
                        {touched.password && errors.password && <p className="error">{errors.password}</p>}

                        <button type="submit">Sign Up</button>
                        <p className="text-[12px] absolute bottom-4">Already have an Account?<span className="text-blue-600 cursor-pointer" onClick={() => setIsSignUp(false)}>Sign In</span></p>

                    </form>
                </div>

                {/* Sign In Form */}
                <div className="form-container sign-in">
                    <form onSubmit={(e) => handleSubmit(e, "Sign In")}>
                        <h1>Sign In</h1>
                        <div className="social-icons">
                            <a href="#" className="icon"><FaGooglePlusG /></a>
                            <a href="#" className="icon"><FaFacebookF /></a>
                            <a href="#" className="icon"><FaGithub /></a>
                            <a href="#" className="icon"><FaLinkedinIn /></a>
                        </div>
                        <span>or use your email and password</span>

                        <input type="email" name="email" placeholder="Email"
                            value={formData.email} onChange={handleInputChange} onBlur={handleBlur} />
                        {touched.email && errors.email && <p className="error">{errors.email}</p>}

                        <input type="password" name="password" placeholder="Password"
                            value={formData.password} onChange={handleInputChange} onBlur={handleBlur} />
                        {touched.password && errors.password && <p className="error">{errors.password}</p>}

                        <a href="#">Forgot Your Password?</a>
                        <button type="submit">Sign In</button>
                        <p className="text-[12px] absolute bottom-4">Don't have an Account?<span className="text-blue-600 cursor-pointer" onClick={() => setIsSignUp(true)}>Sign Up</span></p>

                    </form>
                </div>

                {/* Toggle Section */}
                <div className="toggle-container">
                    <div className="toggle">
                        <div className="toggle-panel toggle-left">
                            <h1>Welcome Back!</h1>
                            <p className="text">Enter your personal details to use all site features</p>
                            <button onClick={() => setIsSignUp(false)}>Sign In</button>
                        </div>
                        <div className="toggle-panel toggle-right">
                            <h1>Hello, Friend!</h1>
                            <p className="text">Register with your personal details to use all site features</p>
                            <button onClick={() => setIsSignUp(true)}>Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default AuthForm;
