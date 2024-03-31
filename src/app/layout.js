import DirectoryContextProvider from "@context/useDirectoryContext";
import "@styles/globals.css";

export const metadata = {
  title: "Naman Sharma",
  description: "Portfolio displaying skills of Naman Sharma a Full Stack Web developer",
  icons: {
    icon: "/icons/icon.png"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="background-image"></div>
        
        <DirectoryContextProvider>
          <main className="flex w-screen h-screen items-center justify-center">
            {children}
          </main>
        </DirectoryContextProvider>
      </body>
    </html>
  );
}
