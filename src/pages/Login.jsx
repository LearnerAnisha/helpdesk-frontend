const Login = () => {
    const handleLogin = () => {
        localStorage.setItem("authToken", "12345"); // Fake login
        window.location.href = "/dashboard"; // Redirect after login
    };

    return (
        <div className="content">
            <h1>Login Page</h1>
            <button className="bg-black text-blue-600 font-serif font-semibold px-2 py-1 rounded-md cursor-pointer" onClick={handleLogin}>Login</button>
        </div>
    );
};

export default Login;
