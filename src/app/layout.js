import DirectoryContextProvider from "@context/DirectoryContextProvider";
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
        <DirectoryContextProvider>
          <div className="background-image"></div>
          <main className="flex w-screen h-screen items-center justify-center">
            {children}
          </main>
        </DirectoryContextProvider>
      </body>
    </html>
  );
}
