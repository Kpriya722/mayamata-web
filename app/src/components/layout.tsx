import * as React from "react"
import Header from "./header/header"
import Footer from "./footer/footer"

interface Props {
    readonly children: React.ReactNode
}

const Layout: React.FC<Props> = ({children}) => {
    return (
        <>
            <Header />
            <main className="main-body">
                {children}
            </main>
            <Footer />
        </>
    )
}

export default Layout