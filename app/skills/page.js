import Header from "@/components/header/Header";
import ChangeTheme from "@/components/changeTheme/ChangeTheme";
import Skills from "@/components/skills/Skills";

export default function Home() {
  return (
    <div>
      <ChangeTheme />
      <Header />
      <main>
        <Skills />
      </main>
    </div>
  );
}