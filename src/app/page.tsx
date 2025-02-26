import { linksData } from "@/data/links";
import { Header } from "./ui/header";
import { Main } from "./ui/main";
import { NavigationMenu } from "./ui/nav_menu";
import { Footer } from "./ui/footer";

export default function Home() {
  return (
    <body
      className="grid grid-cols-1 justify-items-center bg-zinc-100 relative"
      style={{ background: "var(--color-bg)" }}
    >
      <NavigationMenu data={linksData} />
      <Header />
      <Main />
      <Footer />
    </body>
  );
}
