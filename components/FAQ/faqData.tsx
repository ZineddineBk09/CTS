import { FAQ } from "@/types/faq";

const faqData: FAQ[] = [
  {
    id: 1,
    quest: "What is Identity and Access Management (IAM), and how does your system help?",
    ans: "Our IAM solution provides centralized user management, Single Sign-On (SSO), Multi-Factor Authentication (MFA), and Identity Federation. It externalizes authentication, reducing risk and improving security for your organization by managing identities in a scalable way.",
  },
  {
    id: 2,
    quest: "How does your system comply with the Algerian data localization law (Law 18-07)?",
    ans: "We partner with CERIST, a certified Algerian cloud provider, to ensure that all sensitive user data is hosted within Algerian borders, fully compliant with Law 18-07, which mandates the storage of users' personal data within Algeria.",
  },
  {
    id: 3,
    quest: "Can your system handle large-scale user data migration?",
    ans: "Yes, our system is designed to easily manage large-scale data migrations. For example, we facilitated the insertion of over 400K users for the Algerian Ministry of Higher Education. We provide tools like mass user insertion via CSV files to simplify migration processes.",
  },
  {
    id: 4,
    quest: "What integrations are available with your IAM solution?",
    ans: "Our system integrates seamlessly with LDAP (OpenLDAP, Active Directory), social login providers (Google, LinkedIn, GitHub), and other identity providers through standards like SAML and OpenID Connect, enabling flexible authentication options.",
  },
  {
    id: 5,
    quest: "What kind of support do you provide for deployment?",
    ans: "We provide a user-friendly management app that allows you to deploy and manage users in minutes. The app comes with tools to handle user roles, permissions, and system settings, ensuring a fast and simple setup process.",
  },
  {
    id: 6,
    quest: "Is your system secure for handling sensitive data?",
    ans: "Security is a top priority. Our system includes multi-layered security features such as Multi-Factor Authentication (MFA), role-based access control, and compliance with international security standards. Additionally, our solution was awarded for excellence in Information Systems Security.",
  },
];


export default faqData;
