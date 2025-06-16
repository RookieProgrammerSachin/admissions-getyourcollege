import UniversityLayout from "@/components/UniversityLayout";
import { Award, Users, Building, Handshake } from "lucide-react";

const universityData = {
  name: "Bharath Institute of Higher Education and Research",
  location: "Chennai, Tamil Nadu",
  tagline: "Nurturing Excellence in Education and Research",
  heroImage:
    "https://img.jagranjosh.com/images/2022/December/1122022/Bharath-Institute-of-Higher-Education-and-Research-Chennai-Campus-View-3.jpg",
  logoImage:
    "https://upload.wikimedia.org/wikipedia/en/c/cb/Bharath_University_Logo.png",
  primaryColor: "text-purple-600",
  gradientColors: "from-purple-600 to-purple-800",
  established: "1984",
  students: "20,000+",
  about:
    "Bharath Institute of Higher Education and Research (BIHER), formerly known as Bharath University, was founded in 1984 by Dr. S. Jagathrakshakan under the Sri Lakshmi Ammal Educational Trust. Located in Chennai, Tamil Nadu, the university was granted deemed-to-be status in 2002. Spread across a 305-acre urban campus, BIHER offers a wide range of programs in engineering, medicine, dentistry, law, management, and sciences. Known for its commitment to excellence in education and research, the university holds an NAAC 'A' grade accreditation. With modern infrastructure and a focus on innovation, Bharath University continues to shape skilled professionals across various fields.",
  features: [
    {
      icon: Award,
      title: "Approvals",
      description: "NAAC 'A' grade accreditation, recognized by UGC.",
      color: "bg-blue-100",
    },
    {
      icon: Building,
      title: "Campus",
      description:
        "Expansive 305-acre urban campus with comprehensive facilities.",
      color: "bg-green-100",
    },
    {
      icon: Users,
      title: "Faculties",
      description:
        "Renowned and experienced faculty dedicated to research and teaching.",
      color: "bg-orange-100",
    },
    {
      icon: Handshake,
      title: "Collaborations",
      description:
        "International partnerships providing global academic and research opportunities.",
      color: "bg-red-100",
    },
  ],
  courses: [
    {
      title: "Medicine",
      image:
        "https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?w=400&q=80",
    },
    {
      title: "Dental",
      image:
        "https://images.unsplash.com/photo-1609840114035-3c981a782636?w=400&q=80",
    },
    {
      title: "Engineering & Technology",
      image:
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&q=80",
    },
    {
      title: "Nursing",
      image:
        "https://images.unsplash.com/photo-1584432810601-6c7f27d2362b?w=400&q=80",
    },
    {
      title: "Allied Health",
      image:
        "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&q=80",
    },
    {
      title: "Law",
      image:
        "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&q=80",
    },
    {
      title: "Pharmacy",
      image:
        "https://images.unsplash.com/photo-1563213126-a4273aed2016?w=400&q=80",
    },
    {
      title: "Agriculture",
      image:
        "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400&q=80",
    },
    {
      title: "Arts & Humanities",
      image:
        "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&q=80",
    },
    {
      title: "Management & Commerce",
      image:
        "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&q=80",
    },
    {
      title: "Architecture & Design",
      image:
        "https://images.unsplash.com/photo-1496307653780-42ee777d4833?w=400&q=80",
    },
  ],
};

const BiherUniversity = () => {
  return <UniversityLayout universityData={universityData} />;
};

export default BiherUniversity;
