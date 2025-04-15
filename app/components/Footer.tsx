export default function Footer() {
  return (
    <footer className="bg-primary text-quaternary py-8">
      <div className="container mx-auto px-6 text-center">
        <p>&copy; {new Date().getFullYear()} Muhammed Salih. All rights reserved.</p>
        <div className="mt-4">
          <a
            href="https://www.instagram.com/saaaly._?igsh=YTlvOW00NmE1dHNh&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
            className="text-quaternary hover:text-tertiary mr-4"
          >
            Instagram
          </a>
          <a
            href="https://youtube.com/@mosaaaly?si=40wGMBhi7cnGH_LG"
            target="_blank"
            rel="noopener noreferrer"
            className="text-quaternary hover:text-tertiary mr-4"
          >
            YouTube
          </a>
          <a
            href="https://www.linkedin.com/in/muhammed-salih-21a0b5345?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-quaternary hover:text-tertiary"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  )
}

