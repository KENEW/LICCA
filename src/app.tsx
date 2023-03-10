import AboutPage from '@/routes/sneakpic'
import ContactPage from '@/routes/wlcheck'
import FaqsPage from '@/routes/faq'
import HomePage from '@/routes/home'
import SupportPage from '@/routes/support'
import RoadmapPage from './routes/roadmap'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { ScrollToTop } from './components/scroll-to-top'

export default function App() {
  /**
   * Vite exposes env variables on the special import.meta.env object.
   * Basename needs to be set for GitHub Pages to function properly.
   *
   * @link https://vitejs.dev/guide/env-and-mode.html
   */
  const basename = import.meta.env.BASE_URL

  return (
    <BrowserRouter basename={basename}>
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="sneakpic" element={<AboutPage />} />
          <Route path="roadmap" element={<RoadmapPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="faq" element={<FaqsPage />} />
          <Route path="wlcheck" element={<SupportPage />} />
        </Routes>
      </ScrollToTop>
    </BrowserRouter>
  )
}
