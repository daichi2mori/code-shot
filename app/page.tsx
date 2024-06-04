import Editor from "./components/editor";
import NavBar from "./components/navbar";

export default function Home() {
  return (
    <main className="flex flex-col gap-3 items-center justify-between min-h-dvh p-8 md:p-16">
      <div className="grow grid place-items-center w-full">
        <Editor />
      </div>
      <div className="grow-0">
        <NavBar />
      </div>
    </main>
  );
}
