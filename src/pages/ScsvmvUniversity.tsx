import UniversityLayout from "@/components/UniversityLayout";
import { Award, Users, Building, Handshake } from "lucide-react";

const universityData = {
  name: "Sri Chandrasekharendra Saraswathi Viswa Mahavidyalaya",
  location: "Chennai, Tamil Nadu",
  tagline: "Blending Tradition with Modern Education",
  heroImage:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDvOBmLRcAe4nPBYeVosAKtyty4x5aqLc9Fg&s",
  logoImage:
    "https://upload.wikimedia.org/wikipedia/en/4/4c/Sri_Chandrasekharendra_Saraswathi_Viswa_Mahavidyalaya_logo.png",
  primaryColor: "text-orange-600",
  gradientColors: "from-orange-600 to-orange-800",
  established: "1993",
  students: "12,000+",
  metaDescription: "Sri Chandrasekharendra Saraswathi Viswa Mahavidyalaya (SCSVMV) - NAAC 'A' grade university in Kanchipuram blending traditional values with modern education. Programs in Engineering, Ayurveda, Management, and Sanskrit studies.",
  metaKeywords: "SCSVMV, Sri Chandrasekharendra Saraswathi Viswa Mahavidyalaya, Kanchi university, Kanchipuram university, Ayurveda studies, engineering programs, Sanskrit education, traditional values, NAAC A grade",
  about:
    "Sri Chandrasekharendra Saraswathi Viswa Mahavidyalaya (SCSVMV), located in Enathur, Kanchipuram, was established in 1993 with the blessings of the revered saints of the Kanchi Kamakoti Peetham. Named after Jagadguru Chandrasekharendra Saraswathi Swamigal, the university beautifully blends traditional Indian values with modern education. Spread over a peaceful 50-acre campus, SCSVMV offers programs in Engineering, Management, Science, Sanskrit, Indian Culture, and Health Sciences. Recognized by UGC, AICTE, and accredited with a NAAC 'A' grade, the university focuses on holistic development through academics, research, and values. It provides a nurturing environment for students to grow intellectually and spiritually.",
  features: [
    {
      icon: Award,
      title: "Approvals",
      description: "Recognized by UGC, AICTE, NAAC 'A' grade accredited.",
      color: "bg-blue-100",
    },
    {
      icon: Building,
      title: "Campus",
      description: "Serene 50-acre campus conducive to holistic growth.",
      color: "bg-green-100",
    },
    {
      icon: Users,
      title: "Faculties",
      description:
        "Distinguished faculty integrating traditional and contemporary educational methods.",
      color: "bg-orange-100",
    },
    {
      icon: Handshake,
      title: "Collaborations",
      description:
        "Extensive collaborations in academics, cultural programs, and spiritual initiatives.",
      color: "bg-red-100",
    },
  ],
  courses: [
    {
      title: "Ayurveda (Medical Sciences)",
      image:
        "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=400&q=80",
    },
    {
      title: "Engineering & Technology",
      image:
        "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=400&q=80",
    },
    {
      title: "Physiotherapy",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&q=80",
    },
    {
      title: "Arts & Humanities (English, Tamil, Sanskrit)",
      image:
        "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&q=80",
    },
    {
      title: "Management Studies",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
    },
    {
      title: "Education (B.Ed)",
      image:
        "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&q=80",
    },
    {
      title: "Indian Culture & Philosophy",
      image:
        "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=400&q=80",
    },
    {
      title: "Research (M.Phil & Ph.D.)",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
    },
  ],
};
const ScsvmvUniversity = () => {
  return <UniversityLayout universityData={universityData} />;
};

export default ScsvmvUniversity;
