
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Building, Users, Award, BookOpen, Phone, User, MapPin, GraduationCap } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const Index = () => {
  const [enquiryForm, setEnquiryForm] = useState({
    name: "",
    phone: "",
    state: "",
    program: ""
  });

  const handleEnquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Enquiry submitted:", enquiryForm);
    toast({
      title: "Enquiry Submitted Successfully!",
      description: "We'll contact you soon with more information.",
    });
    setEnquiryForm({ name: "", phone: "", state: "", program: "" });
  };

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
      image: "https://kanchiuniv.ac.in/wp-content/uploads/2023/07/SCSVMV-University-logo.png",
      heroImage: "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80"
    },
    {
      name: "Saveetha University",
      path: "/saveetha-university",
      description: "Multidisciplinary academic excellence",
      color: "from-red-600 to-red-800",
      image: "https://www.saveetha.com/images/logo_white.png",
      heroImage: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=800&q=80"
    },
    {
      name: "Takshashila University",
      path: "/takshashila-university",
      description: "Reviving India's ancient educational excellence",
      color: "from-amber-600 to-amber-800",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&q=80",
      heroImage: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&q=80"
    }
  ];

  const states = [
    "Tamil Nadu", "Karnataka", "Kerala", "Andhra Pradesh", "Telangana", "Maharashtra", "Gujarat", "Rajasthan", "Delhi", "Uttar Pradesh", "West Bengal", "Punjab", "Haryana", "Madhya Pradesh", "Bihar", "Odisha", "Assam", "Jharkhand", "Chhattisgarh", "Himachal Pradesh", "Uttarakhand", "Goa", "Tripura", "Manipur", "Meghalaya", "Sikkim", "Nagaland", "Mizoram", "Arunachal Pradesh", "Jammu and Kashmir", "Ladakh"
  ];

  const programs = [
    "Medical", "Engineering & Technology", "Dental", "Law", "Pharmacy", "Nursing", "Management", "Agriculture", "Arts & Science", "Architecture", "Physiotherapy", "Allied Health Sciences", "Design", "Education"
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 animate-fade-in">
                Discover Your Future
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl animate-fade-in">
                Explore premier universities in Chennai and find the perfect program to launch your career
              </p>
              
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
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

            {/* Right Enquiry Form */}
            <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border">
              <div className="text-center mb-6">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Get Started Today</h2>
                <p className="text-gray-600">Submit your enquiry and we'll help you find the perfect university</p>
              </div>
              
              <form onSubmit={handleEnquirySubmit} className="space-y-4">
                <div>
                  <Label htmlFor="enquiry-name" className="flex items-center text-sm font-medium">
                    <User className="w-4 h-4 mr-2 text-blue-600" />
                    Full Name *
                  </Label>
                  <Input
                    id="enquiry-name"
                    value={enquiryForm.name}
                    onChange={(e) => setEnquiryForm({...enquiryForm, name: e.target.value})}
                    required
                    className="mt-1"
                    placeholder="Enter your full name"
                  />
                </div>
                
                <div>
                  <Label htmlFor="enquiry-phone" className="flex items-center text-sm font-medium">
                    <Phone className="w-4 h-4 mr-2 text-green-600" />
                    Phone Number *
                  </Label>
                  <Input
                    id="enquiry-phone"
                    value={enquiryForm.phone}
                    onChange={(e) => setEnquiryForm({...enquiryForm, phone: e.target.value})}
                    required
                    className="mt-1"
                    placeholder="Enter your phone number"
                  />
                </div>
                
                <div>
                  <Label htmlFor="enquiry-state" className="flex items-center text-sm font-medium">
                    <MapPin className="w-4 h-4 mr-2 text-purple-600" />
                    State *
                  </Label>
                  <Select value={enquiryForm.state} onValueChange={(value) => setEnquiryForm({...enquiryForm, state: value})}>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select your state" />
                    </SelectTrigger>
                    <SelectContent>
                      {states.map((state) => (
                        <SelectItem key={state} value={state}>
                          {state}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Label htmlFor="enquiry-program" className="flex items-center text-sm font-medium">
                    <GraduationCap className="w-4 h-4 mr-2 text-orange-600" />
                    Program Interest *
                  </Label>
                  <Select value={enquiryForm.program} onValueChange={(value) => setEnquiryForm({...enquiryForm, program: value})}>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select program of interest" />
                    </SelectTrigger>
                    <SelectContent>
                      {programs.map((program) => (
                        <SelectItem key={program} value={program}>
                          {program}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 text-lg mt-6"
                >
                  Submit Enquiry
                </Button>
              </form>
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
    </div>
  );
};

export default Index;
