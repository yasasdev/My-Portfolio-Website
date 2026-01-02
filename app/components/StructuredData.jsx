export default function StructuredData() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Yasas Lekamge",
    "jobTitle": "Associate Software Engineer",
    "worksFor": {
      "@type": "Organization",
      "name": "X4 DigitalLabs"
    },
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "NIBM - National Institute of Business Management",
      "description": "BSc (Hons) Software Engineering"
    },
    "url": "https://my-portfolio-website-two-wine.vercel.app/",
    "email": "yasaslekamge@gmail.com",
    "sameAs": [
      "https://github.com/yasasdev",
      "https://linkedin.com/in/yasasdev"
    ],
    "knowsAbout": [
      "JavaScript",
      "React.js",
      "Next.js",
      "PHP",
      "Full-Stack Development",
      "Web Development",
      "Mobile Development"
    ],
    "image": "https://my-portfolio-website-two-wine.vercel.app/yasas-profile.jpg"
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Yasas Lekamge Portfolio",
    "url": "https://my-portfolio-website-two-wine.vercel.app/",
    "description": "Portfolio website of Yasas Lekamge, Full-Stack Software Engineer",
    "author": {
      "@type": "Person",
      "name": "Yasas Lekamge"
    }
  };

  const professionalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Yasas Lekamge - Software Development Services",
    "description": "Professional web and mobile application development services",
    "provider": {
      "@type": "Person",
      "name": "Yasas Lekamge"
    },
    "areaServed": "Worldwide",
    "serviceType": [
      "Web Application Development",
      "Mobile Application Development",
      "Full-Stack Development",
      "Frontend Development",
      "Backend Development"
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchema) }}
      />
    </>
  );
}
