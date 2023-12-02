import Sidenav from "./Sidenav";
import Footer from "./Footer";
const Layout = ({children}) => {
    return (
        <main className='bg-white min-h-screen'>
            <div className="flex flex-row overflow-y-auto">
                <div className="basis-1/6 w-1/6">
                    <Sidenav />
                </div>
                <div className="basis-5/6 grow flex flex-col p-20">
                    <div>
                        {children}
                    </div>
                    <div>
                        <Footer />
                    </div>
                </div>
            </div>
        </main>
    )
};

export default Layout;
