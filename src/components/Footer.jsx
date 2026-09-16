import { BookOpen } from "lucide-react";

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="logo">
          <span>
            <BookOpen />
          </span>
          BookVerse
        </div>

        <p>Every great journey begins with a page.</p>
      </div>
    </footer>
  );
}

export default Footer;