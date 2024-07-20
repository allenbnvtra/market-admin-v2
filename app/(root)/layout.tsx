import Header from '@/components/ui/Header/Header'
import MobileNav from '@/components/ui/MobileNav/MobileNav'
import Sidebar from '@/components/ui/Sidebar/Sidebar'

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full">
        <Header />
        <div className="px-4 py-3">{children}</div>
        <div className="sticky bottom-0">
          <MobileNav />
        </div>
      </div>
    </div>
  )
}
