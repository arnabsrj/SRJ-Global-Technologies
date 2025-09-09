import React from "react";
import { motion } from "framer-motion";

const Terms = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={fadeUp}
      className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mt-[50px]"
    >
      <div className="max-w-4xl mx-auto mt-10">
        <h1 className="text-4xl font-extrabold text-center bg-gradient-to-r from-sky-600 via-indigo-500 to-purple-600 bg-clip-text text-transparent mb-10 tracking-tight">
          Terms and Conditions
        </h1>

        <div className="bg-white/90 shadow-xl backdrop-blur rounded-2xl p-6 sm:p-10 border border-gray-200">
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="text-sm text-gray-500 mb-6 italic">
              Last Updated: {new Date().toLocaleDateString()}
            </p>

            <p className="py-4">
              Welcome to SRJ Global Technologies (“we,” “our,” or “us”). These
              Terms and Conditions (“Terms”) outline the rules and regulations
              for the use of our IT services, products, and solutions. By
              engaging with our services, you agree to comply with these Terms.
              If you do not agree, please discontinue using our services.
            </p>

            {[
              {
                title: "1. Introduction",
                content: [
                  "Website Design & Development",
                  "Mobile App Development",
                  "E-commerce Solutions",
                  "Digital Marketing & SEO",
                  "Hosting, Cloud, and Maintenance Services",
                  "IT Consulting & Custom Software Development",
                  "Bulk SMS & Email Marketing Services",
                ],
                description:
                  "SRJ Global Technologies is a leading IT solutions provider offering a wide range of digital and technology services. These Terms ensure transparency, clarity, and mutual understanding between SRJ Global Technologies and our clients.",
              },
              {
                title: "2. Services & Deliverables",
                content: [
                  "Each service engagement will be defined by a separate service agreement, proposal, or contract that outlines the scope, timeline, and deliverables.",
                  "We may engage third-party tools, platforms, or APIs (e.g., hosting providers, plugins, or gateways) to deliver services. Such usage will also be subject to the respective provider’s terms.",
                ],
              },
              {
                title: "3. Client Responsibilities",
                description: "You, as our client, agree to:",
                content: [
                  "Provide all required materials, approvals, and feedback within agreed timelines.",
                  "Ensure that all content, data, or assets shared do not infringe any third-party intellectual property rights.",
                  "Comply with all applicable laws and regulations (e.g., data protection, privacy, anti-spam, and advertising laws).",
                ],
                note: "Delays or non-compliance on your part may affect project timelines or incur additional costs.",
              },
              {
                title: "4. Payment Terms",
                content: [
                  "A non-refundable advance payment is required to initiate any project.",
                  "Payments must follow the milestone plan outlined in the service agreement or invoice.",
                  "Late payments may result in service suspension, penalties, or interest charges.",
                  "All fees are exclusive of applicable taxes unless stated otherwise.",
                  "SRJ Global Technologies reserves the right to revise pricing with prior notice to existing clients.",
                ],
              },
              {
                title: "5. Project Timelines & Delivery",
                content: [
                  "We will adhere to timelines as per the mutually agreed project plan.",
                  "Client-side delays (e.g., late approvals or content delivery) may lead to revised schedules.",
                  "Maintenance and update requests may take 3–7 business days depending on complexity.",
                ],
              },
              {
                title: "6. Revisions & Modifications",
                content: [
                  "Website/app design projects include a predefined number of revisions as per the service contract. Additional revisions will incur extra charges.",
                  "Digital marketing & SEO campaigns require a minimum of 3–6 months for measurable results.",
                  "Any request to alter the original project scope will require a revised quote or change order.",
                ],
              },
              {
                title: "7. Intellectual Property Rights",
                content: [
                  "All deliverables remain the intellectual property of SRJ Global Technologies until full payment is received.",
                  "Upon final payment, ownership of deliverables (e.g., website, app, or software) is transferred to the client, excluding third-party licensed tools, plugins, or services.",
                  "SRJ Global Technologies reserves the right to showcase completed projects in its portfolio for marketing purposes.",
                ],
              },
              {
                title: "8. Third-Party Services",
                content: [
                  "Some services depend on third-party platforms or providers. We are not liable for downtime, performance issues, or data breaches caused by such providers.",
                  "Clients must also comply with the third-party provider’s terms of service.",
                ],
              },
              {
                title: "9. Confidentiality & Data Protection",
                content: [
                  "Both parties agree to maintain confidentiality of all sensitive business and personal information.",
                  "We adhere to applicable data protection laws and will not sell or misuse client data.",
                  "Any data shared will be used strictly for service delivery purposes.",
                ],
              },
              {
                title: "10. Cancellation & Termination",
                content: [
                  "Either party may terminate the agreement with 30 days’ written notice.",
                  "If the client cancels midway, SRJ Global Technologies will retain the advance payment as compensation for time, effort, and resources utilized.",
                  "We reserve the right to terminate services immediately if the client breaches these Terms or engages in unlawful/unethical practices.",
                ],
              },
              {
                title: "11. Limitation of Liability",
                content: [
                  "We are not responsible for indirect, incidental, or consequential damages arising from the use or inability to use our services.",
                  "Our maximum liability under any agreement shall not exceed the total amount paid by the client for that particular service.",
                ],
              },
              {
                title: "12. Force Majeure",
                description:
                  "SRJ Global Technologies will not be held liable for delays or failures in service delivery due to events beyond our control, including but not limited to natural disasters, cyber-attacks, pandemics, government restrictions, or server downtime.",
              },
              {
                title: "13. Governing Law & Jurisdiction",
                content: [
                  "These Terms shall be governed by the laws of India.",
                  "Any disputes shall be subject to the exclusive jurisdiction of the courts located in Noida, Uttar Pradesh, India.",
                ],
              },
              {
                title: "14. Amendments to Terms",
                content: [
                  "We reserve the right to update or modify these Terms at any time.",
                  "Clients will be notified of significant changes, and continued use of our services will imply acceptance of the updated Terms.",
                ],
              },
              {
                title: "15. Contact Us",
                description:
                  "For any questions, concerns, or clarifications regarding these Terms & Conditions, please contact us:",
                company: "SRJ Global Technologies",
                content: [
                  "📍 Address: Urbtech Trade Centre, Tower C, Adjacent to DPS School, Sector 132, Noida, Uttar Pradesh 201304",
                  "📧 Email: srjglobaltechnology@gmail.com",
                  "📞 Phone: +91 96251 90448, +91 92667 06599",
                ],
              },
            ].map((section, idx) => (
              <motion.section
                key={idx}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="mb-10"
              >
                <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                  {section.title}
                </h2>
                {section.description && (
                  <p className="leading-relaxed mb-2">{section.description}</p>
                )}

                {section.company && (
                  <p className="font-bold text-gray-800">{section.company}</p>
                )}

                {Array.isArray(section.content) && (
                  <ul className="list-disc ml-6 space-y-1">
                    {section.content.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                )}

                {section.note && (
                  <p className="leading-relaxed mt-3 text-gray-600">
                    {section.note}
                  </p>
                )}
              </motion.section>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Terms;
