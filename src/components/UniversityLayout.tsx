
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Building, Users, Award, BookOpen, ArrowLeft, Mail, Phone, User } from "lucide-react";
import { toast } from "@/hooks/use-toast";

interface Course {
  title: string;
  duration: string;
  category: string;
}

interface Feature {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

interface UniversityData {
  name: string;
  location: string;
  heroImage: string;
  primaryColor: string;
  gradientColors: string;
  about: string;
  features: Feature[];
  courses: Course[];
  established: string;
  students: string;
}

interface UniversityLayoutProps {
  universityData: UniversityData;
}

const UniversityLayout = ({ universityData }: UniversityLayoutProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    message: ""
  });
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Registration submitted:", formData);
    toast({
      title: "Registration Successful!",
      description: "We'll contact you soon with more information.",
    });
    setFormData({ name: "", email: "", phone: "", course: "", message: "" });
    setIsOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
              <ArrowLeft className="h-5 w-5" />
              <Building className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">Back to Universities</span>
            </Link>
            <div className="text-sm text-gray-600">sairamtechincubator.in</div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className={`relative py-32 bg-gradient-to-r ${universityData.gradientColors} overflow-hidden`}>
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            {universityData.name}
          </h1>
          <p className="text-xl md:text-2xl mb-4 animate-fade-in">
            {universityData.location}
          </p>
          <p className="text-lg mb-12 max-w-3xl mx-auto animate-fade-in">
            Empowering minds, shaping futures - Join us in our journey of academic excellence and innovation.
          </p>
          
          <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
              <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100 text-lg px-8 py-4 animate-fade-in hover:scale-105 transition-transform">
                Register Now
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>Register for {universityData.name}</DialogTitle>
                <DialogDescription>
                  Fill out the form below and we'll get back to you with more information.
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="course">Course Interest</Label>
                  <Select value={formData.course} onValueChange={(value) => setFormData({...formData, course: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a course" />
                    </SelectTrigger>
                    <SelectContent>
                      {universityData.courses.slice(0, 6).map((course) => (
                        <SelectItem key={course.title} value={course.title}>
                          {course.title}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="message">Additional Message (Optional)</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder="Tell us more about your interests..."
                  />
                </div>
                <Button type="submit" className="w-full">
                  Submit Registration
                </Button>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Why Choose {universityData.name}?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {universityData.features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow animate-fade-in">
                <CardHeader>
                  <feature.icon className={`h-12 w-12 mx-auto mb-4 ${universityData.primaryColor}`} />
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Programmes Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Programmes Offered
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {universityData.courses.map((course, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:scale-105 animate-fade-in">
                <CardHeader>
                  <div className={`h-32 bg-gradient-to-r ${universityData.gradientColors} rounded-lg mb-4 flex items-center justify-center`}>
                    <BookOpen className="h-12 w-12 text-white" />
                  </div>
                  <CardTitle className="text-lg">{course.title}</CardTitle>
                  <CardDescription>
                    {course.duration} • {course.category}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full hover:scale-105 transition-transform">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">
                About {universityData.name}
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                {universityData.about}
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900">{universityData.established}</div>
                  <div className="text-gray-600">Established</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900">{universityData.students}</div>
                  <div className="text-gray-600">Students</div>
                </div>
              </div>
            </div>
            
            <div className={`h-96 bg-gradient-to-r ${universityData.gradientColors} rounded-xl flex items-center justify-center`}>
              <Building className="h-32 w-32 text-white opacity-80" />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold mb-4">{universityData.name}</h3>
              <p className="text-gray-400 mb-4">
                Excellence in education, innovation in research, and commitment to student success.
              </p>
              <div className="flex space-x-4">
                <Button variant="outline" size="sm" className="text-gray-400 border-gray-600 hover:text-white hover:border-white">
                  Facebook
                </Button>
                <Button variant="outline" size="sm" className="text-gray-400 border-gray-600 hover:text-white hover:border-white">
                  Twitter
                </Button>
                <Button variant="outline" size="sm" className="text-gray-400 border-gray-600 hover:text-white hover:border-white">
                  LinkedIn
                </Button>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Admissions</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Academics</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Research</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Campus Life</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-gray-400">
                <div className="flex items-center space-x-2">
                  <Building className="h-4 w-4" />
                  <span>Chennai, Tamil Nadu</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4" />
                  <span>info@university.edu</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <span>+91 44 1234 5678</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 {universityData.name}. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default UniversityLayout;
