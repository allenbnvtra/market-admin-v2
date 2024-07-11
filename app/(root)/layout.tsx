import Header from "@/components/ui/Header/Header";
import Sidebar from "@/components/ui/Sidebar/Sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full">
        <Header />
        <div className="px-4 py-3">{children}</div>
      </div>
    </div>
  );
}
