import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaRegCommentDots, FaRegFileAlt, FaPhone, FaUser } from "react-icons/fa";
import Image from 'next/image'

export default function Contact() {
    return (
        <section className="flex justify-center px-4 sm:px-6 md:px-8 min-h-screen w-full">
            <div className="bg-white w-full flex flex-col  items-center ">
                <section className="relative w-full h-[40vh] sm:h-[60vh] lg:h-[80vh] rounded-2xl overflow-hidden">
                    <Image
                        src="https://res.cloudinary.com/diatamf9x/image/upload/v1758968767/_DSC4351_kiqlkx.webp"
                        alt="Villa Sathkara"
                        width={600}   // base width for Next.js optimization
                        height={500}  // scale height proportionally
                        className="inset-0 w-full h-full object-cover" // responsive scaling
                    />

                    <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 text-center md:px-24">
                        <h1 className="relative font-[poppins] font-semibold text-[16px] sm:text-[20px] md:text-[24px] top-1/3 md:top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center mb-8 md:mb-16">Contact Us</h1>
                        <p className="relative font-[poppins] font-semibold text-[10px] sm:text-[20px] md:text-[24px] top-1/3 md:top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  text-white text-center md:px-24 px-4">Whether you’re planning your next holiday, have questions about our villa, or need help arranging transfers and activities, we’re always happy to assist. Reach out to us today and let us make your stay in Tangalle effortless and unforgettable.</p>
                    </div>
                </section>

                <section className="py-2  bg-gray-50 mt-[100px]">
                    <div className=" mx-auto grid grid-cols-1 md:grid-cols-2 rounded-2xl overflow-hidden shadow-lg">
                        {/* Left - Villa Info */}
                        <div className="bg-[#1B3A57] text-white p-10 flex flex-col justify-between relative order-2 md:order-1">
                            <div>
                                <h2 className="text-2xl font-bold mb-4">Villa Information</h2>
                                <p className="text-gray-300 mb-8">
                                We’d love to hear from you! Get in touch to start planning your Sri Lankan escape.
                                </p>

                                {/* Address */}
                                <div className="mb-6">
                                    <div className="flex items-center gap-3">
                                        <FaMapMarkerAlt className="text-lg" />
                                        <h3 className="font-semibold">Address</h3>
                                    </div>
                                    <p className="ml-7 text-gray-300">
                                        14/Aa, Migahapara, <br />
                                        Mahavihara Rd, <br />
                                        Ahangama, Sri Lanka
                                    </p>
                                </div>

                                {/* Phone */}
                                <div className="mb-6">
                                    <div className="flex items-center gap-3">
                                        <FaPhoneAlt className="text-lg" />
                                        <h3 className="font-semibold">Phone number</h3>
                                    </div>
                                    <p className="ml-7 text-gray-300">+9471 123 1234</p>
                                    <p className="ml-7 text-gray-400 text-sm">Available 24/7 for reservations and inquiries</p>
                                </div>

                                {/* Email */}
                                <div className="mb-8">
                                    <div className="flex items-center gap-3">
                                        <FaEnvelope className="text-lg" />
                                        <h3 className="font-semibold">Email</h3>
                                    </div>
                                    <p className="ml-7 text-gray-300">villasathkara@gmail.com</p>
                                </div>
                            </div>

                            {/* Social Icons */}
                            <div className="flex gap-4 mt-8">
                                <a href="#" className="bg-white/10 p-3 rounded-full hover:bg-white/20">
                                    <FaFacebookF />
                                </a>
                                <a href="#" className="bg-white/10 p-3 rounded-full hover:bg-white/20">
                                    <FaTwitter />
                                    </a>
                                <a href="#" className="bg-white/10 p-3 rounded-full hover:bg-white/20">
                                    <FaLinkedinIn />
                                </a>
                                <a href="#" className="bg-white/10 p-3 rounded-full hover:bg-white/20">
                                    <FaInstagram />
                                </a>
                            </div>
                        </div>

                        {/* Right - Contact Form */}
                        <div className="bg-white p-10 order-1 md:order-2">
                            <h2 className="text-2xl font-bold text-[#1B3A57] mb-2">Send us a message</h2>
                            <p className="text-gray-600 mb-8">
                                    Have questions about your reservation or our amenities? We’re here to help.
                            </p>

                            <section className="py-12 bg-white  ">
                            <div className="max-w-6xl mx-auto">
                    

                            {/* Form */}
                                <form className="space-y-6 ">
                            {/* Name Fields */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="relative">
                                        <FaUser className="absolute top-3 left-0 text-gray-500" />
                                        <input
                                            type="text"
                                            placeholder="Enter your first name"
                                            className="w-full pl-6 border-b border-gray-300 focus:outline-none focus:border-[#0D3559] py-2"
                                        />
                                     </div>
                                    <div className="relative">
                                    <FaUser className="absolute top-3 left-0 text-gray-500" />
                                        <input
                                            type="text"
                                            placeholder="Enter your last name"
                                            className="w-full pl-6 border-b border-gray-300 focus:outline-none focus:border-[#0D3559] py-2"
                                        />
                                     </div>
                                </div>

                                    {/* Email */}
                                    <div className="relative">
                                        <FaEnvelope className="absolute top-3 left-0 text-gray-500" />
                                        <input
                                        type="email"
                                        placeholder="Enter your email address"
                                        className="w-full pl-6 border-b border-gray-300 focus:outline-none focus:border-[#0D3559] py-2"
                                        />
                                    </div>

                                    {/* Phone */}
                                    <div className="relative">
                                        <FaPhone className="absolute top-3 left-0 text-gray-500" />
                                        <input
                                        type="tel"
                                        placeholder="Enter your phone number"
                                        className="w-full pl-6 border-b border-gray-300 focus:outline-none focus:border-[#0D3559] py-2"
                                        />
                                    </div>

                                    {/* Subject */}
                                    <div className="relative">
                                        <FaRegFileAlt className="absolute top-3 left-0 text-gray-500" />
                                        <input
                                        type="text"
                                        placeholder="Reservation Inquiry"
                                        className="w-full pl-6 border-b border-gray-300 focus:outline-none focus:border-[#0D3559] py-2"
                                        />
                                    </div>

                                    {/* Message */}
                                    <div className="relative ">
                                        <FaRegCommentDots className="absolute top-3 left-0 text-gray-500" />
                                        <textarea
                                        placeholder="Type your message here"
                                        rows={4}
                                        className="w-full pl-6 border border-gray-300 focus:outline-none focus:border-[#0D3559] py-2 rounded-md"
                                        ></textarea>
                                    </div>

                                    {/* Submit */}
                                    <button
                                        type="submit"
                                        className="w-full bg-[#0D3559] text-white py-3 rounded-full font-medium hover:bg-[#09263d] transition"
                                    >
                                        Send Message
                                    </button>
                                </form>
                            </div>
                        </section>
                    </div>
                </div>
            </section>

            <section className=" mt-12 py-12 w-full">
                <div className="flex justify-center h-[50vh] md:h-[90vh] max-w-[1320px] mx-auto">
                <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.0346312418564!2d-73.87072598459423!3d40.7135141793316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25f8ff6a2e8f9%3A0xc80b8f06e177fe62!2sForest%20Hills%2C%20Queens%2C%20NY!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                        width="100%"
                        height="100%"
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="rounded-xl border-0 shadow-md "
                ></iframe>
                </div>
            </section>
                
        </div>
        
    </section>
    )
}