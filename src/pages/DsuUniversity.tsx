

import UniversityLayout from "@/components/UniversityLayout";
import { Award, Users, Building, Handshake } from "lucide-react";

const universityData = {
  name: "Dhanalakshmi Srinivasan University",
  location: "Samayapuram, Tiruchirappalli & Perambalur, Tamil Nadu",
  tagline: "Empowering Minds, Transforming Lives - Innovation and Excellence in Higher Education",
  heroImage: "https://www.dsuniversity.ac.in/slider/DSU-Pic-04.jpg",
  logoImage: "https://www.dsuniversity.ac.in/images/DSU_Logo.png",
  primaryColor: "text-emerald-600",
  gradientColors: "from-emerald-600 to-emerald-800",
  established: "2019",
  students: "15,000+",
  metaDescription: "Dhanalakshmi Srinivasan University (DSU) - Premier multi-campus institution in Tamil Nadu with campuses in Samayapuram (Tiruchirappalli) and Perambalur. UGC approved university offering comprehensive programs in medicine, engineering, agriculture, pharmacy, and more with modern infrastructure and industry partnerships.",
  metaKeywords: "Dhanalakshmi Srinivasan University, DSU, Samayapuram campus, Perambalur campus, Tiruchirappalli university, Tamil Nadu university, medical education, engineering college, agriculture programs, pharmacy courses, AICTE approved, UGC approved, multi-campus university",
  about:
    "Dhanalakshmi Srinivasan University (DSU), established in 2019, is a prestigious multi-campus institution with state-of-the-art facilities in Samayapuram, Tiruchirappalli and Perambalur, Tamil Nadu. Founded by the Dhanalakshmi Srinivasan Charitable and Educational Trust under the visionary leadership of Dr. A. Srinivasan, DSU represents over 25 years of educational excellence. The university operates across multiple campuses with modern infrastructure, advanced laboratories, and comprehensive facilities. Approved by UGC, AICTE, NMC, PCI, and INC, DSU offers diverse programs from undergraduate to doctoral levels across various disciplines including medicine, engineering, agriculture, pharmacy, law, and management. With a commitment to holistic education, research innovation, and industry collaboration, DSU prepares students to become global leaders and responsible citizens.",
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
      title: "B.Tech - Artificial Intelligence & Data Science",
      image:
        "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&q=80",
    },
    {
      title: "B.Tech - Artificial Intelligence and Machine Learning",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
    },
    {
      title: "B.Tech - Computer Science & Engineering",
      image:
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&q=80",
    },
    {
      title: "B.Tech - Computer Science & Engineering with Cyber Security",
      image:
        "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&q=80",
    },
    {
      title: "B.Tech - Information Technology",
      image:
        "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&q=80",
    },
    {
      title: "B.Tech - Agriculture Engineering",
      image:
        "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400&q=80",
    },
    {
      title: "B.Tech - Biotechnology",
      image:
        "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&q=80",
    },
    {
      title: "B.Tech - Biomedical Engineering",
      image:
        "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&q=80",
    },
    {
      title: "B.Tech - Computer Science & Engineering with IOT",
      image:
        "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=400&q=80",
    },
    {
      title: "B.Tech - Electrical and Electronics Engineering",
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&q=80",
    },
    {
      title: "B.Tech - Electronics and Communication Engineering",
      image:
        "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=400&q=80",
    },
    {
      title: "B.Tech - Mechanical Engineering",
      image:
        "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=400&q=80",
    },
    {
      title: "Medical & Health Sciences",
      image:
        "https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?w=400&q=80",
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

