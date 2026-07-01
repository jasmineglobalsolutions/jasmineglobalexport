import Nav from "./Nav";
import Footer from "./Footer";

export default function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <Nav />
      {children}
      <Footer />
    </main>
  );
}
