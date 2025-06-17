import UniversityLayout from "@/components/UniversityLayout";
import { Award, Users, Building, Handshake } from "lucide-react";

const universityData = {
  name: "Saveetha Deemed University",
  location: "Chennai, Tamil Nadu",
  tagline: "Committed to Excellence in Higher Education",
  heroImage:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVs0OjZjdMSOK_D8q6stw6rjfOPdnb02C7Kw&s",
  logoImage:
    "https://upload.wikimedia.org/wikipedia/en/2/21/Saveetha_Institute_of_Medical_And_Technical_Sciences_Logo.png",
  primaryColor: "text-red-600",
  gradientColors: "from-red-600 to-red-800",
  established: "1986",
  students: "15,000+",
  metaDescription: "Saveetha Deemed University (SIMATS) - NAAC A++ accredited institution in Chennai with 15,000+ students across medical, dental, engineering, and law programs. World-class facilities on 245+ acre campus.",
  metaKeywords: "Saveetha University, Saveetha Institute of Medical and Technical Sciences, SIMATS, NAAC A++, medical university, dental college, engineering education, healthcare programs, Chennai university, deemed university",
  about:
    "The Saveetha Medical and Educational Trust was created in 1986 mainly to provide medical relief, to promote Education and encourage Research. The Trust started a Saveetha Dental College and established an attached General Hospital in the year 1988. Subsequently the Trust established a Nursing College, Physiotherapy College, Occupational Therapy College and an Engineering College in order to comply with our commitment and to serve the people, especially those living in Rural Village in and around Chennai and adjoining districts of Tamilnadu. To fulfil the norms of the University Grants Commission, for the purpose of obtaining 'Deemed to be University' status, Saveetha Medical and Educational Trust has sponsored another Trust (viz.) Saveetha Institute of Medical & Technical Sciences (SIMATS) in the year 2001.",
  features: [
    {
      icon: Award,
      title: "Approvals",
      description:
        "UGC deemed, NAAC 'A++', AICTE, INC, Nursing Council, BCI approvals",
      color: "bg-blue-100",
    },
    {
      icon: Building,
      title: "Campus",
      description: "245+ acres, 60+ lakh sq.ft build; 15k students, 5k faculty",
      color: "bg-green-100",
    },
    {
      icon: Users,
      title: "Faculties",
      description: "1,100+ PhD faculty, 1:9 student faculty ratio",
      color: "bg-orange-100",
    },
    {
      icon: Handshake,
      title: "Collaborations",
      description:
        "300 + MOUs, IPR cells, incubators, global industrial partnerships",
      color: "bg-red-100",
    },
  ],
  courses: [
    {
      title: "Medical",
      image:
        "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&q=80",
    },
    {
      title: "Dental Sciences",
      image:
        "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=400&q=80",
    },
    {
      title: "Engineering & Technology",
      image:
        "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&q=80",
    },
    {
      title: "Law",
      image:
        "https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg",
    },
    {
      title: "Physiotherapy",
      image:
        "https://images.pexels.com/photos/20860586/pexels-photo-20860586.jpeg",
    },
    {
      title: "Pharmacy",
      image:
        "https://images.pexels.com/photos/9629685/pexels-photo-9629685.jpeg",
    },
    {
      title: "Nursing",
      image:
        "https://images.unsplash.com/photo-1638202993928-7267aad84c31?w=400&q=80",
    },
    {
      title: "Allied Health Sciences",
      image:
        "https://images.pexels.com/photos/3938022/pexels-photo-3938022.jpeg",
    },
    {
      title: "Management",
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&q=80",
    },
    {
      title: "Architecture",
      image:
        "https://images.unsplash.com/photo-1551038247-3d9af20df552?w=400&q=80",
    },
  ],
};
const SaveethaUniversity = () => {
  return <UniversityLayout universityData={universityData} />;
};

export default SaveethaUniversity;
