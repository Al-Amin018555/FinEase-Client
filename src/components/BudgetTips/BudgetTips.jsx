import { use } from "react";

const budgetPromise = fetch("/budgetingTips.json").then(res => res.json());

const BudgetTips = () => {
    const tips = use(budgetPromise);
    return (
        <div className="max-w-7xl mx-auto my-8 md:my-12">

            <div className="text-accent-content space-y-3">
                <h4 className="text-accent font-bold">SMART STRATEGIES</h4>
                <h2 className="text-5xl font-bold">Budgeting Tips</h2>
                <p>
                    Simple, proven rules to keep your finances healthy and growing every single month.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-12">
                {
                    tips.map(tip => (
                        <div
                            key={tip.id}
                            className="card bg-base-100 shadow-sm transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_var(--color-accent)] text-black"
                        >
                            <div className="card-body items-start space-y-3">

                                <img src={tip.img} alt={tip.title} className="w-10 h-10" />

                                <h2 className="card-title">
                                    {tip.title}
                                </h2>

                                <p className="text-accent-content/70">
                                    {tip.description}
                                </p>

                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default BudgetTips;