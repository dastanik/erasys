import React, { useEffect, useState } from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import {
  fetchUserProfiles,
  getUserPictureUrl,
  UserProfilePicture,
} from '@erasys-monorepo/shared-data-fetch';

// Header component
function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-gray-800 text-white shadow">
      <h1 className="text-xl font-semibold">Erasys App</h1>
      <nav>
        <ul className="flex gap-4 list-none">
          <li>
            <Link to="/" className="hover:underline">
              Home
            </Link>
          </li>
          <li>
            <Link to="/documentation" className="hover:underline">
              Documentation
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

const API_URL = '/api/opengrid/profiles/msescortplus';

export function App() {
  const [profiles, setProfiles] = useState<UserProfilePicture[]>([]);

  useEffect(() => {
    fetchUserProfiles(API_URL).then(setProfiles);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-white">
      <Header />
      <main className="max-w-5xl mx-auto p-6">
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <h2 className="text-2xl font-bold mb-4">User Pictures</h2>
                {profiles.length === 0 ? (
                  <p>Loading profiles...</p>
                ) : (
                  <div className="flex flex-wrap gap-4">
                    {profiles.slice(0, 5).map((profile) => (
                      <img
                        key={profile.url_token}
                        src={getUserPictureUrl(profile.url_token)}
                        alt="User"
                        className="w-24 h-24 rounded-full object-cover border border-gray-300 shadow"
                      />
                    ))}
                  </div>
                )}
                <p className="mt-6 text-blue-600">
                  <Link to="/documentation" className="underline">
                    Click here to see documentation
                  </Link>
                </p>
              </div>
            }
          />
          <Route
            path="/documentation"
            element={
              <div className="prose prose-lg dark:prose-invert max-w-4xl mx-auto">
                <h2>Nx Monorepo and Stack</h2>
                <p>
                  The <code>erasys-monorepo</code> contains two apps:
                </p>
                <ul>
                  <li>React Web</li>
                  <li>React Native Mobile (v15.0.1)</li>
                </ul>

                <h3>Stack</h3>
                <ul>
                  <li>✔ Unit Testing: Jest</li>
                  <li>✔ E2E Testing: Playwright</li>
                  <li>✔ Linter: ESLint</li>
                  <li>✔ Formatter: Prettier</li>
                  <li>✔ CI: GitLab</li>
                  <li>✔ Build Tool: Vite</li>
                </ul>

                <h3>Web</h3>
                <ul>
                  <li>✔ TailwindCSS</li>
                  <li>✔ Routing</li>
                  <li>✔ Port: 4200</li>
                </ul>

                <h3>Why Nx?</h3>
                <ul>
                  <li>✔ Familiarity</li>
                  <li>✔ Better docs than Turborepo</li>
                  <li>✔ Performance via caching</li>
                  <li>✔ Strong plugin ecosystem</li>
                </ul>

                <h3>Project Features</h3>
                <ul>
                  <li>Shared module for fetching user pictures</li>
                  <li>Displays images in web/mobile</li>
                  <li>Semantic HTML in Web</li>
                  <li>A separate Header component in Web</li>
                  <li>Responsive layout in Web</li>
                  <li>Loading state for profiles</li>
                  <li>Tailwind Typography plugin support in Web</li>
                  <li>Dark mode compatibility in Web</li>
                </ul>

                <h3>API</h3>
                <ul>
                  <li>
                    GET:{' '}
                    <code>
                      https://www.hunqz.com/api/opengrid/profiles/msescortplus
                    </code>
                  </li>
                  <li>
                    Image URL:{' '}
                    <code>
                      https://www.hunqz.com/img/usr/original/0x0/$
                      {'{url_token}'}
                      .jpg
                    </code>
                  </li>
                </ul>
                <p>CORS handled via Vite proxy.</p>

                <p>
                  <Link to="/" className="text-blue-600 underline">
                    ← Back to Home
                  </Link>
                </p>
              </div>
            }
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;
