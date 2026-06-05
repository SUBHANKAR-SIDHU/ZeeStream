import React from 'react'

function About() {
    return (
        <section className="min-h-screen py-12 px-6 bg-[#1f1e24] overflow-y-auto text-gray-100" aria-label="About Zmovie">
            <div className="max-w-6xl mx-auto">
                <header className="flex items-center gap-6 mb-8">
                    <div className="w-20 h-20 rounded-xl bg-gray-900 flex items-center justify-center text-white font-extrabold text-2xl shadow-md">ZEE</div>
                    <div>
                        <h1 className="text-3xl font-semibold m-0">About Zee<span className='font-semibold text-red-400'>Stream</span></h1>
                        <p className="text-gray-300 mt-1">Discover movies, curated lists and personalized recommendations.</p>
                    </div>
                </header>

                <div className="grid lg:grid-cols-[1fr_360px] gap-6 items-start">
                    <div>
                        <div className="bg-gray-800/40  p-6 rounded-xl shadow-lg border border-gray-700">
                            <h2 className="text-xl font-semibold">Our mission</h2>
                            <p className="text-gray-300 mt-3 leading-relaxed">
                                zeeStream helps film lovers discover new movies, track favorites, and get recommendations based on taste. We combine curated editorial
                                content with community-driven lists and advanced filtering to help you find the perfect movie for every mood.
                            </p>

                            <div className="grid grid-cols-2 gap-3 mt-4">
                                <div className="bg-gray-900/50 p-3 rounded-md border border-gray-700">
                                    <strong>Curated Lists</strong>
                                    <div className="text-gray-400 mt-2 text-sm">Hand-picked collections for genres, eras and themes.</div>
                                </div>
                                <div className="bg-gray-900/50 p-3 rounded-md border border-gray-700">
                                    <strong>Personalized Picks</strong>
                                    <div className="text-gray-400 mt-2 text-sm">Recommendations tailored to your ratings and watch history.</div>
                                </div>
                                <div className="bg-gray-900/50 p-3 rounded-md border border-gray-700">
                                    <strong>Detailed Info</strong>
                                    <div className="text-gray-400 mt-2 text-sm">Cast, crew, reviews, trailers and runtime at a glance.</div>
                                </div>
                                <div className="bg-gray-900/50 p-3 rounded-md border border-gray-700">
                                    <strong>Watchlist</strong>
                                    <div className="text-gray-400 mt-2 text-sm">Save movies to watch later and sync across devices.</div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-800/40  p-5 rounded-xl shadow mt-4 border border-gray-700">
                            <h3 className="text-lg font-semibold">How it works</h3>
                            <ol className="mt-3 list-decimal list-inside text-gray-300 space-y-2">
                                <li>Browse by genre, mood or curated lists.</li>
                                <li>Rate movies to improve recommendations.</li>
                                <li>Create and share your personalized lists.</li>
                            </ol>
                            <p className="text-gray-400 mt-3 text-sm">We respect your privacy — your data is used only to improve your experience.</p>
                        </div>
                    </div>

                    <aside>
                        <div className=" from-gray-900/60 to-gray-800/30 p-4 rounded-xl shadow-lg border border-gray-700">
                            <img
                                src="https://images.unsplash.com/photo-1517602302552-471fe67acf66?w=800&q=60&auto=format&fit=crop"
                                alt="Cinema"
                                className="w-full h-48 object-cover rounded-md"
                            />
                            <h4 className="mt-3 mb-1 text-lg font-semibold">Join the community</h4>
                            <p className="text-gray-300">Sign up to receive recommendations and access members-only features.</p>
                            <button className="mt-4 w-full py-2 rounded-md bg-indigo-600 hover:bg-indigo-500 text-white font-medium">Get Started</button>
                        </div>
                    </aside>
                </div>
            </div>
        </section>
    )
}

export default About
