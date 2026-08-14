import re
import os

files = [
    'src/App.tsx',
    'src/components/PrivacyPolicy.tsx',
    'src/components/CookiePolicy.tsx',
    'src/components/TermsOfService.tsx',
    'src/components/ContactUs.tsx'
]

footer_import = "import Footer from './components/Footer';\n"
footer_import_for_components = "import Footer from './Footer';\n"

for filepath in files:
    if not os.path.exists(filepath):
        print(f"Skipping {filepath} (not found)")
        continue
        
    with open(filepath, 'r') as f:
        content = f.read()
        
    # Replace the whole <footer ...> ... </footer> block with <Footer />
    # For App.tsx we might pass className if we need dynamic margin, but default is fine.
    # Actually in App.tsx it was: className={`bg-gray-50 py-8 sm:py-12 border-t border-gray-200 ${downloadResult ? 'mt-4' : 'mt-12 sm:mt-16'}`}
    # Let's match the <footer... to </footer>
    
    # We will use regex DOTALL to replace <footer ... </footer> with <Footer ... />
    
    # First, add the import if it's not there
    if 'import Footer from' not in content:
        if filepath == 'src/App.tsx':
            # Add to last import
            content = re.sub(r'(import .*?;?\n)(?!(import|//))', r'\1' + footer_import, content, count=1)
        else:
            content = re.sub(r'(import .*?;?\n)(?!(import|//))', r'\1' + footer_import_for_components, content, count=1)
            
    # Then replace the footer block.
    # App.tsx has conditional margin. Let's just use `<Footer className={\`bg-gray-50 py-8 sm:py-12 border-t border-gray-200 ${downloadResult ? 'mt-4' : 'mt-12 sm:mt-16'}\`} />`
    
    if filepath == 'src/App.tsx':
        replacement = "{/* Footer */}\n      <Footer className={`bg-gray-50 py-8 sm:py-12 border-t border-gray-200 ${downloadResult ? 'mt-4' : 'mt-12 sm:mt-16'}`} />"
    else:
        replacement = "{/* Footer standard minimal */}\n      <Footer className=\"w-full border-t border-gray-200 mt-auto pt-6 pb-10 bg-white\" />"
        if filepath == 'src/components/ContactUs.tsx':
            replacement = "{/* Footer standard minimal */}\n      <Footer className=\"w-full border-t border-gray-200 mt-auto pt-10 pb-10 bg-white\" />"
            
    # Using regex to find <footer ... </footer>
    # Wait, some components might have the comment `{/* Footer... */}` right before <footer>
    content = re.sub(r'\{/\* Footer.*?\*/\}\s*<footer.*?</footer\s*>', replacement, content, flags=re.DOTALL)
    
    # If the comment wasn't there, just replace <footer>...</footer>
    if '<footer' in content:
        content = re.sub(r'<footer.*?</footer\s*>', replacement, content, flags=re.DOTALL)
        
    with open(filepath, 'w') as f:
        f.write(content)
        print(f"Patched {filepath}")

