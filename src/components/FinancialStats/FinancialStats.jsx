import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
const cards = [
    {
        key: "income",
        label: "Total Income",
        badge: "INCOME",
        color: "#22c55e",
        borderColor: "rgba(34,197,94,0.3)",
        bg: "rgba(34,197,94,0.12)",
        iconBg: "rgba(34,197,94,0.15)",
        icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="19" x2="12" y2="5" />
                <polyline points="5 12 12 5 19 12" />
            </svg>
        ),
    },
    {
        key: "expense",
        label: "Total Expense",
        badge: "EXPENSE",
        color: "#ef4444",
        borderColor: "rgba(239,68,68,0.3)",
        bg: "rgba(239,68,68,0.08)",
        iconBg: "rgba(239,68,68,0.15)",
        icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                stroke="#ef4444" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="5" x2="12" y2="19" />
                <polyline points="19 12 12 19 5 12" />
            </svg>
        ),
    },
    {
        key: "balance",
        label: "Balance",
        badge: "NET",
        color: "#f59e0b",
        borderColor: "rgba(245,158,11,0.3)",
        bg: "rgba(245,158,11,0.1)",
        iconBg: "rgba(245,158,11,0.15)",
        icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                stroke="#f59e0b" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="7" width="20" height="14" rx="2" />
                <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
            </svg>
        ),
    },
];

const FinancialStats = () => {
    const { user } = useAuth();
    const [stats, setStats] = useState({ income: 0, expense: 0, balance: 0 });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!user?.email) return;

        fetch(`https://fin-ease-server-seven.vercel.app/my-transactions/${user.email}`)
            .then((res) => res.json())
            .then((data) => {
                const income = data
                    .filter((t) => t.type === "Income")
                    .reduce((sum, t) => sum + parseFloat(t.amount || 0), 0);
                const expense = data
                    .filter((t) => t.type === "Expense")
                    .reduce((sum, t) => sum + parseFloat(t.amount || 0), 0);
                setStats({ income, expense, balance: income - expense });
                setLoading(false);
            });
    }, [user?.email]);

    if (!user) return null;

    return (
        <div className="flex flex-col gap-4">
            {cards.map((card) => (
                <div
                    key={card.key}
                    style={{
                        background: card.bg,
                        border: `1px solid ${card.borderColor}`,
                        borderRadius: "16px",
                        padding: "1.1rem 1.4rem",
                        display: "flex",
                        alignItems: "center",
                        gap: "14px",
                    }}
                >
                    {/* Icon */}
                    <div
                        style={{
                            width: "44px",
                            height: "44px",
                            borderRadius: "12px",
                            background: card.iconBg,
                            border: `1px solid ${card.borderColor}`,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexShrink: 0,
                        }}
                    >
                        {card.icon}
                    </div>

                    {/* Text */}
                    <div style={{ flex: 1 }}>
                        <p style={{
                            color: card.color,
                            fontSize: "11px",
                            margin: "0 0 3px",
                            letterSpacing: "0.06em",
                            fontWeight: 500,
                            textTransform: "uppercase",
                        }}>
                            {card.label}
                        </p>
                        {loading ? (
                            <div style={{
                                height: "28px", width: "120px",
                                background: "rgba(255,255,255,0.1)",
                                borderRadius: "6px",
                                animation: "pulse 1.5s infinite",
                            }} />
                        ) : (
                            <p style={{
                                color: card.color,
                                fontSize: "24px",
                                fontWeight: 700,
                                margin: 0,
                            }}>
                                ${stats[card.key].toFixed(2)}
                            </p>
                        )}
                    </div>

                    {/* Badge */}
                    <div style={{
                        background: `${card.iconBg}`,
                        border: `1px solid ${card.borderColor}`,
                        borderRadius: "6px",
                        padding: "4px 10px",
                    }}>
                        <span style={{
                            color: card.color,
                            fontSize: "11px",
                            fontWeight: 600,
                            letterSpacing: "0.05em",
                        }}>
                            {card.badge}
                        </span>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default FinancialStats;