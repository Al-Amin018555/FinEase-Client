import { useEffect, useState } from "react";
import { Link } from "react-router";

const SectionIcon = ({ path }) => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
        stroke="#4f46e5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d={path} />
    </svg>
);

const TermsOfService = () => {
    const [termsSections, setTermsSections] = useState([]);
    const [summaryCards, setSummaryCards] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        Promise.all([
            fetch("/terms.json").then((res) => res.json()),
            fetch("/termsSummary.json").then((res) => res.json()),
        ])
            .then(([sections, cards]) => {
                setTermsSections(sections);
                setSummaryCards(cards);
                setLoading(false);
            })
            .catch((err) => {
                console.error("Failed to load terms data:", err);
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
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                        <polyline points="14 2 14 8 20 8" />
                        <line x1="16" y1="13" x2="8" y2="13" />
                        <line x1="16" y1="17" x2="8" y2="17" />
                        <polyline points="10 9 9 9 8 9" />
                    </svg>
                </div>
                <h1 className="text-4xl font-bold text-base-content mb-3">Terms of Service</h1>
                <p className="text-base-content/60 text-lg max-w-xl mx-auto leading-relaxed">
                    Please read these terms carefully before using FinEase. By using our platform, you agree to these terms.
                </p>
                <div className="flex items-center justify-center gap-2 mt-4">
                    <span className="inline-block w-2 h-2 rounded-full bg-success"></span>
                    <span className="text-sm text-base-content/50">Effective date: January 2026</span>
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
                {termsSections.map((section) => (
                    <div key={section.title} className="bg-base-100 rounded-2xl border border-base-300 p-7">
                        <div className="flex items-center gap-3 mb-5">
                            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                                <SectionIcon path={section.icon.path} />
                            </div>
                            <h2 className="text-lg font-bold text-base-content">{section.title}</h2>
                        </div>
                        <ul className="space-y-3">
                            {section.content.map((point, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></span>
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
                    <h3 className="text-xl font-bold mb-2">Have questions about our terms?</h3>
                    <p className="text-primary-content/70 mb-6">
                        We're happy to clarify anything. Reach out to us anytime.
                    </p>
                    <Link to='/contact' href="mailto:support@finease.com"
                        className="btn bg-white text-primary border-none font-bold hover:bg-base-200">
                        Contact Us
                    </Link>
                </div>
            </div>

            {/* Back link */}
            <div className="text-center mt-8">
                <Link to="/" className="text-primary-content btn btn-primary  text-sm font-medium">
                    ← Back to Home
                </Link>
            </div>

        </div>
    );
};

export default TermsOfService;