import Header from "@/components/header/Header";
import ChangeTheme from "@/components/changeTheme/ChangeTheme";
import Contact from "@/components/contact/Contact";

export default function Home() {
  return (
    <div>
      <ChangeTheme />
      <Header />
      <main>
        <Contact />
      </main>
    </div>
  );
}