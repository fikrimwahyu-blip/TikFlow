import re

with open('src/components/ContactUs.tsx', 'r') as f:
    code = f.read()

# 1. Add Logo function
logo_func = """function Logo({ className = "w-6 h-6 sm:w-7 sm:h-7" }: { className?: string }) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
      <defs>
        <linearGradient id="logo-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#195FD7" />
        </linearGradient>
      </defs>
      <rect width="100" height="100" rx="24" fill="url(#logo-grad)" />
      <path d="M56 24 L32 54 H48 L40 76 L68 44 H52 Z" fill="#ffffff" stroke="#ffffff" strokeWidth="6" strokeLinejoin="round" strokeLinecap="round"/>
    </svg>
  );
}

"""

code = code.replace("export default function ContactUs() {", logo_func + "export default function ContactUs() {")

# 2. Replace the old black logo with <Logo />
old_logo = """<div className="relative flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 bg-black rounded-lg sm:rounded-xl shadow-sm overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-black"></div>
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white relative z-10 transform group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
              </svg>
            </div>"""

new_logo = """<Logo />"""
code = code.replace(old_logo, new_logo)

# 3. Replace the email display
old_email = """<p className="text-[#195FD7] font-medium mt-0.5">prstyadev@gmail.com</p>"""
new_email = """<a href="mailto:prstyadev@gmail.com" className="text-gray-900 font-medium mt-0.5 inline-block">prstyadev@gmail.com</a>"""
code = code.replace(old_email, new_email)

with open('src/components/ContactUs.tsx', 'w') as f:
    f.write(code)
