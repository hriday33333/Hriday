export const metadata = {
  title: "Page Not Found | Zakir Hasan Hriday",
  description: "The page you're looking for doesn't exist.",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background text-foreground">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-2">404</h1>
        <p className="text-muted-foreground">Page not found</p>
        <a href="/" className="cosmic-button inline-block mt-6">
          Back to home
        </a>
      </div>
    </div>
  );
}
