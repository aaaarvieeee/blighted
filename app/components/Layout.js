import Sidenav from "./Sidenav";

const Layout = ({children}) => {
    return (
        <div className="flex flex-row">
            <div className="basis-1/6 w-1/6">
                <Sidenav />
            </div>
            <div className="basis-5/6 grow p-20">
                {children}
            </div>
        </div>
    )
};

export default Layout;
