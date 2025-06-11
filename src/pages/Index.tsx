
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Building, Users, Award, BookOpen, Phone, Mail, MapPin, Globe, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Index = () => {
  const universities = [
    {
      name: "MGR University",
      path: "/mgr-university",
      description: "Leading institution in medical and health sciences",
      color: "from-blue-600 to-blue-800",
      image: "https://www.drmgrdu.ac.in/images/logo/logo_main.png",
      heroImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlXL8WpQPT0QRC84zDlL5rHThqw0BdhWRzWA&s"
    },
    {
      name: "DSU University", 
      path: "/dsu-university",
      description: "Innovation in technology and engineering",
      color: "from-emerald-600 to-emerald-800",
      image: "https://www.dsuniversity.ac.in/images/DSU_Logo.png",
      heroImage: "https://www.dsuniversity.ac.in/slider/DSU-Pic-04.jpg"
    },
    {
      name: "BIHER University",
      path: "/biher-university", 
      description: "Excellence in biotechnology and research",
      color: "from-purple-600 to-purple-800",
      image: "https://upload.wikimedia.org/wikipedia/en/c/cb/Bharath_University_Logo.png",
      heroImage: "https://img.jagranjosh.com/images/2022/December/1122022/Bharath-Institute-of-Higher-Education-and-Research-Chennai-Campus-View-3.jpg"
    },
    {
      name: "SCSVMV University",
      path: "/scsvmv-university",
      description: "Comprehensive education and development",
      color: "from-orange-600 to-orange-800",
      image: "https://upload.wikimedia.org/wikipedia/en/4/4c/Sri_Chandrasekharendra_Saraswathi_Viswa_Mahavidyalaya_logo.png",
      heroImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDvOBmLRcAe4nPBYeVosAKtyty4x5aqLc9Fg&s"
    },
    {
      name: "Saveetha University",
      path: "/saveetha-university",
      description: "Multidisciplinary academic excellence",
      color: "from-red-600 to-red-800",
      image:  "https://upload.wikimedia.org/wikipedia/en/2/21/Saveetha_Institute_of_Medical_And_Technical_Sciences_Logo.png",
      heroImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVs0OjZjdMSOK_D8q6stw6rjfOPdnb02C7Kw&s"
    },
    {
      name: "Takshashila University",
      path: "/takshashila-university",
      description: "Reviving India's ancient educational excellence",
      color: "from-amber-600 to-amber-800",
      image: "https://media.licdn.com/dms/image/v2/C4D0BAQEn2ipthDvaeA/company-logo_200_200/company-logo_200_200/0/1657190027778?e=1755129600&v=beta&t=_Wq4kB0kNAdBl3n1gMC2LupsgXRrzgfc60qQAT8TDcg",
      heroImage:"https://takshashilauniv.ac.in/wp-content/uploads/2025/03/infrastructure-2.webp"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Building className="h-8 w-8 text-blue-600" />
              <h1 className="text-xl md:text-2xl font-bold text-gray-900">University Explorer</h1>
            </div>
            <div className="text-sm text-gray-600 hidden sm:block">Find Your Future</div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 animate-fade-in">
              Discover Your Future
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto animate-fade-in">
              Explore premier universities in Chennai and find the perfect program to launch your career
            </p>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8 max-w-4xl mx-auto">
              <div className="text-center animate-fade-in">
                <Award className="h-10 w-10 md:h-12 md:w-12 text-blue-600 mx-auto mb-3" />
                <h3 className="text-sm md:text-lg font-semibold text-gray-900">Accredited Programs</h3>
                <p className="text-xs md:text-sm text-gray-600">Top-tier standards</p>
              </div>
              <div className="text-center animate-fade-in">
                <Users className="h-10 w-10 md:h-12 md:w-12 text-emerald-600 mx-auto mb-3" />
                <h3 className="text-sm md:text-lg font-semibold text-gray-900">Expert Faculty</h3>
                <p className="text-xs md:text-sm text-gray-600">Industry leaders</p>
              </div>
              <div className="text-center animate-fade-in">
                <Building className="h-10 w-10 md:h-12 md:w-12 text-purple-600 mx-auto mb-3" />
                <h3 className="text-sm md:text-lg font-semibold text-gray-900">Modern Campus</h3>
                <p className="text-xs md:text-sm text-gray-600">State-of-the-art</p>
              </div>
              <div className="text-center animate-fade-in">
                <BookOpen className="h-10 w-10 md:h-12 md:w-12 text-orange-600 mx-auto mb-3" />
                <h3 className="text-sm md:text-lg font-semibold text-gray-900">Diverse Programs</h3>
                <p className="text-xs md:text-sm text-gray-600">Wide range</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Universities Grid */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
            Choose Your University
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {universities.map((university, index) => (
              <Card key={university.path} className="hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in overflow-hidden">
                <CardHeader className="p-0">
                  <div className="relative h-48 md:h-56 overflow-hidden">
                    <img 
                      src={university.heroImage} 
                      alt={`${university.name} Campus`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4 flex items-center space-x-3">
                      <img 
                        src={university.image} 
                        alt={`${university.name} Logo`}
                        className="w-12 h-12 rounded-lg object-cover bg-white p-1 shadow-lg"
                      />
                      <div>
                        <CardTitle className="text-white text-lg md:text-xl">{university.name}</CardTitle>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-4 md:p-6">
                  <CardDescription className="text-gray-600 mb-4 text-sm md:text-base">
                    {university.description}
                  </CardDescription>
                  <Link to={university.path} className="block">
                    <Button className="w-full hover:scale-105 transition-transform text-sm md:text-base py-2 md:py-3">
                      Explore University
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Building className="h-8 w-8 text-blue-400" />
                <h3 className="text-xl font-bold">University Explorer</h3>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                Your gateway to premier educational institutions. Discover the perfect university and program to shape your future.
              </p>
              <div className="flex space-x-4">
                <Facebook className="h-5 w-5 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors" />
                <Twitter className="h-5 w-5 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors" />
                <Instagram className="h-5 w-5 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors" />
                <Linkedin className="h-5 w-5 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors" />
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/mgr-university" className="text-gray-300 hover:text-white transition-colors">MGR University</Link></li>
                <li><Link to="/dsu-university" className="text-gray-300 hover:text-white transition-colors">DSU University</Link></li>
                <li><Link to="/biher-university" className="text-gray-300 hover:text-white transition-colors">BIHER University</Link></li>
                <li><Link to="/scsvmv-university" className="text-gray-300 hover:text-white transition-colors">SCSVMV University</Link></li>
                <li><Link to="/saveetha-university" className="text-gray-300 hover:text-white transition-colors">Saveetha University</Link></li>
                <li><Link to="/takshashila-university" className="text-gray-300 hover:text-white transition-colors">Takshashila University</Link></li>
              </ul>
            </div>

            {/* Programs */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Popular Programs</h4>
              <ul className="space-y-2 text-sm">
                <li className="text-gray-300">Medical & Health Sciences</li>
                <li className="text-gray-300">Engineering & Technology</li>
                <li className="text-gray-300">Management Studies</li>
                <li className="text-gray-300">Law</li>
                <li className="text-gray-300">Arts & Science</li>
                <li className="text-gray-300">Pharmacy</li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Contact Us</h4>
              <div className="space-y-3 text-sm">
                <div className="flex items-center space-x-3">
                  <Phone className="h-4 w-4 text-blue-400" />
                  <span className="text-gray-300">+91 9876543210</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-4 w-4 text-blue-400" />
                  <span className="text-gray-300">info@universityexplorer.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-4 w-4 text-blue-400" />
                  <span className="text-gray-300">Chennai, Tamil Nadu, India</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Globe className="h-4 w-4 text-blue-400" />
                  <span className="text-gray-300">www.universityexplorer.com</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm">
                © 2024 University Explorer. All rights reserved.
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <span className="text-gray-400 text-sm hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
                <span className="text-gray-400 text-sm hover:text-white cursor-pointer transition-colors">Terms of Service</span>
                <span className="text-gray-400 text-sm hover:text-white cursor-pointer transition-colors">Cookie Policy</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
