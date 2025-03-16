import Button from "../Components/Button";

const Home = () => {
    return (

        <div className="w-full h-[80dvh] sm:h-[100dvh] flex flex-col items-center justify-center gap-y-1 sm:gap-y-4">
            <h1 className="sm:text-4xl text-2xl font-bold !mb-2">Welcome to HelpDesk</h1>
            <div className="flex flex-col items-center text-center">
                <p className="text-gray-700 text-[12px] sm:text-[16px]">Submit a ticket, check your status, or browse our <br /> knowledge base.</p>
                <div className="flex justify-center gap-x-5 shrink-0 flex-wrap ">
                    <Button title="Check Status" path={"/dashboard"} />
                    <Button title="Create Ticket" path={"/dashboard"} />
                </div>
            </div>
        </div>

    );
};

export default Home;
