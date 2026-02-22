export const metadata = {
    title: 'SoftSkin - Natural Beauty Education',
    description: 'Natural Beauty Education',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <link
                    href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
                    rel="stylesheet"
                />
                <link
                    rel="stylesheet"
                    href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.0/font/bootstrap-icons.css"
                />
                <link
                    rel="stylesheet"
                    href="https://cdn.jsdelivr.net/npm/@coreui/icons@3.0.0/css/all.min.css"
                />
                <link rel="stylesheet" href="/style.css" />
            </head>
            <body>{children}</body>
        </html>
    )
}
