const Banner = () => {
    return (
        <div>
            <div className="bg-primary text-primary-content max-h-175 border p-12 md:p-24">
                <div className="hero-content text-center mx-auto max-w-7xl">
                    <div className="text-left space-y-4">
                        {/* <h1 className="text-5xl font-bold">Hello there</h1> */}
                        <p className="py-6 text-6xl font-bold">
                            Take <br />
                            <span className="text-accent">Control</span> of <br />
                            Your <br />
                            Financial <br />
                            Future
                        </p>
                        <p className="text-2xl text-primary-content/80">
                            Track income, manage expenses, and hit your savings goals — all in one beautifully designed dashboard built for clarity
                        </p>
                        <button className="btn bg-accent border-none font-bold text-black btn-primary">Start Tracking</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;