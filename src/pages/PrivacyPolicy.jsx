import { useEffect, useState } from "react";
import { Link } from "react-router";
import useTitle from "../hooks/useTitle";

const SectionIcon = ({ path }) => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
        stroke="#4f46e5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d={path} />
    </svg>
);

const PrivacyPolicy = () => {
    const [privacySections, setPrivacySections] = useState([]);
    const [summaryCards, setSummaryCards] = useState([]);
    const [loading, setLoading] = useState(true);
    useTitle("Privacy Policy | FinEase")
    useEffect(() => {
        Promise.all([
            fetch("/privacy.json").then((res) => res.json()),
            fetch("/summaryCards.json").then((res) => res.json()),
        ])
            .then(([sections, cards]) => {
                setPrivacySections(sections);
                setSummaryCards(cards);
                setLoading(false);
            })
            .catch((err) => {
                console.error("Failed to load privacy data:", err);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-base-200">
                <span className="loading loading-spinner loading-lg text-primary"></span>
            </div>
        );
    }

    return (
        <div className="bg-base-200 min-h-screen py-16 px-4">

            {/* Hero */}
            <div className="max-w-4xl mx-auto mb-12 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-6">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none"
                        stroke="#4f46e5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                </div>
                <h1 className="text-4xl font-bold text-base-content mb-3">Privacy Policy</h1>
                <p className="text-base-content/60 text-lg max-w-xl mx-auto leading-relaxed">
                    We take your privacy seriously. Here's exactly how FinEase handles your data.
                </p>
                <div className="flex items-center justify-center gap-2 mt-4">
                    <span className="inline-block w-2 h-2 rounded-full bg-success"></span>
                    <span className="text-sm text-base-content/50">Last updated: January 2026</span>
                </div>
            </div>

            {/* Summary Cards */}
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
                {summaryCards.map((card) => (
                    <div key={card.label} className={`${card.color} border rounded-2xl p-5 text-center`}>
                        <p className="font-bold text-lg">{card.label}</p>
                        <p className="text-sm opacity-75 mt-1">{card.sub}</p>
                    </div>
                ))}
            </div>

            {/* Sections */}
            <div className="max-w-4xl mx-auto space-y-5">
                {privacySections.map((section) => (
                    <div key={section.title} className="bg-base-100 rounded-2xl border border-base-300 p-7">
                        <div className="flex items-center gap-3 mb-5">
                            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                                <SectionIcon path={section.icon.path} />
                            </div>
                            <h2 className="text-lg font-bold text-base-content">{section.title}</h2>
                        </div>
                        <ul className="space-y-3">
                            {section.content.map((point, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary shrink-0"></span>
                                    <p className="text-base-content/70 leading-relaxed">{point}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            {/* Contact */}
            <div className="max-w-4xl mx-auto mt-10">
                <div className="bg-primary rounded-2xl p-8 text-center text-primary-content">
                    <h3 className="text-xl font-bold mb-2">Have questions about your privacy?</h3>
                    <p className="text-primary-content/70 mb-6">
                        We're happy to help. Reach out to us anytime.
                    </p>
                    <Link to='/contact' href="mailto:support@finease.com"
                        className="btn bg-white text-primary border-none font-bold hover:bg-base-200">
                        Contact Us
                    </Link>
                </div>
            </div>

            {/* Back link */}
            <div className="text-center mt-8">
                <Link to="/" className="text-primary-content btn btn-primary text-sm font-medium">
                    ← Back to Home
                </Link>
            </div>

        </div>
    );
};

export default PrivacyPolicy;