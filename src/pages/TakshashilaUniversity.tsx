import UniversityLayout from "@/components/UniversityLayout";
import { Award, Users, Building, Handshake } from "lucide-react";

const universityData = {
  name: "Takshashila University",
  location: "Ongur,Tamil Nadu",
  tagline: "Reviving India's Ancient Educational Legacy with Modern Excellence",
  heroImage:
    "https://takshashilauniv.ac.in/wp-content/uploads/2025/03/infrastructure-2.webp",
  logoImage:
    "https://media.licdn.com/dms/image/v2/C4D0BAQEn2ipthDvaeA/company-logo_200_200/company-logo_200_200/0/1657190027778?e=1755129600&v=beta&t=_Wq4kB0kNAdBl3n1gMC2LupsgXRrzgfc60qQAT8TDcg",
  primaryColor: "text-red-600",
  gradientColors: "from-red-600 to-red-800",
  established: "2022",
  students: "15,000+",
  metaDescription: "Takshashila University in Ongur, Tamil Nadu - A modern institution with a 150-acre eco-friendly campus offering programs in engineering, pharmacy, nursing, agriculture and more. UGC-recognized under TN Private Universities Act.",
  metaKeywords: "Takshashila University, Ongur campus, Tamil Nadu university, engineering programs, pharmacy education, nursing college, agriculture studies, hotel management, business courses, Sri Manakula Vinayagar group",
  about:
    "Takshashila University, established to revive India's ancient educational glory, is situated in Ongur, Tamil Nadu. As part of the prestigious Sri Manakula Vinayagar and Mailam Group with over 25 years of experience, it promotes academic excellence through eminent faculty, hands-on learning, and advanced research. The modern campus features advanced labs, well-equipped classrooms, a comprehensive library, and sustainability initiatives. Takshashila fosters global perspectives via international collaborations, arts, culture, scholarships, and career support services, creating a diverse and inclusive environment. Dedicated to empowering students, the university shapes future leaders, continuing its legacy of transformative education.",
  features: [
    {
      icon: Award,
      title: "Approvals",
      description: "UGC‑recognized under TN Private Universities Act ",
      color: "bg-blue-100",
    },
    {
      icon: Building,
      title: "Campus",
      description: "150‑acre eco‑friendly Ongur campus  ",
      color: "bg-green-100",
    },
    {
      icon: Users,
      title: "Faculties",
      description:
        "Eminent faculty across engineering, sciences, allied health",
      color: "bg-orange-100",
    },
    {
      icon: Handshake,
      title: "Collaborations",
      description: "MOUs with IBM, Xebia, Cambridge, Vietnam university",
      color: "bg-red-100",
    },
  ],
  courses: [
    {
      title: "Engineering & Technology",
      image:
        "https://www.purdueglobal.edu/blog/it/what-can-you-do-with-masters-in-it.jpg",
    },
    {
      title: "Pharmacy",
      image:
        "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=400&q=80",
    },
    {
      title: "Physiotherapy",
      image:
        "https://www.essex.ac.uk/-/media/images/subject-pages/physiotherapy/ptait_20220622_0901_physiotherapy_1500x825.jpg?w=900&hash=6CDE07AEC28D5DF7932B596F6AA27854",
    },
    {
      title: "Nursing",
      image:
        "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&q=80",
    },
    {
      title: "Agriculture",
      image:
        "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?w=400&q=80",
    },
    {
      title: "Allied Health Sciences",
      image:
        "https://images.unsplash.com/photo-1584432810601-6c7f27d2362b?w=400&q=80",
    },
    {
      title: "Art & science",
      image:
        "https://images.unsplash.com/photo-1473177104440-ffee2f376098?w=400&q=80",
    },
    {
      title: "Hotel Management",
      image:
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&q=80",
    },
    {
      title: "Business Management",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
    },
  ],
};

const TakshashilaUniversity = () => {
  return <UniversityLayout universityData={universityData} />;
};

export default TakshashilaUniversity;
