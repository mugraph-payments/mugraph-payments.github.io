import { Link } from "../Link/Link";
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
                <Link href="/blog">Blog</Link>
              </li>
              <li>
                <Link href="#">Documentation</Link>
              </li>
              <li>
                <Link href="#">Contributing</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Community</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#">Discord</Link>
              </li>
              <li>
                <Link href="#">Github</Link>
              </li>
              <li>
                <Link href="#">Nostr</Link>
              </li>
              <li>
                <Link href="#">X</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Column 3</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#">Link</Link>
              </li>
              <li>
                <Link href="#">Link</Link>
              </li>
              <li>
                <Link href="#">Link</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          © 2024 μgraph. Open-source under MIT and Apache 2.0 License.
          <br />
          Built on Cardano.{" "}
          <Link href="#" className="underline">
            Privacy Policy
          </Link>{" "}
          |{" "}
          <Link href="#" className="underline">
            Terms of Use
          </Link>
        </div>
      </div>
    </footer>
  );
}
