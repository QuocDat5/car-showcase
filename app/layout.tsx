import { NavBar, Footer } from "@/components";

import "./globals.css";

export const metadata = {
    title: "DP Carfolio",
    description: " Ignite Your Love for Cars with Exquisite Showcase.",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className="relative">
                <NavBar />

                {children}

                <Footer />
            </body>
        </html>
    );
}
