import Logo from "../Logo/logo";

export function Footer() {
  return (
    <footer className="bg-secondary py-12 mt-24 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 px-8 text-center">
          <div className="flex items-center space-x-2 mb-4 h-16 mx-auto">
            <Logo />
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Learn More</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-gray-300">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Contributing
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Community</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-gray-300">
                  Discord
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Github
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Nostr
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  X
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Column 3</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-gray-300">
                  Link
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Link
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Link
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          © 2024 μgraph. Open-source under MIT and Apache 2.0 License.
          <br />
          Built on Cardano.{" "}
          <a href="#" className="underline">
            Privacy Policy
          </a>{" "}
          |{" "}
          <a href="#" className="underline">
            Terms of Use
          </a>
        </div>
      </div>
    </footer>
  );
}
