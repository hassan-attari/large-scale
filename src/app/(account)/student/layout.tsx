export default function StudentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
    return (
        <>
        <aside className="bg-gray-600 w-80 flex items-center justify-center">

        </aside>
        <main>
            {children}
        </main>
        </>
    )
}