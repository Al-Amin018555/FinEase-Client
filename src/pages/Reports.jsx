import { useEffect, useState } from "react";
import {
    PieChart,
    Pie,
    Cell,
    Tooltip,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Legend,
    ResponsiveContainer
} from "recharts";
import useAuth from "../hooks/useAuth";
const Reports = () => {
    const { user } = useAuth()
    const [transactions, setTransactions] = useState([]);
    const [month, setMonth] = useState("");

    // fetch data
    useEffect(() => {
        fetch(`http://localhost:3000/my-transactions/${user.email}`)
            .then(res => res.json())
            .then(data => setTransactions(data));
    }, []);

    // 🔹 Filter by month
    const filteredData = month
        ? transactions.filter(t => t.date.slice(0, 7) === month)
        : transactions;

    // 🔹 Pie Chart Data (category wise)
    const categoryMap = {};

    filteredData.forEach(t => {
        if (!categoryMap[t.category]) {
            categoryMap[t.category] = 0;
        }
        categoryMap[t.category] += Number(t.amount);
    });

    const pieData = Object.keys(categoryMap).map(key => ({
        name: key,
        value: categoryMap[key]
    }));

    // 🔹 Bar Chart Data (monthly totals)

    const monthMap = {};

    transactions.forEach(t => {
        const m = t.date.slice(0, 7);

        if (!monthMap[m]) {
            monthMap[m] = 0;
        }

        monthMap[m] += Number(t.amount);
    });

    const barData = Object.keys(monthMap).map(key => ({
        month: key,
        total: monthMap[key]
    }));

    const COLORS = ["#4f46e5", "#10b981", "#f59e0b", "#ef4444", "#3b82f6"];

    return (

        <div className="max-w-6xl mx-auto py-10 px-4 space-y-10">

            {/* Header */}

            <div className="text-center space-y-2">
                <h1 className="text-4xl font-bold">Financial Reports</h1>
                <p className="text-base-content/70">
                    Visualize your income and expenses
                </p>
            </div>

            {/* Filter */}

            <div className="flex justify-end">
                <input
                    type="month"
                    className="input input-bordered"
                    value={month}
                    onChange={(e) => setMonth(e.target.value)}
                />
            </div>

            {/* Charts */}

            <div className="grid md:grid-cols-2 gap-8">

                {/* Pie Chart */}

                <div className="card bg-base-100 shadow-md p-4">

                    <h2 className="text-lg font-semibold mb-4 text-center">
                        Category Distribution
                    </h2>

                    <ResponsiveContainer width="100%" height={300}>
                        <PieChart>
                            <Pie
                                data={pieData}
                                dataKey="value"
                                nameKey="name"
                                outerRadius={100}
                                label
                            >
                                {pieData.map((entry, index) => (
                                    <Cell
                                        key={index}
                                        fill={COLORS[index % COLORS.length]}
                                    />
                                ))}
                            </Pie>
                            <Tooltip />
                        </PieChart>
                    </ResponsiveContainer>

                </div>

                {/* Bar Chart */}

                <div className="card bg-base-100 shadow-md p-4">

                    <h2 className="text-lg font-semibold mb-4 text-center">
                        Monthly Totals
                    </h2>

                    <ResponsiveContainer width="100%" height={300}>
                        <BarChart data={barData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="month" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="total" fill="#4f46e5" />
                        </BarChart>
                    </ResponsiveContainer>

                </div>

            </div>

        </div>

    );
};

export default Reports;