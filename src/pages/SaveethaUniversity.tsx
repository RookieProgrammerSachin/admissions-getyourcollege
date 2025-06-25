
import UniversityLayout from "@/components/UniversityLayout";
import { Award, Users, Building, Handshake } from "lucide-react";

const universityData = {
  name: "Saveetha University",
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
  metaDescription: "Saveetha University - Premier engineering and management institution in Chennai with specializations in Computer Science, Mechanical, Civil, Electrical Engineering and MBA programs. AICTE approved with excellent placement records.",
  metaKeywords: "Saveetha University, engineering education, MBA programs, computer science, mechanical engineering, civil engineering, electrical engineering, Chennai engineering college, AICTE approved, placement",
  about:
    "Saveetha University, established under the Saveetha Educational Trust in 1986, is a premier institution dedicated to excellence in engineering and management education. Located in Chennai, the college offers undergraduate and postgraduate programs in various engineering disciplines and management studies. With state-of-the-art laboratories, experienced faculty, and strong industry partnerships, we prepare students for successful careers in engineering and business. Our focus on innovation, research, and practical learning ensures graduates are well-equipped to meet industry demands and contribute to technological advancement.",
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
      title: "B.Tech - Artificial Intelligence and Data Science",
      image:
        "https://images.unsplash.com/photo-1555255707-c07966088b7b?w=400&q=80",
    },
    {
      title: "B.Tech - Artificial Intelligence and Machine Learning",
      image:
        "https://www.simplilearn.com/ice9/free_resources_article_thumb/How_to_Become_an_AI_Engineer.jpg",
    },
    {
      title: "B.E - Computer Science and Engineering",
      image:
        "https://images.unsplash.com/photo-1662638600476-d563fffbb072?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "B.Tech - Computer Science and BioSciences",
      image:
        "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=400&q=80",
    },
    {
      title: "B.E - CSE with Artificial Intelligence",
      image:
        "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&q=80",
    },
    {
      title: "B.E - CSE with Data Science",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&q=80",
    },
    {
      title: "B.E - CSE with Cyber Security ",
      image:
        "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&q=80",
    },
    {
      title: "B.Tech - Information Technology ",
      image:
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&q=80",
    },
    {
      title: "B.E - Electronics and Communication Engineering",
      image:
        "https://img.freepik.com/free-photo/checking-current-laptop-circuit-board_1098-13759.jpg?ga=GA1.1.1606881923.1750356179&semt=ais_hybrid&w=740",
    },
    {
      title: "B.E - Bioinformatics",
      image:
        "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&q=80",
    },
    {
      title: "B.Tech - Biotechnology ",
      image:
        "https://www.swamivivekanandauniversity.ac.in/backend/resource/assets/images/blogs/bsc-biotechnology-colleges-near-me-08-04-2024.jpg",
    },
    {
      title: "B.Tech - Dental Technology",
      image:
        "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=400&q=80",
    },
    {
      title: "B.E - Electrical and Electronics Engineering",
      image:
        "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=400&q=80",
    },
    {
      title: "B.E - Civil Engineering",
      image:
        "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=400&q=80",
    },
    {
      title: "B.E - Mechanical Engineering",
      image:
        "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "B.E - Biomedical Engineering",
      image:
        "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&q=80",
    },
    {
      title: "MBA",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&q=80",
    },
  ],
};
const SaveethaUniversity = () => {
  return <UniversityLayout universityData={universityData} />;
};

export default SaveethaUniversity;
