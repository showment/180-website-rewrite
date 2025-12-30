'use client';

import React, {useState} from 'react';

export default function ContactForm() {
    const [result, setResult] = useState("");
    const [loading, setLoading] = useState(false);

    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setLoading(true);
        setResult("Sending...");

        const formData = new FormData(event.currentTarget);
        formData.append("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                setResult("✅ Form Submitted Successfully!");
                event.currentTarget.reset();
            } else {
                setResult("❌ " + data.message);
            }
        } catch (err) {
            setResult("❌ Network error. Please try again later.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">For General Inquiries</h2>

            <form onSubmit={onSubmit} className="space-y-6">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Name <span className="text-gray-400">(required)</span>
                    </label>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-xs text-gray-600 mb-1">First Name</label>
                            <input
                                type="text"
                                name="first_name"
                                required
                                className="w-full px-4 py-3 text-black border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
                            />
                        </div>
                        <div>
                            <label className="block text-xs text-gray-600 mb-1">Last Name</label>
                            <input
                                type="text"
                                name="last_name"
                                required
                                className="w-full px-4 py-3 text-black border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
                            />
                        </div>
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email <span className="text-gray-400">(required)</span>
                    </label>
                    <input
                        type="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 text-black border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Message <span className="text-gray-400">(required)</span>
                    </label>
                    <textarea
                        name="message"
                        required
                        rows={6}
                        className="w-full px-4 py-3 text-black border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none resize-none"
                    ></textarea>
                </div>

                <div className="flex flex-col items-end gap-4">
                    <button
                        type="submit"
                        disabled={loading}
                        className={`px-8 py-3 text-white font-semibold rounded-lg transition-all duration-300 hover:opacity-90 hover:shadow-lg ${
                            loading ? "opacity-70 cursor-not-allowed" : ""
                        }`}
                        style={{backgroundColor: '#8BC34A'}}
                    >
                        {loading ? "Sending..." : "Submit"}
                    </button>

                    {result && (
                        <p className={`text-sm font-medium ${result.includes("✅") ? "text-green-600" : "text-red-600"}`}>
                            {result}
                        </p>
                    )}
                </div>
            </form>
        </div>
    );
}