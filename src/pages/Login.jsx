import Form from "../Components/AuthForm";

const Login = () => {
    const handleLogin = () => {
        localStorage.setItem("authToken", "12345"); // Fake login
        window.location.href = "/dashboard"; // Redirect after login
    };

    return (
        <div className="">
            <Form />
        </div>
    );
};

export default Login;
