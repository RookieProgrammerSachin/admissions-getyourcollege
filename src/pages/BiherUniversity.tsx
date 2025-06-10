
import UniversityLayout from "@/components/UniversityLayout";
import { Award, Users, Building, BookOpen, Microscope, Dna, Leaf, TestTube } from "lucide-react";

const BiherUniversity = () => {
  const universityData = {
    name: "Bharath Institute of Higher Education and Research",
    location: "Chennai, Tamil Nadu", 
    heroImage: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56",
    primaryColor: "text-purple-600",
    gradientColors: "from-purple-600 to-purple-800",
    established: "1984",
    students: "20,000+",
    about: "Bharath Institute of Higher Education and Research (BIHER) is a premier institution dedicated to excellence in biotechnology, research, and multidisciplinary education. With a strong focus on innovation and research, we have established ourselves as a leading center for biotechnology education in India. Our commitment to fostering scientific temper and research culture has produced numerous scientists, researchers, and professionals who are making significant contributions to society and industry worldwide.",
    features: [
      {
        icon: Award,
        title: "UGC Recognition",
        description: "Deemed university status with excellent academic credentials"
      },
      {
        icon: Building,
        title: "Research Labs",
        description: "Advanced research laboratories for biotechnology and life sciences"
      },
      {
        icon: Users,
        title: "Research Faculty",
        description: "Internationally recognized faculty with extensive research experience"
      },
      {
        icon: Microscope,
        title: "Innovation Hub",
        description: "State-of-the-art facilities for cutting-edge research and development"
      }
    ],
    courses: [
      { title: "Biotechnology", duration: "4 Years", category: "Life Sciences" },
      { title: "Bioinformatics", duration: "4 Years", category: "Computational Biology" },
      { title: "Genetic Engineering", duration: "4 Years", category: "Biotechnology" },
      { title: "Microbiology", duration: "3 Years", category: "Life Sciences" },
      { title: "Biochemistry", duration: "3 Years", category: "Life Sciences" },
      { title: "Environmental Biotechnology", duration: "2 Years", category: "Environmental" },
      { title: "Agricultural Biotechnology", duration: "2 Years", category: "Agriculture" },
      { title: "Medical Biotechnology", duration: "2 Years", category: "Healthcare" }
    ]
  };

  return <UniversityLayout universityData={universityData} />;
};

export default BiherUniversity;
