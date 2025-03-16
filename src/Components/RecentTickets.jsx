const tickets = [
    { id: 1, title: "Login Issue", status: "Open" },
    { id: 2, title: "Payment Error", status: "In Progress" },
    { id: 3, title: "Bug Report", status: "Resolved" },
];

const TicketStatus = ({ status }) => {
    const statusColors = {
        Open: "text-red-500",
        "In Progress": "text-yellow-500",
        Resolved: "text-green-500",
    };
    return <span className={statusColors[status]}>{status}</span>;
};

const RecentTickets = () => {
    return (
        <div className="!my-10 sm:!my-10 w-full flex flex-col items-center shrink-0 flex-wrap ">
            <h1 className="text-2xl font-bold !mb-4">Recent Tickets</h1>
            <div className="flex flex-col items-center sm:flex-row !space-y-5 sm:!space-y-0 sm:!space-x-10">
                {tickets.map((ticket) => (
                    <span key={ticket.id} className="border-b py-2">
                        {ticket.title} - <TicketStatus status={ticket.status} />
                    </span>
                ))}
            </div>
        </div>
    );
};

export default RecentTickets;
