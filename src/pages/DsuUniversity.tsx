import UniversityLayout from "@/components/UniversityLayout";
import { Award, Users, Building, Handshake } from "lucide-react";

const universityData = {
  name: "Dhanalakshmi Srinivasan University",
  location: "Chennai, Tamil Nadu",
  tagline: "Innovation and Excellence in Higher Education",
  heroImage: "https://www.dsuniversity.ac.in/slider/DSU-Pic-04.jpg",
  logoImage: "https://www.dsuniversity.ac.in/images/DSU_Logo.png",
  primaryColor: "text-emerald-600",
  gradientColors: "from-emerald-600 to-emerald-800",
  established: "2019",
  students: "15,000+",
  metaDescription: "Dhanalakshmi Srinivasan University (DSU) - Leading institution in Tamil Nadu with campuses in Samayapuram and Perambalur. Explore programs in medicine, engineering, agriculture, pharmacy, and more.",
  metaKeywords: "Dhanalakshmi Srinivasan University, DSU, Tamil Nadu university, medical education, engineering college, agriculture programs, pharmacy courses, AICTE approved, UGC approved",
  about:
    "Dhanalakshmi Srinivasan University (DSU), established in 2019, is a proud initiative of the Dhanalakshmi Srinivasan Charitable and Educational Trust, founded by Dr. A. Srinivasan. With campuses in Samayapuram (Tiruchirappalli) and Perambalur, DSU brings together quality education and modern infrastructure under one roof. It's part of a well-known group that runs several colleges across Tamil Nadu in fields like medicine, engineering, agriculture, and pharmacy. Built with a vision to empower students through innovation and research, the university is approved by top bodies like AICTE, NMC, PCI, INC, and UGC, making it a trusted name in higher education.",
  features: [
    {
      icon: Award,
      title: "Approvals",
      description: "Approved by AICTE, NMC, PCI, INC, and UGC.",
      color: "bg-blue-100",
    },
    {
      icon: Building,
      title: "Campus",
      description:
        "Modern campuses in Samayapuram and Perambalur with advanced infrastructure.",
      color: "bg-green-100",
    },
    {
      icon: Users,
      title: "Faculties",
      description:
        "Highly qualified, experienced educators promoting research and innovation.",
      color: "bg-orange-100",
    },
    {
      icon: Handshake,
      title: "Collaborations",
      description:
        "Robust industry-academic partnerships enhancing practical experience.",
      color: "bg-red-100",
    },
  ],
  courses: [
    {
      title: "Medical & Health Sciences",
      image:
        "https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?w=400&q=80",
    },
    {
      title: "Engineering & Technology",
      image:
        "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&q=80",
    },
    {
      title: "Law",
      image:
        "https://images.pexels.com/photos/5668882/pexels-photo-5668882.jpeg",
    },
    {
      title: "Physiotherapy",
      image:
        "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&q=80",
    },
    {
      title: "Pharmacy",
      image:
        "https://images.unsplash.com/photo-1576671081837-49000212a370?w=400&q=80",
    },
    {
      title: "Agriculture",
      image:
        "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=400&q=80",
    },
    {
      title: "Design",
      image:
        "https://images.unsplash.com/photo-1541462608143-67571c6738dd?w=400&q=80",
    },
    {
      title: "Management",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&q=80",
    },
  ],
};

const DsuUniversity = () => {
  return <UniversityLayout universityData={universityData} />;
};

export default DsuUniversity;
