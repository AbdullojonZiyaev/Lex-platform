// src/pages/HomePage.tsx
export default function HomePage() {
  return (
    <div className="flex items-center justify-center bg-gray-50 text-gray-800">
      <div className="w-full max-w-4xl px-4 space-y-24 py-16">
        <section id="who-we-are" className="text-center space-y-4">
          <h2 className="text-3xl font-bold">Who We Are</h2>
          <p className="text-lg">
            We are a platform dedicated to connecting startups with experienced legal professionals. Our mission is to simplify legal access and empower new businesses to grow with confidence.
          </p>
        </section>

        <section id="our-mission" className="text-center space-y-4">
          <h2 className="text-3xl font-bold">Our Mission</h2>
          <p className="text-lg">
            We aim to make legal support more accessible for startups by matching them with the right lawyers and providing an intuitive Q&A section for real-time guidance.
          </p>
        </section>

        <section id="qa-section" className="text-center space-y-4">
          <h2 className="text-3xl font-bold">How It Works</h2>
          <p className="text-lg">
            Startups can post legal questions, and verified lawyers in our network provide answers. This fosters community learning and builds trust between users and legal experts.
          </p>
        </section>
      </div>
    </div>
  );
}
