import React from 'react';
import Container from '../components/common/Container';

export default function About() {
  return (
    <main className="pt-20">
      <Container>
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">About Me</h1>
          
          <div className="mb-12">
            <img
              src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80"
              alt="Profile"
              className="w-full h-64 object-cover rounded-lg mb-8"
            />
            <h2 className="text-2xl font-bold mb-4">Hi, I'm Alex</h2>
            <p className="text-gray-600 mb-6">
              I'm a UI/UX designer with over 8 years of experience creating beautiful and functional digital experiences. 
              My passion lies in transforming complex problems into simple, intuitive solutions that users love.
            </p>
            <p className="text-gray-600">
              I specialize in user interface design, user experience research, and front-end development. 
              My approach combines creativity with data-driven insights to deliver results that exceed expectations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Skills</h3>
              <ul className="space-y-2">
                <li>UI/UX Design</li>
                <li>User Research</li>
                <li>Prototyping</li>
                <li>Front-end Development</li>
                <li>Design Systems</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Tools</h3>
              <ul className="space-y-2">
                <li>Figma</li>
                <li>Adobe XD</li>
                <li>Sketch</li>
                <li>React</li>
                <li>Tailwind CSS</li>
              </ul>
            </div>
          </div>

          <div className="text-center">
            <a
              href="/contact"
              className="inline-block bg-primary text-white px-8 py-3 rounded-lg hover:bg-blue-800 transition-colors"
            >
              Let's Work Together
            </a>
          </div>
        </div>
      </Container>
    </main>
  );
}