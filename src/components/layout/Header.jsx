
export function Header() {
  return (
    <header className="bg-card shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 h-24 flex items-center justify-between">
        {/* Replace <link> with <a> */}
        <a href="/" className="flex items-center justify-center">
          <img src="/logoAr.svg" alt="INDH Logo" className="h-22 w-auto" />
          <h1 className="text-xl font-bold mr-4">المبادرة الوطنية للتنمية البشرية</h1>
        </a>
      </div>
    </header>
  );
}