import "./globals.css";

export const metadata = {
  title: "Social Media Dashboard || Frontend Mentor Challenge",
  description: "Best Challenge To Practice Your Grid System With Tailwind Css",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
      <h1 className="font-extrabold text-center text-dark-text-color font-serif">
        Built With Love By Ayanda Boluwatife, Visit the repository and give it a
        star
      </h1>
      <div className="flex justify-center items-center">
        <a
          className="font-extrabold  bg-dark-top-bg-color p-4 pb-2 rounded-md text-dark-text-color font-serif"
          href="https://github.com/ayanda-boluwatife"
        >
          github repo
        </a>
      </div>
    </html>
  );
}
