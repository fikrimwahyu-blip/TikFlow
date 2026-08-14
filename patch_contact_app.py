import re

with open('src/App.tsx', 'r') as f:
    code = f.read()

# Add route
route_insert = """<Route path="/landing/privacy" element={<PrivacyPolicy />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/cookies" element={<CookiePolicy />} />
        <Route path="/cookie-policy" element={<CookiePolicy />} />
        <Route path="/terms" element={<TermsOfService />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/contact" element={<ContactUs />} />"""
code = re.sub(r'<Route path="/landing/privacy" element={<PrivacyPolicy />} />\s*<Route path="/privacy" element={<PrivacyPolicy />} />\s*<Route path="/cookies" element={<CookiePolicy />} />\s*<Route path="/cookie-policy" element={<CookiePolicy />} />\s*<Route path="/terms" element={<TermsOfService />} />\s*<Route path="/terms-of-service" element={<TermsOfService />} />', route_insert, code)

# Add import
import_insert = """import PrivacyPolicy from './components/PrivacyPolicy';
import CookiePolicy from './components/CookiePolicy';
import TermsOfService from './components/TermsOfService';
import ContactUs from './components/ContactUs';"""
code = code.replace("import PrivacyPolicy from './components/PrivacyPolicy';\nimport CookiePolicy from './components/CookiePolicy';\nimport TermsOfService from './components/TermsOfService';", import_insert)

with open('src/App.tsx', 'w') as f:
    f.write(code)
