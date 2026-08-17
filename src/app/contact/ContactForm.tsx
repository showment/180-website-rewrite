'use client';

import React, {useState} from 'react';

const field = "w-full px-4 py-3 rounded-xl border border-line bg-white outline-none focus:border-ink transition-colors";

export default function ContactForm() {
    const [status, setStatus] = useState<'idle' | 'sending' | 'ok' | 'error'>('idle');
    const [message, setMessage] = useState('');

    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form = event.currentTarget;
        setStatus('sending');
        const formData = new FormData(form);
        formData.append("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "");
        try {
            const res = await fetch("https://api.web3forms.com/submit", {method: "POST", body: formData});
            const data = await res.json();
            if (data.success) { setStatus('ok'); setMessage("Sent. We'll get back to you soon."); form.reset(); }
            else { setStatus('error'); setMessage(data.message || "Something went wrong. Email us directly instead."); }
        } catch {
            setStatus('error'); setMessage("Network error. Email uci@180dc.org instead.");
        }
    };

    return (
        <form onSubmit={onSubmit} className="bg-fog rounded-3xl p-8 md:p-10 space-y-5">
            <div>
                <p className="eyebrow text-brand-deep">Message</p>
                <h2 className="display mt-3 text-3xl">Send a message</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <label className="block text-sm font-semibold">First name<input name="first_name" required className={`${field} mt-2 font-normal`}/></label>
                <label className="block text-sm font-semibold">Last name<input name="last_name" required className={`${field} mt-2 font-normal`}/></label>
            </div>
            <label className="block text-sm font-semibold">Email<input type="email" name="email" required className={`${field} mt-2 font-normal`}/></label>
            <label className="block text-sm font-semibold">I am
                <select name="audience" className={`${field} mt-2 font-normal`} defaultValue="">
                    <option value="" disabled>Choose one</option>
                    <option>An organization looking for a project team</option>
                    <option>A student interested in joining</option>
                    <option>An alum</option>
                    <option>Something else</option>
                </select>
            </label>
            <label className="block text-sm font-semibold">Message<textarea name="message" required rows={6} className={`${field} mt-2 font-normal resize-none`}/></label>
            <div className="flex items-center justify-between gap-4 pt-2">
                <p className={`text-sm font-semibold ${status === 'error' ? 'text-red-600' : 'text-brand-deep'}`} aria-live="polite">{message}</p>
                <button type="submit" disabled={status === 'sending'} className="pill pill-ink disabled:opacity-60">
                    {status === 'sending' ? 'Sending' : 'Send'}
                </button>
            </div>
        </form>
    );
}
