

const ContactForm = () => {
    return(
        <div className="max-w-md w-full mx-auto p-6 bg-gray-600 rounded-lg shadow-md">
            <h2 className="text-3xl text-center text-pink-500 font-bold mb-6">Contact Us</h2>
            <form action="">
                <div className="mb-4">
                    <label className="block text-white text-sm font-semibold mb-2" htmlFor="">Your Name</label>
                    <input placeholder="" className="w-full px-3 py-2 border rounded-lg bg-gray-800 focus:outline-none focus:border-blue-500" required type="text"></input>
                </div>
                <div className="mb-4">
                    <label className="block text-white text-sm font-semibold mb-2" htmlFor="">Your Email</label>
                    <input placeholder="" className="w-full px-3 py-2 border rounded-lg bg-gray-800 focus:outline-none focus:border-blue-500" required type="email"></input>
                </div>
                <div className="mb-4">
                    <label className="block text-white text-sm font-semibold mb-2" htmlFor="">Your Message</label>
                    <textarea rows='4' placeholder="Type your messsage here..." className="w-full px-3 py-2 border rounded-lg bg-gray-800 focus:outline-none focus:border-blue-500" required type="text"></textarea>
                </div>
                <div className="flex justify-center">
                    <button type="Submit" className="bg-pink-500 text-white font-semibold px-4 py-2 rounded-lg hover:bg-pink-600 focus:outline-white">Send Message</button>                 
                </div>
            </form>
        </div>
    );
};

export default ContactForm