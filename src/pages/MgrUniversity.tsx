
import UniversityLayout from "@/components/UniversityLayout";
import { Award, Users, Building, BookOpen, Microscope, Heart, Brain, Pill } from "lucide-react";

const MgrUniversity = () => {
  const universityData = {
    name: "Dr. M.G.R. Educational and Research Institute",
    location: "Chennai, Tamil Nadu",
    heroImage: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f",
    primaryColor: "text-blue-600",
    gradientColors: "from-blue-600 to-blue-800",
    established: "1988",
    students: "25,000+",
    about: "Dr. M.G.R. Educational and Research Institute stands as a beacon of excellence in medical and health sciences education. With over three decades of commitment to academic excellence, we have been at the forefront of medical education and research. Our institution is renowned for producing competent healthcare professionals who serve society with dedication and expertise. We combine traditional values with modern educational methodologies to create a learning environment that nurtures both professional competence and ethical values.",
    features: [
      {
        icon: Award,
        title: "UGC Recognition",
        description: "Fully recognized by UGC and accredited by NAAC with 'A' grade"
      },
      {
        icon: Building,
        title: "Modern Campus",
        description: "State-of-the-art facilities with advanced medical equipment"
      },
      {
        icon: Users,
        title: "Expert Faculty",
        description: "Highly qualified faculty with extensive clinical experience"
      },
      {
        icon: Heart,
        title: "Hospital Network",
        description: "Associated with leading hospitals for practical training"
      }
    ],
    courses: [
      { title: "MBBS", duration: "5.5 Years", category: "Medical" },
      { title: "BDS", duration: "5 Years", category: "Dental" },
      { title: "B.Pharm", duration: "4 Years", category: "Pharmacy" },
      { title: "Nursing", duration: "4 Years", category: "Healthcare" },
      { title: "Physiotherapy", duration: "4.5 Years", category: "Allied Health" },
      { title: "Medical Lab Technology", duration: "3 Years", category: "Diagnostic" },
      { title: "Hospital Management", duration: "2 Years", category: "Administration" },
      { title: "Public Health", duration: "2 Years", category: "Community Health" }
    ]
  };

  return <UniversityLayout universityData={universityData} />;
};

export default MgrUniversity;
