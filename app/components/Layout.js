import Sidenav from "./Sidenav";

const Layout = ({children}) => {
    return (
        <main className='bg-white min-h-screen'>
            <div className="flex flex-row">
                <div className="basis-1/6 w-1/6">
                    <Sidenav />
                </div>
                <div className="basis-5/6 grow p-20">
                    {children}
                </div>
            </div>
        </main>
    )
};

export default Layout;
