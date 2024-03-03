import * as React from "react"
import { StaticQuery, graphql, PageProps } from "gatsby"

interface Props {
    readonly children: React.ReactNode
}

const Layout: React.FC<Props> = ({children}) => {
    return (
        <StaticQuery
            query={graphql`
                query SiteTitleQuery {
                    site {
                        siteMetadata {
                            title
                            siteUrl
                            tagLine
                            author
                            description
                        }
                    }
                }
            `}
            render={data => (
                <>
                    <span>{data.site.siteMetadata.title}</span>
                    <div className="body">
                        {children}
                    </div>
                </>
                
            )} />
    )
}

export default Layout