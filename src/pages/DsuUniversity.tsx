
import UniversityLayout from "@/components/UniversityLayout";
import { Award, Users, Building, BookOpen, Code, Cpu, Wifi, Smartphone } from "lucide-react";

const DsuUniversity = () => {
  const universityData = {
    name: "Dayananda Sagar University",
    location: "Chennai, Tamil Nadu",
    heroImage: "https://images.unsplash.com/photo-1562774053-701939374585",
    primaryColor: "text-emerald-600",
    gradientColors: "from-emerald-600 to-emerald-800",
    established: "2014",
    students: "15,000+",
    about: "Dayananda Sagar University is a leading private university committed to excellence in engineering, technology, and innovation. We foster a culture of research and development while providing industry-relevant education. Our focus on practical learning, combined with strong industry partnerships, ensures our graduates are well-prepared for the challenges of the modern technological landscape. We emphasize entrepreneurship and innovation, encouraging students to become job creators rather than job seekers.",
    features: [
      {
        icon: Award,
        title: "AICTE Approved",
        description: "All engineering programs approved by AICTE and affiliations"
      },
      {
        icon: Building,
        title: "Tech Campus",
        description: "Modern laboratories and research facilities for innovation"
      },
      {
        icon: Users,
        title: "Industry Experts",
        description: "Faculty with strong industry background and research expertise"
      },
      {
        icon: Wifi,
        title: "Smart Campus",
        description: "Digital learning environment with latest technology integration"
      }
    ],
    courses: [
      { title: "Computer Science Engineering", duration: "4 Years", category: "Engineering" },
      { title: "Artificial Intelligence", duration: "4 Years", category: "Technology" },
      { title: "Data Science", duration: "4 Years", category: "Analytics" },
      { title: "Cybersecurity", duration: "4 Years", category: "Security" },
      { title: "Robotics Engineering", duration: "4 Years", category: "Automation" },
      { title: "Software Engineering", duration: "4 Years", category: "Development" },
      { title: "Machine Learning", duration: "2 Years", category: "Research" },
      { title: "Blockchain Technology", duration: "1 Year", category: "Certification" }
    ]
  };

  return <UniversityLayout universityData={universityData} />;
};

export default DsuUniversity;
