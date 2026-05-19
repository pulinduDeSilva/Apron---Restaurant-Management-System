import { useNavigate } from "react-router"


function LandingPage() {
    const navigate = useNavigate();



    return (
        <>
            <header className="lg:fixed lg:min-h-[50px] flex items-center">
                <h1 className="text-2xl lg:text-4xl font-bold text-headcolor font-head mx-7 my-5">Apron</h1>
            </header>
            <section className="h-screen w-full flex flex-col items-center justify-center">
                <aside className="flex flex-col justify-center items-center h--[600px] lg:min-h-[45%] gap-7 my-4 lg:my-0 mx-3">
                    <h1 className="text-4xl lg:text-6xl font-bold text-center text-headcolor">Crave. Order. Enjoy.</h1>
                    <h2 className="text-lg text-center text-subcolor max-w-[900px] w-full">Browse your favorite local flavors, customize your meal to perfection, and track your feast right to your table or doorstep. Delicious dining, simplified.</h2>

                    <button className="bg-button px-4 py-2 rounded-lg text-lighttext font-bold text-lg transform hover:scale-105 transition-all 1s ease-linear" onClick={() => { navigate("/login") }}>Browse</button>
                </aside>
                <div className="hidden lg:flex items-end justify-center w-[95%] gap-3 mx-5">
                    <div className="bg-[image:var(--bg-img)] bg-cover w-full bg-center h-[450px] lg:max-w-[300px] rounded-xl"></div>
                    <div className="bg-[image:var(--bg-img)] bg-cover w-full bg-center h-[400px] lg:max-w-[300px] rounded-xl"></div>
                    <div className="bg-[image:var(--bg-img)] bg-cover w-full bg-center h-[300px] lg:max-w-[300px] rounded-xl"></div>
                    <div className="bg-[image:var(--bg-img)] bg-cover w-full bg-center h-[400px] lg:max-w-[300px] rounded-xl"></div>
                    <div className="bg-[image:var(--bg-img)] bg-cover w-full bg-center h-[450px] lg:max-w-[300px] rounded-xl"></div>

                </div>

                <div className="lg:hidden flex justify-center w-full gap-3 m-3">
                    <div className="bg-[image:var(--bg-img)] bg-cover w-[44%] bg-center h-[450px] rounded-xl"></div>
                    <div className="flex flex-col justify-between w-[44%] h-[400]">
                        <div className="bg-[image:var(--bg-img)] bg-cover w-full bg-center h-[220px] rounded-xl"></div>
                        <div className="bg-[image:var(--bg-img)] bg-cover w-full bg-center h-[220px] rounded-xl"></div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default LandingPage
