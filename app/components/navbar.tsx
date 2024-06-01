import DownloadButton from "./download-button";
import LangSelector from "./lang-selector";

const NavBar = () => {
  return (
    <div className="flex items-center gap-3 bg-muted p-2 rounded-full">
      <LangSelector />
      <DownloadButton />
    </div>
  );
};

export default NavBar;
