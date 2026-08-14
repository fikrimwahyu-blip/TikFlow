import re

with open('src/App.tsx', 'r') as f:
    code = f.read()

# Add import
import_statement = "import ResultSkeleton from './components/ResultSkeleton';\n"
if "import ResultSkeleton" not in code:
    code = re.sub(r'(import .*?;?\n)(?!(import|//))', r'\1' + import_statement, code, count=1)

# Modify main container padding logic
# From: className={`flex-1 max-w-5xl mx-auto px-4 sm:px-6 w-full ${downloadResult ? 'pt-8 pb-4' : 'py-12 sm:py-16'}`}
# To: className={`flex-1 max-w-5xl mx-auto px-4 sm:px-6 w-full ${(downloadResult || isLoading) ? 'pt-8 pb-4' : 'py-12 sm:py-16'}`}
code = code.replace(
    "${downloadResult ? 'pt-8 pb-4' : 'py-12 sm:py-16'}",
    "${(downloadResult || isLoading) ? 'pt-8 pb-4' : 'py-12 sm:py-16'}"
)

# Insert the skeleton logic
# From: {downloadResult && (
# To: {isLoading ? (<ResultSkeleton />) : downloadResult ? (
code = code.replace(
    "{downloadResult && (",
    "{isLoading ? (\n          <ResultSkeleton />\n        ) : downloadResult && ("
)

# Also fix the Footer padding at the bottom of the same file?
# {`bg-gray-50 py-8 sm:py-12 border-t border-gray-200 ${downloadResult ? 'mt-4' : 'mt-12 sm:mt-16'}`}
code = code.replace(
    "${downloadResult ? 'mt-4' : 'mt-12 sm:mt-16'}",
    "${(downloadResult || isLoading) ? 'mt-4' : 'mt-12 sm:mt-16'}"
)

with open('src/App.tsx', 'w') as f:
    f.write(code)

