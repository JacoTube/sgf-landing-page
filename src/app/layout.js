import { Work_Sans } from "next/font/google";
import "./globals.css";

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
  display: "swap",
});

export const metadata = {
  title: "Gli Stati Generali del Fare 2026 | Ambasciatori di Calabria",
  description: "20-22 Marzo | Altafiumara Resort & Spa. Un laborario operativo di tre giorni dove si producono proposte reali per lo sviluppo della Calabria.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="it">
      <body className={workSans.className}>
        {children}
      </body>
    </html>
  );
}
