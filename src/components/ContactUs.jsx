import React, { useState } from 'react'

function ContactUs() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Form submitted:', formData)
        setFormData({ name: '', email: '', subject: '', message: '' })
    }

    return (
        <div className="h-full w-full overflow-y-auto bg-linear-to-br from-slate-900 via-[#1f1e24] to-slate-900 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Contact Zee Movies</h1>
                    <p className="text-lg text-slate-300">Get in touch with us for any queries or feedback</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                        <div className="bg-slate-700 rounded-lg p-6 hover:bg-slate-600 transition duration-300">
                            <div className="flex items-center mb-3">
                                <svg className="w-6 h-6 text-red-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                                </svg>
                                <h3 className="text-xl font-semibold text-white">Email</h3>
                            </div>
                            <p className="text-slate-300 ml-9">support@zeemovies.com</p>
                        </div>
                        <div className="bg-slate-700 rounded-lg p-6 hover:bg-slate-600 transition duration-300">
                            <div className="flex items-center mb-3">
                                <svg className="w-6 h-6 text-red-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773c.058.3.3.9.738 1.577.466.765 1.144 1.788 2.332 2.976a10.5 10.5 0 001.505-1.089l.133-.133a1 1 0 011.414 0l3.85 3.85a1 1 0 001.415-1.414l-3.85-3.85a1 1 0 000-1.415l-.133-.133a1 1 0 00-.809-.234l-1.565.667c-1.188-1.188-2.21-1.866-2.976-2.332-.677-.438-1.277-.68-1.577-.738l-.773 1.548a1 1 0 01-1.06.54L3.834 6.887a1 1 0 01-.836-.986L2 3z"></path>
                                </svg>
                                <h3 className="text-xl font-semibold text-white">Phone</h3>
                            </div>
                            <p className="text-slate-300 ml-9">+91 1800-ZEEMOVIE</p>
                        </div>

                        <div className="bg-slate-700 rounded-lg p-6 hover:bg-slate-600 transition duration-300">
                            <div className="flex items-center mb-3">
                                <svg className="w-6 h-6 text-red-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                                </svg>
                                <h3 className="text-xl font-semibold text-white">Location</h3>
                            </div>
                            <p className="text-slate-300 ml-9">Bihar, India</p>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-slate-700 rounded-lg p-8">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-slate-200 mb-2">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2 bg-slate-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 placeholder-slate-400"
                                    placeholder="Your Name"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-slate-200 mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2 bg-slate-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 placeholder-slate-400"
                                    placeholder="Your Email"
                                />
                            </div>

                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-slate-200 mb-2">
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2 bg-slate-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 placeholder-slate-400"
                                    placeholder="Subject"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-slate-200 mb-2">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="4"
                                    className="w-full px-4 py-2 bg-slate-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 placeholder-slate-400 resize-none"
                                    placeholder="Your Message"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-1/2 ml-24 bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded-lg transition duration-300 transform hover:scale-105"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactUs
