import '../styles/globals.css';

export const metadata = {
  title: "Manson's frontend blog",
  description: "Here is Manson's frontend blog",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
