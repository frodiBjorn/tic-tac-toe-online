import "../styles/global.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin", "cyrillic"] });

const App = ({ Component, pageProps }) => {
  return (
    <div className={inter.className}>
      <Component {...pageProps} />
    </div>
  );
};

export default App;
