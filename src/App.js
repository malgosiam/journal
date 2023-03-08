import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import EntryForm from "./components/EntryForm/EntryForm";
import EntrySection from "./components/EntrySection/EntrySection";

function App() {
  return (
    <>
      <Header />
      <Main>
        <EntryForm />
        <EntrySection />
      </Main>
      <Footer />
    </>
  );
}

export default App;
