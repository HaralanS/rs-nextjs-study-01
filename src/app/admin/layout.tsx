import React, { ReactNode } from "react";

export default function AdminLayout({children}: {children: ReactNode}) {
    return(
        <div>
            <header>Header de admin ;D</header>
            {children}
        </div>
    )
}