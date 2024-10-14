import { Feature } from "@/types/feature";

const featuresData: Feature[] = [
  {
    id: 1,
    icon: "/images/icon/icon-03.svg",
    title: "Identity & Access Management",
    description:
      "Seamlessly manage user identities with built-in authentication, authorization, and user management features to enhance security across all systems.",
  },
  {
    id: 2,
    icon: "/images/icon/icon-02.svg",
    title: "Multi-Factor Authentication (MFA)",
    description:
      "Strengthen account security by enabling two-factor authentication, ensuring an extra layer of protection for sensitive data and systems.",
  },
  {
    id: 3,
    icon: "/images/icon/icon-06.svg",
    title: "Single Sign-On (SSO)",
    description:
      "Simplify the login process by allowing users to access multiple applications with a single set of credentials, improving both user experience and security.",
  },
  {
    id: 4,
    icon: "/images/icon/icon-05.svg",
    title: "LDAP & Social Provider Integrations",
    description:
      "Integrate with LDAP (OpenLDAP, Active Directory) and popular social platforms like GitHub, Google, and LinkedIn for flexible authentication options.",
  },
  {
    id: 5,
    icon: "/images/icon/icon-04.svg",
    title: "Algerian Law Compliance (18-07)",
    description:
      "Ensure compliance with the Algerian data residency law by hosting all user data within Algerian borders in partnership with CERIST's cloud infrastructure.",
  },
  {
    id: 6,
    icon: "/images/icon/icon-01.svg",
    title: "User Management App",
    description:
      "Deploy our system in minutes with an intuitive app that enables easy user management, mass user migration via CSV, and streamlined admin control.",
  },
];

export default featuresData;
