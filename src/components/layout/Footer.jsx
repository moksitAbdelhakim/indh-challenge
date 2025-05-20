export function Footer() {
    return (
      <footer className="bg-muted py-8 text-center text-muted-foreground">
        <div className="container mx-auto px-4">
          <p>&copy; {new Date().getFullYear()}  المبادرة الوطنية للتنمية البشرية. </p>
          <p className="text-sm mt-2">20 سنة من العمل الميداني لمحاربة الفقر والهشاشة وتعزيز الكرامة والاندماج المجتمعي.</p>
        </div>
      </footer>
    );
  }
  