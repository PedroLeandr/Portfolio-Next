import Header from "@/components/header/Header";
import ChangeTheme from "@/components/changeTheme/ChangeTheme";
import Me from "@/components/me/Me";

export default function Home() {
  return (
    <div>
      <ChangeTheme />
      <Header />
      <main>
        <Me />
      </main>
    </div>
  );
}