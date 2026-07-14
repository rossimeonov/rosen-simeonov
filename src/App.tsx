import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Publications } from './pages/Publications';
import { BlogPost } from './pages/BlogPost';
import Media from './pages/Media';
import { Contact } from './pages/Contact';
import { Subscribe } from './pages/Subscribe';
import { Privacy } from './pages/Privacy';
import { Cookies } from './pages/Cookies';
import { ThankYou } from './pages/ThankYou';
import { NotFound } from './pages/NotFound';
import { ScrollToTop } from './components/ScrollToTop';
import { CookieBanner } from './components/CookieBanner';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-white">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/publications" element={<Publications />} />
            <Route path="/publications/:slug" element={<BlogPost />} />
            <Route path="/media" element={<Media />} />
            <Route path="/contact" element={<Contact />} />
            
            {/* Добавен липсващ маршрут за абониране */}
            <Route path="/subscribe" element={<Subscribe />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/cookies" element={<Cookies />} />
            <Route path="/thank-you" element={<ThankYou />} />

            {/* Хващач на грешки */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
        <CookieBanner />
      </div>
    </Router>
  );
}

export default App;