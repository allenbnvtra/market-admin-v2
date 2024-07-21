import Header from '@/components/ui/Header/Header'
import MobileNav from '@/components/ui/MobileNav/MobileNav'
import Sidebar from '@/components/ui/Sidebar/Sidebar'

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="flex bg-gray-50">
      <Sidebar />
      <div className="w-full">
        <Header />
        <div className="bg-gray-50 p-3 md:px-7">{children}</div>
        <div className="sticky bottom-0">
          <MobileNav />
        </div>
      </div>
    </div>
  )
}
