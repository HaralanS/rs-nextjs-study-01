import { ReactNode } from "react";

export default function AuthLayout({children}: {children: ReactNode}) {
    return(

        <div>
            <header className="bg-cyan-800 p-4 text-white font-bold">HEADER AUTH  XD</header>
            <div>{children}</div>

        </div>
    )
}