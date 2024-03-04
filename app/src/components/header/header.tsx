import * as React from "react"
import "./header.scss"
import { StaticQuery, graphql, Link } from "gatsby"

type nav = {
    alt: string
    class: string
    text: string
    url: string
}
type sitedata = {
    title: string
    tagLine: string
    nav: Array<nav>
}
type StaticQueryData = {
    sitedata: sitedata
}

const Header: React.FC = () => {
    return (
        <StaticQuery 
            query={graphql`
                query {
                    sitedata {
                        title
                        tagLine
                        nav {
                            alt
                            class
                            text
                            url
                        }
                    }
                }
            `}
            render={(data: StaticQueryData): React.ReactElement | null => {
                return (
                    <header>
                        <div className="logo">
                            <Link to="/" >
                                <span>{data.sitedata.title}</span>
                            </Link>
                        </div>
                        <nav>
                            <ul>
                                {data.sitedata.nav.map((item) =>(
                                    <li className="nav-link">
                                        <Link to={item.url}>{item.text}</Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </header>
                )}
            }/>
    )
}

export default Header
