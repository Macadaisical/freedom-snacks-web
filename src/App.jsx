import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />

      {/* Footer Placeholder */}
      <footer style={{ backgroundColor: 'var(--freedom-slate)', color: 'white', padding: '4rem 0', textAlign: 'center' }}>
        <p>© {new Date().getFullYear()} Freedom Snacks. Taste Freedom.</p>
      </footer>
    </>
  );
}

export default App;
