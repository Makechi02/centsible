import '@/styles/globals.css';

export const metadata = {
    title: 'Centsible',
    description: 'An expense tracking platform',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <main>{children}</main>
            </body>
        </html>
    )
}
