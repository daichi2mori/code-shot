import Editor from "./components/editor";
import NavBar from "./components/navbar";

export default function Home() {
  return (
    <main className="grid place-items-center min-h-screen p-24">
      <Editor />
      <NavBar />
    </main>
  );
}
