import TopNav from "./TopNav";
import Footer from "./Footer";
import { SpeedInsights } from "@vercel/speed-insights/next"

const Layout = ({children}) => {
    return (
        <main className='bg-white min-h-screen'>
            <div>
                <div className="w-full z-10 absolute">
                    <TopNav />
                </div>
                <div className="w-full min-h-screen flex flex-col p-40 justify-center z-0 relative">
                    <div>
                        {children}
                        <SpeedInsights/>
                    </div>
                </div>
                <div className="w-full z-10 bottom-0 left-0 right-0 relative">
                    <Footer />
                </div>
            </div>
        </main>
    )
};

export default Layout;
