import re

def update_links(filepath):
    with open(filepath, 'r') as f:
        code = f.read()
    
    code = code.replace(
        '<Link to="/privacy#contact" className="text-sm text-gray-500 hover:text-[#195FD7] mx-2 transition-colors">Contact</Link>',
        '<Link to="/cookies" className="text-sm text-gray-500 hover:text-[#195FD7] mx-2 transition-colors">Cookie Policy</Link>\n            <Link to="/contact" className="text-sm text-gray-500 hover:text-[#195FD7] mx-2 transition-colors">Contact</Link>'
    )
    with open(filepath, 'w') as f:
        f.write(code)

update_links('src/components/PrivacyPolicy.tsx')

with open('src/App.tsx', 'r') as f:
    app_code = f.read()
    
app_code = app_code.replace(
    '<Link to="/privacy#cookie" className="text-gray-600 hover:text-gray-900 text-[15px] transition-colors">{t(\'cookiePolicy\', \'Cookie Policy\')}</Link>',
    '<Link to="/cookies" className="text-gray-600 hover:text-gray-900 text-[15px] transition-colors">{t(\'cookiePolicy\', \'Cookie Policy\')}</Link>'
)
app_code = app_code.replace(
    '<Link to="/privacy#contact" className="text-gray-600 hover:text-gray-900 text-[15px] transition-colors">{t(\'contact\', \'Contact\')}</Link>',
    '<Link to="/contact" className="text-gray-600 hover:text-gray-900 text-[15px] transition-colors">{t(\'contact\', \'Contact\')}</Link>'
)

# Add route for /cookies
route_insert = """<Route path="/landing/privacy" element={<PrivacyPolicy />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/cookies" element={<CookiePolicy />} />
        <Route path="/cookie-policy" element={<CookiePolicy />} />"""
app_code = re.sub(r'<Route path="/landing/privacy" element={<PrivacyPolicy />} />\s*<Route path="/privacy" element={<PrivacyPolicy />} />', route_insert, app_code)

# Add import for CookiePolicy
import_insert = """import PrivacyPolicy from './components/PrivacyPolicy';
import CookiePolicy from './components/CookiePolicy';"""
app_code = app_code.replace("import PrivacyPolicy from './components/PrivacyPolicy';", import_insert)

with open('src/App.tsx', 'w') as f:
    f.write(app_code)

