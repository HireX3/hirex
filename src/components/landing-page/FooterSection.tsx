

export default function FooterSection() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="mt-auto bg-neutral-100 dark:bg-neutral-900 py-12 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between mb-8">
          <div className="mb-8 md:mb-0">
            <span className="font-bold text-2xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">HireX</span>
            <p className="mt-2 text-neutral-600 dark:text-neutral-400 max-w-xs">
              AI-powered hiring platform for the modern recruitment process.
            </p>
            <div className="flex gap-4 mt-4">
              <a href="#" className="text-neutral-400 hover:text-blue-500">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a href="#" className="text-neutral-400 hover:text-blue-500">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
              </a>
              <a href="#" className="text-neutral-400 hover:text-blue-500">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-neutral-600 dark:text-neutral-400">
                <li><a href="#" className="hover:text-blue-500">Features</a></li>
                <li><a href="#" className="hover:text-blue-500">Pricing</a></li>
                <li><a href="#" className="hover:text-blue-500">Integrations</a></li>
                <li><a href="#" className="hover:text-blue-500">Case Studies</a></li>
                <li><a href="#" className="hover:text-blue-500">API</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-neutral-600 dark:text-neutral-400">
                <li><a href="#" className="hover:text-blue-500">About</a></li>
                <li><a href="#" className="hover:text-blue-500">Team</a></li>
                <li><a href="#" className="hover:text-blue-500">Careers</a></li>
                <li><a href="#" className="hover:text-blue-500">Press</a></li>
                <li><a href="#" className="hover:text-blue-500">News</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-neutral-600 dark:text-neutral-400">
                <li><a href="#" className="hover:text-blue-500">Blog</a></li>
                <li><a href="#" className="hover:text-blue-500">Documentation</a></li>
                <li><a href="#" className="hover:text-blue-500">Support</a></li>
                <li><a href="#" className="hover:text-blue-500">Webinars</a></li>
                <li><a href="#" className="hover:text-blue-500">Guides</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-neutral-600 dark:text-neutral-400">
                <li><a href="#" className="hover:text-blue-500">Privacy</a></li>
                <li><a href="#" className="hover:text-blue-500">Terms</a></li>
                <li><a href="#" className="hover:text-blue-500">Security</a></li>
                <li><a href="#" className="hover:text-blue-500">Cookies</a></li>
                <li><a href="#" className="hover:text-blue-500">Compliance</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-neutral-200 dark:border-neutral-700 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-neutral-600 dark:text-neutral-400 text-sm">
            © {currentYear} HireX. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-4 mt-4 sm:mt-0 text-sm text-neutral-500 dark:text-neutral-400">
            <a href="#" className="hover:text-blue-500">Privacy Policy</a>
            <span>•</span>
            <a href="#" className="hover:text-blue-500">Terms of Service</a>
            <span>•</span>
            <a href="#" className="hover:text-blue-500">Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
