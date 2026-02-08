type FooterLink = {
  label: string;
  href: string;
};

type FooterProps = {
  links: FooterLink[];
};

export default function Footer({
  links,
}: FooterProps) {
  return (
    <footer className="w-full bg-black border-t border-zinc-800 mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6">

          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-white">
              Password Generator
            </h3>
            <p className="text-sm text-gray-400 mt-1">
              "Strong passwords. Zero effort."
            </p>
          </div>

          <nav className="flex flex-wrap justify-center md:justify-end gap-6">
            {links.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  text-sm text-gray-400
                  hover:text-white underline underline-offset-4
                  transition-colors duration-200
                  
                "
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="pt-8 mt-8 border-t border-zinc-800 text-center">
          <p className="text-sm text-gray-500">
            © Sadaf's Password Generator... All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
