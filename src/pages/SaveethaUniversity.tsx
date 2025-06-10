
import UniversityLayout from "@/components/UniversityLayout";
import { Award, Users, Building, BookOpen, Stethoscope, Gavel, Calculator, Palette } from "lucide-react";

const SaveethaUniversity = () => {
  const universityData = {
    name: "Saveetha Institute of Medical and Technical Sciences",
    location: "Chennai, Tamil Nadu",
    heroImage: "https://images.unsplash.com/photo-1564981797816-1043664bf78d",
    primaryColor: "text-red-600",
    gradientColors: "from-red-600 to-red-800", 
    established: "2005",
    students: "18,000+",
    about: "Saveetha Institute of Medical and Technical Sciences (SIMATS) is a multidisciplinary university offering comprehensive education across medical, dental, engineering, and management disciplines. Our institution is committed to providing quality education that meets international standards while remaining accessible to students from diverse backgrounds. We focus on practical learning, research, and community service, ensuring our graduates are well-equipped to meet the challenges of their chosen professions and contribute meaningfully to society.",
    features: [
      {
        icon: Award,
        title: "NAAC Accredited",
        description: "Accredited by NAAC with excellent academic standards"
      },
      {
        icon: Building,
        title: "Multi-Campus",
        description: "Multiple specialized campuses with modern infrastructure"
      },
      {
        icon: Users,
        title: "Diverse Faculty",
        description: "Multidisciplinary faculty with extensive academic and industry experience"
      },
      {
        icon: Stethoscope,
        title: "Clinical Training",
        description: "Extensive clinical and practical training opportunities"
      }
    ],
    courses: [
      { title: "MBBS", duration: "5.5 Years", category: "Medical" },
      { title: "BDS", duration: "5 Years", category: "Dental" },
      { title: "Engineering", duration: "4 Years", category: "Technology" },
      { title: "Pharmacy", duration: "4 Years", category: "Healthcare" },
      { title: "MBA", duration: "2 Years", category: "Management" },
      { title: "Law", duration: "5 Years", category: "Legal Studies" },
      { title: "Architecture", duration: "5 Years", category: "Design" },
      { title: "Paramedical Sciences", duration: "3 Years", category: "Allied Health" }
    ]
  };

  return <UniversityLayout universityData={universityData} />;
};

export default SaveethaUniversity;
