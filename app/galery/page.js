import Header from "@/components/header/Header";
import ChangeTheme from "@/components/changeTheme/ChangeTheme";
import Galery from "@/components/galery/Galery";

export default function Home() {
  return (
    <div>
      <ChangeTheme />
      <Header />
      <main>
        <Galery />
      </main>
    </div>
  );
}