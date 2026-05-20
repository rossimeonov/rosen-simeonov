import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Publications } from './pages/Publications';
import { BlogPost } from './pages/BlogPost';
import { Media } from './pages/Media';
import { Contact } from './pages/Contact';
import { Subscribe } from './pages/Subscribe';
import { Privacy } from './pages/Privacy';
import { Cookies } from './pages/Cookies';
import { NotFound } from './pages/NotFound';
import { ScrollToTop } from './components/ScrollToTop';
import { CookieBanner } from './components/CookieBanner';

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-brand-600 selection:text-white overflow-x-hidden">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/publications" element={<Publications />} />
              <Route path="/publications/:slug" element={<BlogPost />} />
              <Route path="/media" element={<Media />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/subscribe" element={<Subscribe />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/cookies" element={<Cookies />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
          <CookieBanner />
        </div>
      </BrowserRouter>
    </HelmetProvider>
  );
}
