import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto flex items-center justify-between px-4 py-5">
          <h1 className="text-2xl font-bold text-indigo-600">Jot</h1>
          <nav>
            <a
              href="#features"
              className="mx-3 text-gray-700 transition hover:text-indigo-600"
            >
              Features
            </a>
            <a
              href="#about"
              className="mx-3 text-gray-700 transition hover:text-indigo-600"
            >
              About
            </a>
            <a
              href="#contact"
              className="mx-3 text-gray-700 transition hover:text-indigo-600"
            >
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main className="container mx-auto max-w-screen-lg px-4 py-16 text-center">
        <section className="mb-16">
          <h2 className="mb-4 text-4xl font-bold text-gray-800">
            Welcome to Jot
          </h2>
          <p className="text-lg text-gray-600">
            A place where thoughts meet code. Jot helps you document your daily
            life and development journey with simplicity and elegance.
          </p>
          <Button>Getting Started</Button>
        </section>

        <section id="features" className="mb-16">
          <h3 className="mb-4 text-2xl font-semibold text-gray-800">
            Features
          </h3>
          <ul className="space-y-4 text-gray-600">
            <li>✏️ Write and organize your daily journals effortlessly.</li>
            <li>
              📂 Tag and categorize your developer logs for easy reference.
            </li>
            <li>🌟 Minimalist and distraction-free interface.</li>
          </ul>
        </section>

        <section id="about" className="mb-16">
          <h3 className="mb-4 text-2xl font-semibold text-gray-800">
            About Jot
          </h3>
          <p className="text-gray-600">
            {
              "Jot is designed to help individuals combine personal journaling with           professional developer logs. Whether you're reflecting on your day or tracking a bug fix, Jot is here for you."
            }
          </p>
        </section>

        <section id="contact" className="mb-16">
          <h3 className="mb-4 text-2xl font-semibold text-gray-800">Contact</h3>
          <p className="text-gray-600">
            Have questions or feedback? Reach out to us at{" "}
            <a
              href="mailto:support@jot.dev"
              className="text-indigo-600 hover:underline"
            >
              support@jot.dev
            </a>
            .
          </p>
        </section>
      </main>

      <footer className="bg-gray-100 py-4">
        <div className="container mx-auto text-center text-gray-600">
          © {new Date().getFullYear()} Jot. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
