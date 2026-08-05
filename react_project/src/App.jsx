import Header from './components/Header';
import Footer from './components/Footer';
import Footer from './components/Footer';
import './App.css';

function App() {

return (
  <>
    <Header />

    <main>
      <Article
        date="11/12/20"
        title="On the Street in Brooklyn"
        image="/blog-image-1.jpg"
      />

      <Article
        date="11/12/20"
        title="Vintage in Vogue"
        image="/blog-image-2.jpg"
      />
    </main>

    <Footer />
  </>
);



}

export default App;
