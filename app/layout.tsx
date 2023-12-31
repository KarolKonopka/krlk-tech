import Link from "next/link"
import "./globals.css"
import { Lora } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { ModeToggle } from "@/components/mode-toggle"

const inter = Lora({ subsets: ["latin"] })

export const metadata = {
  title: "KrlK.tech",
  description: "My personal website where I showcase my work and ideas",
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={`antialiased min-h-screen bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-50 ${inter.className}`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="max-w-2xl mx-auto py-10 px-4">
            <header>
              <div className="flex items-center justify-between">
                <Link href="/"><span className="text-sm font-medium">KrlK.tech</span></Link>
                <nav className="ml-auto text-sm font-medium space-x-6 mr-6">
                  <Link href="/projects">Projects</Link>
                  <Link href="/about">About</Link>
                </nav>
                <ModeToggle />
              </div>
            </header>
            <main>{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
