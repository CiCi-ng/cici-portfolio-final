import './globals.css'

export const metadata = {
  title: 'CiCi Nguyen | Portfolio',
  description: 'Lifecycle & Growth Marketer',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* Nơi này chứa nội dung của các trang (page.js) */}
        {children}
      </body>
    </html>
  )
}