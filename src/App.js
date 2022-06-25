import "./App.css";
import Header from "./components/Header";
import Contact from "./components/Contact";

// Uncomment untuk memuat daftar kontak
import contacts from "./data/contacts.json";

const App = () => {
  // Masukkan Header dan Contact ke dalam div App
  return (
    // <div className="App">
    //   <Header />

    //   {contacts.map((contact) => {
    //     return <Contact data={contact} />;
    //   })}
    // </div>
    <div className="App">
      <div className="container">
        <Header />
        <main className="content">
          <Contact data={contacts[0]} />
          <Contact data={contacts[1]} />
          <Contact data={contacts[2]} />
          <Contact data={contacts[3]} />
          <Contact data={contacts[4]} />
          <Contact data={contacts[5]} />
        </main>
      </div>
    </div>
  );
};

export default App;
