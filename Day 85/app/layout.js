import './style.css';

export const metadata = {
  title: 'Todo App',
  description: 'Created by Next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
