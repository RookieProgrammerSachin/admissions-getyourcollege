
import UniversityLayout from "@/components/UniversityLayout";
import { Award, Users, Building, BookOpen, GraduationCap, Globe, Heart, Star } from "lucide-react";

const ScsvmvUniversity = () => {
  const universityData = {
    name: "Sri Chandrasekharendra Saraswathi Viswa Mahavidyalaya",
    location: "Chennai, Tamil Nadu",
    heroImage: "https://images.unsplash.com/photo-1523050854058-8df90110c9d1",
    primaryColor: "text-orange-600", 
    gradientColors: "from-orange-600 to-orange-800",
    established: "1993",
    students: "12,000+",
    about: "Sri Chandrasekharendra Saraswathi Viswa Mahavidyalaya (SCSVMV) is a unique institution that seamlessly blends traditional Indian values with modern educational methodologies. Named after the revered Kanchi Paramacharya, our university is committed to holistic education that nurtures both intellectual and spiritual growth. We offer a comprehensive range of programs across various disciplines while maintaining our commitment to cultural heritage and ethical values. Our approach to education emphasizes character building alongside academic excellence.",
    features: [
      {
        icon: Award,
        title: "UGC Recognition",
        description: "Deemed university with strong academic reputation and recognition"
      },
      {
        icon: Building,
        title: "Heritage Campus",
        description: "Beautiful campus that combines traditional architecture with modern facilities"
      },
      {
        icon: Users,
        title: "Holistic Faculty",
        description: "Experienced faculty committed to value-based education"
      },
      {
        icon: Heart,
        title: "Value Education",
        description: "Emphasis on character building and moral development"
      }
    ],
    courses: [
      { title: "Arts & Humanities", duration: "3 Years", category: "Liberal Arts" },
      { title: "Commerce", duration: "3 Years", category: "Business" },
      { title: "Science", duration: "3 Years", category: "Natural Sciences" },
      { title: "Engineering", duration: "4 Years", category: "Technology" },
      { title: "Management", duration: "2 Years", category: "Business Administration" },
      { title: "Education", duration: "2 Years", category: "Teaching" },
      { title: "Sanskrit Studies", duration: "3 Years", category: "Classical Studies" },
      { title: "Social Work", duration: "2 Years", category: "Social Sciences" }
    ]
  };

  return <UniversityLayout universityData={universityData} />;
};

export default ScsvmvUniversity;
