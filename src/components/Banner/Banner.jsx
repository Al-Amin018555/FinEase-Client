const Banner = () => {
    return (
        <div>
            <div className="bg-primary text-primary-content max-h-125">
                <div className="hero-content text-center border mx-auto max-w-7xl">
                    <div className="text-left">
                        {/* <h1 className="text-5xl font-bold">Hello there</h1> */}
                        <p className="py-6 text-4xl font-bold">
                            Take <br />
                            <span className="text-accent">Control</span> of <br />
                            Your <br />
                            Financial <br />
                            Future
                        </p>
                        <p>
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