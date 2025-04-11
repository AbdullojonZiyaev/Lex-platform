// src/components/Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-gray-100 py-6 mt-16">
      <div className="max-w-7xl mx-auto px-4 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} <strong>LawConnect</strong>. All rights reserved.
      </div>
    </footer>
  );
}
