
import UniversityLayout from "@/components/UniversityLayout";
import { Award, Users, Building, Handshake } from "lucide-react";

const universityData = {
  name: "Saveetha Engineering College",
  location: "Chennai, Tamil Nadu",
  tagline: "Excellence in Engineering and Management Education",
  heroImage:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVs0OjZjdMSOK_D8q6stw6rjfOPdnb02C7Kw&s",
  logoImage:
    "https://upload.wikimedia.org/wikipedia/en/2/21/Saveetha_Institute_of_Medical_And_Technical_Sciences_Logo.png",
  primaryColor: "text-red-600",
  gradientColors: "from-red-600 to-red-800",
  established: "1986",
  students: "15,000+",
  metaDescription: "Saveetha Engineering College - Premier engineering and management institution in Chennai with specializations in Computer Science, Mechanical, Civil, Electrical Engineering and MBA programs. AICTE approved with excellent placement records.",
  metaKeywords: "Saveetha Engineering College, engineering education, MBA programs, computer science, mechanical engineering, civil engineering, electrical engineering, Chennai engineering college, AICTE approved, placement",
  about:
    "Saveetha Engineering College, established under the Saveetha Educational Trust in 1986, is a premier institution dedicated to excellence in engineering and management education. Located in Chennai, the college offers undergraduate and postgraduate programs in various engineering disciplines and management studies. With state-of-the-art laboratories, experienced faculty, and strong industry partnerships, we prepare students for successful careers in engineering and business. Our focus on innovation, research, and practical learning ensures graduates are well-equipped to meet industry demands and contribute to technological advancement.",
  features: [
    {
      icon: Award,
      title: "Approvals",
      description:
        "AICTE approved, NBA accredited, University grants commission recognized",
      color: "bg-blue-100",
    },
    {
      icon: Building,
      title: "Campus",
      description: "Modern campus with advanced labs, workshops and research facilities",
      color: "bg-green-100",
    },
    {
      icon: Users,
      title: "Faculties",
      description: "Experienced faculty with industry expertise and research background",
      color: "bg-orange-100",
    },
    {
      icon: Handshake,
      title: "Industry Partnerships",
      description:
        "Strong placement support with top MNCs and tech companies",
      color: "bg-red-100",
    },
  ],
  courses: [
    {
      title: "Computer Science Engineering",
      image:
        "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=400&q=80",
    },
    {
      title: "Mechanical Engineering",
      image:
        "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=400&q=80",
    },
    {
      title: "Civil Engineering",
      image:
        "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=400&q=80",
    },
    {
      title: "Electrical & Electronics Engineering",
      image:
        "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=400&q=80",
    },
    {
      title: "Electronics & Communication Engineering",
      image:
        "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&q=80",
    },
    {
      title: "Information Technology",
      image:
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&q=80",
    },
    {
      title: "Artificial Intelligence & Data Science",
      image:
        "https://images.unsplash.com/photo-1555255707-c07966088b7b?w=400&q=80",
    },
    {
      title: "Cyber Security",
      image:
        "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&q=80",
    },
    {
      title: "MBA - Marketing",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&q=80",
    },
    {
      title: "MBA - Finance",
      image:
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&q=80",
    },
    {
      title: "MBA - Human Resources",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
    },
    {
      title: "MBA - Operations Management",
      image:
        "https://images.unsplash.com/photo-1664382953518-5ff1ea6af3c8?w=400&q=80",
    },
  ],
};
const SaveethaUniversity = () => {
  return <UniversityLayout universityData={universityData} />;
};

export default SaveethaUniversity;
