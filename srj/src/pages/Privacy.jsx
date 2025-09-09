import React from "react";
import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";
import {
  FaUserShield,
  FaInfoCircle,
  FaLock,
  FaGlobe,
  FaCogs,
  FaFileSignature,
} from "react-icons/fa";

const sections = [
  {
    title: "1. Introduction",
    icon: <FaInfoCircle className="text-sky-600 mr-2" />,
    content: `At SRJ Global Technologies, we value your privacy and are committed to safeguarding the personal information you share with us. This Privacy Policy explains how we collect, use, and protect your data when you interact with our website, digital platforms, and IT services. By using our services, you agree to the terms outlined in this policy.`,
  },
  {
  title: "2. Information We Collect",
  icon: <FaGlobe className="text-sky-600 mr-2" />,
  content: (
    <>
      <p>We may collect the following types of information to provide you with better services:</p>
      <ul className="list-none pl-0 space-y-2">
        <li><strong>a) Personal Information</strong>: Name, email address, phone number, and postal address when you contact us, request a quote, or use our services. Billing and payment information (if applicable). Login credentials or platform access only when explicitly provided for services such as SEO, hosting, or digital marketing.</li>
        <li><strong>b) Non-Personal Information</strong>: IP address, browser type, operating system, and device details. Analytics data such as pages visited, time spent on site, and user behavior. Cookies and session data to improve your website experience.</li>
        <li><strong>c) Third-Party Integrations</strong>: Data from trusted third-party tools (such as Google Analytics, Meta Ads, or other marketing platforms) to measure performance and improve campaigns.</li>
      </ul>
    </>
  ),
},
  {
    title: "3. How We Use Your Information",
    icon: <FaCogs className="text-sky-600 mr-2" />,
    content: `We use your information to:`,
    list: [
      "Deliver and manage our services such as website development, mobile apps, SEO, and IT solutions.",
      "Communicate with you regarding inquiries, project updates, or support requests.",
      "Process secure payments and invoices.",
      "Personalize your experience and optimize our website’s functionality.",
      "Track and analyze marketing campaign performance.",
      "Send newsletters, updates, or promotional offers (with an option to unsubscribe).",
      "Comply with legal and regulatory obligations.",
    ],
  },
  {
    title: "4. How We Share Your Information",
    icon: <FaFileSignature className="text-sky-600 mr-2" />,
    content: `We do not sell or rent your personal data. However, we may share your information in these cases:`,
    list: [
      "**With Trusted Service Providers**: Payment processors, hosting companies, analytics providers, or SMS/email service partners, strictly for business purposes.",
      "**For Legal Compliance**: If required by law, regulation, or court order.",
      "**Business Transfers**: If SRJ Global Technologies undergoes a merger, acquisition, or restructuring, your information may be transferred to the new entity.",
    ],
  },
  {
    title: "5. Cookies and Tracking Technologies",
    icon: <FaCogs className="text-sky-600 mr-2" />,
    content: `We use cookies, pixels, and similar technologies to:`,
    list: [
      "Enhance user experience.",
      "Track site performance and visitor behavior.",
      "Deliver relevant ads and marketing campaigns.",
    ],
  },
  {
    title: "6. Data Security",
    icon: <FaUserShield className="text-sky-600 mr-2" />,
    content: `We implement industry-standard measures such as SSL encryption, firewalls, and access controls to protect your information. However, no online system can guarantee 100% security. If you believe your data has been compromised, please contact us immediately.`,
  },
  {
    title: "7. Your Rights",
    icon: <FaUserShield className="text-sky-600 mr-2" />,
    content: `You have the right to:`,
    list: [
      "Request access to the personal information we hold about you.",
      "Correct or update inaccurate data.",
      "Opt out of marketing communications at any time.",
      "Request deletion of your personal data, subject to legal and contractual obligations.",
    ],
  },
  {
    title: "8. Data Retention",
    icon: <FaLock className="text-sky-600 mr-2" />,
    content: `We retain personal information only as long as necessary for business, legal, or security purposes. Where possible, we anonymize or aggregate data for analytics.`,
  },
  {
    title: "9. Children’s Privacy",
    icon: <FaInfoCircle className="text-sky-600 mr-2" />,
    content: `Our services are intended for individuals 18 years and older. We do not knowingly collect personal information from minors. If such data is discovered, it will be deleted promptly.`,
  },
  {
    title: "10. Third-Party Links",
    icon: <FaFileSignature className="text-sky-600 mr-2" />,
    content: `Our website may contain links to external websites. We are not responsible for the privacy practices or content of third-party sites. Please review their policies before sharing your information.`,
  },
  {
    title: "11. Updates to This Policy",
    icon: <FaInfoCircle className="text-sky-600 mr-2" />,
    content: `We may update this Privacy Policy from time to time to reflect changes in technology, regulations, or our services. Updates will be posted here with a revised “Last Updated” date. Continued use of our services constitutes acceptance of the updated policy.`,
  },
  {
    title: "12. Contact Us",
    icon: <FaInfoCircle className="text-sky-600 mr-2" />,
    content: `If you have any questions, concerns, or requests regarding this Privacy Policy, please reach out to us:

 SRJ Global Technologies  
📍 Urbtech Trade Centre, Tower C, Adjacent to DPS School, Sector 132, Noida, Uttar Pradesh 201304  
📧 Email: srjglobaltechnology@gmail.com  
📞 Phone: +91 96251 90448, +91 92667 06599`,
  },
];

const Privacy = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8 mt-[50px]"
    >
      {/* Background Blobs */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-sky-300 opacity-30 rounded-full filter blur-3xl -z-10 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-300 opacity-30 rounded-full filter blur-3xl -z-10 animate-pulse delay-200"></div>

      <div className="max-w-4xl mx-auto mt-10">
        <h1 className="text-4xl font-extrabold text-center bg-gradient-to-r from-sky-600 via-indigo-500 to-purple-600 bg-clip-text text-transparent mb-6 tracking-tight">
          Privacy Policy
        </h1>
        <p className="text-center text-gray-600 mb-4 italic">
          <span className="font-semibold text-lg">Disclaimer</span>: In case of
          any discrepancy or difference, the English version of this Privacy
          Policy shall prevail.
        </p>
        <div className="space-y-10 text-gray-700">
          {sections.map((sec, index) => (
            <div key={index}>
              <h2 className="text-xl sm:text-2xl font-semibold flex items-center mb-3">
                {sec.icon} {sec.title}
              </h2>
              <div className="mb-3 whitespace-pre-line">{sec.content}</div>
              {sec.list && (
                <ul className="list-disc pl-6 space-y-1">
                  {sec.list.map((item, idx) => (
                    <li key={idx}>
                      <ReactMarkdown components={{ p: "span" }}>
                        {item}
                      </ReactMarkdown>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
          <p className="text-sm text-gray-500">
            Last Updated: {new Date().toLocaleDateString()}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Privacy;
