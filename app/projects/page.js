import Header from "@/components/header/Header";
import ChangeTheme from "@/components/changeTheme/ChangeTheme";
import Projects from "@/components/projects/Projects";

export default function Home() {
  return (
    <div>
      <ChangeTheme />
      <Header />
      <main>
        <Projects />
      </main>
    </div>
  );
}