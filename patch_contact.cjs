const fs = require('fs');
let code = fs.readFileSync('src/components/PrivacyPolicy.tsx', 'utf8');

const contactCard = `
            {/* Contact Card */}
            <div className="bg-[#195FD7] rounded-xl p-8 text-center mt-8 shadow-sm">
              <h2 className="text-2xl font-bold text-white mb-4">Have questions about our privacy practices?</h2>
              <p className="text-[#90C5FF] text-base mb-6 max-w-lg mx-auto">
                If you have any questions, concerns, or requests regarding this privacy policy, please feel free to reach out to our support team.
              </p>
              <Link to="/" className="inline-flex items-center gap-2 bg-white text-[#195FD7] font-semibold px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors">
                Contact Us
                <ArrowLeft className="w-4 h-4 rotate-180" />
              </Link>
            </div>
`;

code = code.replace("          </div>\n        </div>\n      </main>", contactCard + "\n          </div>\n        </div>\n      </main>");

fs.writeFileSync('src/components/PrivacyPolicy.tsx', code);
