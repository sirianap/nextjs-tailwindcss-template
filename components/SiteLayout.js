import NavBar from "./NavBar"
import Footer from "./Footer"
import Head from 'next/head'

const SiteLayout = ({ children }) => {
    return (
        <div className="px-4 lg:px-0">
            <Head>
                <title>Company</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <NavBar></NavBar>
            <div className="content">
                {children}
            </div>
            <Footer></Footer>
        </div>
    );
}

export default SiteLayout;