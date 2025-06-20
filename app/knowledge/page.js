import Header from "@/components/header/Header";
import ChangeTheme from "@/components/changeTheme/ChangeTheme";
import Knowledge from "@/components/knowledge/Knowledge";

export default function Home() {
  return (
    <div>
      <ChangeTheme />
      <Header />
      <main>
        <Knowledge />
      </main>
    </div>
  );
}