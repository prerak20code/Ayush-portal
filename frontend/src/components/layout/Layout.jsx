import { Header, Footer } from '..';
import { Outlet } from 'react-router-dom';

export default function Layout() {
    return (
        <div>
            <div className="fixed top-0 z-10 w-full">
                <Header />
            </div>

            <div className="mt-[110px]">
                <Outlet />
                <Footer />
            </div>
        </div>
    );
}
