import Button from "../Components/Button";

const Home = () => {
    return (

        <div className="w-full h-[100dvh] flex flex-col items-center justify-center gap-y-10">
            <h1 className="text-4xl font-bold">Welcome to HelpDesk</h1>
            <div className="flex flex-col items-center">
                <p className="text-gray-600">Submit a ticket, check your status, or browse our knowledge base.</p>
                <div className="flex gap-x-5">
                    <Button title="Check Status" path={"/dashboard"} />
                    <Button title="Create Ticket" path={"/dashboard"} />
                </div>
            </div>
        </div>

    );
};

export default Home;
