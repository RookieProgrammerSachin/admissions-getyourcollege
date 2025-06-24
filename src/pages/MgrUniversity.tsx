import UniversityLayout from "@/components/UniversityLayout";
import { Award, Users, Building, Handshake } from "lucide-react";

const universityData = {
  name: "Dr.M.G.R.University",
  location: "Chennai, Tamil Nadu",
  tagline: "Excellence in Medical Education and Research",
  heroImage:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlXL8WpQPT0QRC84zDlL5rHThqw0BdhWRzWA&s",
  logoImage: "https://www.drmgrdu.ac.in/images/logo/logo_main.png",
  primaryColor: "text-blue-600",
  gradientColors: "from-blue-600 to-blue-800",
  established: "1988",
  students: "25,000+",
  metaDescription: "Dr. M.G.R. University - A premier university in Chennai offering medical, dental, engineering, law and healthcare programs. Learn about admissions, courses, and campus facilities.",
  metaKeywords: "Dr. M.G.R. Educational and Research Institute, MGR University, Chennai university, medical college, dental college, engineering college, healthcare education, MBBS admission, BDS admission, law school Chennai",
  about:
    "Established in 1988 by the Tmt.Kannammal Educational Trust, Dr. M.G.R. University attained deemed university status in 2003. The university emphasizes technical proficiency, confidence-building, and holistic development to prepare students for global challenges. Recognized by the University Grants Commission (UGC) and the Ministry of Human Resources Development (MHRD), it offers diverse academic programs in engineering, medical sciences, dental studies, and other disciplines, fostering a research-oriented and innovation-driven educational environment.",
  features: [
    {
      icon: Award,
      title: "Approvals",
      description:
        "Recognized by UGC, Medical Council of India, Pharmacy Council.",
      color: "bg-blue-100",
    },
    {
      icon: Building,
      title: "Campus",
      description:
        "Central location in Chennai, equipped with modern facilities.",
      color: "bg-green-100",
    },
    {
      icon: Users,
      title: "Faculties",
      description:
        "Experienced healthcare educators with extensive practical knowledge.",
      color: "bg-orange-100",
    },
    {
      icon: Handshake,
      title: "Collaborations",
      description:
        "Strong ties with leading hospitals and healthcare institutions.",
      color: "bg-red-100",
    },
  ],
  courses: [
    {
      title: "Computer Science Engineering",
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&q=80",
    },
    {
      title: "Mechanical Engineering",
      image:
        "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=400&q=80",
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
        "https://img.freepik.com/free-photo/checking-current-laptop-circuit-board_1098-13759.jpg?w=400&q=80",
    },
    {
      title: "Information Technology",
      image:
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&q=80",
    },
    {
      title: "Architecture",
      image:
        "https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=400&q=80",
    },
    {
      title: "Law",
      image:
        "https://images.unsplash.com/photo-1589994965851-a8f479c573a9?w=400&q=80",
    },
    {
      title: "Management",
      image:
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&q=80",
    },
    {
      title: "Medical",
      image:
        "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&q=80",
    },
    {
      title: "Arts & Science",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
    },
    {
      title: "Dental",
      image:
        "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=400&q=80",
    },
    {
      title: "Health Science",
      image:
        "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&q=80",
    },
    {
      title: "Paramedical",
      image:
        "https://cpsigovt.com/new-images/DMLT/lab%20technician%201.jpg",
    },
    {
      title: "Pharmacy",
      image:
        "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=400&q=80",
    },
    {
      title: "Nursing",
      image:
        "https://images.unsplash.com/photo-1612277795421-9bc7706a4a34?w=400&q=80",
    },
    {
      title: "Agriculture",
      image:
        "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=400&q=80",
    },
  ],
};

const MgrUniversity = () => {
  return <UniversityLayout universityData={universityData} />;
};

export default MgrUniversity;
