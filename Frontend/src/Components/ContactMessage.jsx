const ContactMessages = () => {
    const messages = [
        {
            name: 'Constance Mendoza',
            email: 'constance@example.com',
            date: '2024-11-18',
            message: `Hard together found of emerged. 
Delicacy of must but the is acknowledge in failures on ahead with phase project the several arrives government absolutely know out place and repeat his crap copy. 
Projects feedback dull was go I king's war, not lie spirits my they and gradually road.
Nunc luctus ultrices lacus.`,
        },
        {
            name: 'Deborah Harrison',
            email: 'deborah@example.com',
            date: '2024-11-16',
            message: `Pharetra sit amet aliquam id diam maecenas ultricies. Fusce ut placerat orci nulla pellentesque dignissim enim sit amet.
Ut lectus nunc, suscipit quis nulla ac, tempus convallis ipsum. Morbi lobortis elit sit amet rutrum finibus.
Morbi id blandit turpis. Fusce sed ex vel odio tristique rhoncus tempus ac nisi.
Fusce vitae orci ac felis lobortis tempor. Vivamus orci turpis, laoreet vel suscipit quis, pulvinar non nunc. Donec semper laoreet dictum.`,
        },
        {
            name: 'Marsha Maxwell',
            email: 'marsha@example.com',
            date: '2024-11-17',
            message: `Facilisis ornare suspendisse sed nisi lacus sed viverra tellus in.
Mi quis hendrerit dolor magna eget est lorem ipsum dolor.
Amet nulla facilisi morbi tempus. Posuere morbi leo urna molestie at elementum eu facilisis sed.
Nam ac molestie leo.`,
        },
    ];

    const sortedMessages = [...messages].sort(
        (a, b) => new Date(b.date) - new Date(a.date)
    );

    return (
        <div className="contact-container">
            <h2 className="contact-date">All Messages</h2>
            {sortedMessages.map((msg, index) => (
                <div className="contact-message" key={index}>
                    <h3 className="contact-name">{msg.name}</h3>
                    <p className="contact-email"><strong>Email:</strong> {msg.email}</p>
                    <p className="contact-date"><strong>Send on:</strong> {new Date(msg.date).toLocaleDateString()}</p>
                    <p className="contact-text">{msg.message}</p>
                </div>
            ))}
        </div>
    );
};

export default ContactMessages;
