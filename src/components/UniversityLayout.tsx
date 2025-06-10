
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Building, Users, Award, BookOpen, X, ChevronRight, Star, Clock, Users2 } from "lucide-react";
import { toast } from "@/hooks/use-toast";

interface Course {
  title: string;
  duration?: string;
  category?: string;
  image?: string;
  description?: string;
  highlights?: string[];
  eligibility?: string;
  career?: string[];
}

interface Feature {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  color?: string;
}

interface UniversityData {
  name: string;
  location: string;
  tagline: string;
  heroImage: string;
  primaryColor: string;
  gradientColors: string;
  about: string;
  features: Feature[];
  courses: Course[];
  established: string;
  students: string;
  link?: string;
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
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isCourseDetailOpen, setIsCourseDetailOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Registration submitted:", formData);
    toast({
      title: "Application Submitted Successfully!",
      description: "We'll contact you soon with more information about the course.",
    });
    setFormData({ name: "", email: "", phone: "", course: "", message: "" });
    setIsContactOpen(false);
    setIsCourseDetailOpen(false);
  };

  const handleCourseClick = (course: Course) => {
    setSelectedCourse({
      ...course,
      description: course.description || `Comprehensive ${course.title} program designed to provide in-depth knowledge and practical skills in the field.`,
      highlights: course.highlights || [
        "Industry-relevant curriculum",
        "Experienced faculty",
        "Practical training",
        "Placement assistance",
        "Modern infrastructure"
      ],
      eligibility: course.eligibility || "12th grade or equivalent",
      career: course.career || ["Research", "Industry", "Academia", "Entrepreneurship"]
    });
    setIsCourseDetailOpen(true);
  };

  const handleApplyNow = () => {
    setFormData({...formData, course: selectedCourse?.title || ""});
    setIsCourseDetailOpen(false);
    setIsContactOpen(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-sm shadow-lg border-b sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-lg">{universityData.name.charAt(0)}</span>
                </div>
                <div>
                  <div className="font-bold text-gray-900 text-lg">{universityData.name.split(' ').slice(0, 3).join(' ')}</div>
                  <div className="text-sm text-gray-600 flex items-center">
                    <Building className="w-3 h-3 mr-1" />
                    {universityData.location}
                  </div>
                </div>
              </div>
            </div>
            <div className="text-sm text-gray-500 font-medium">Excellence in Education</div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section 
        className="relative py-24 bg-cover bg-center bg-no-repeat overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)), url(${universityData.heroImage})`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-purple-900/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm mb-6">
              <Star className="w-4 h-4 mr-2 text-yellow-400" />
              Est. {universityData.established} • {universityData.students} Students
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              {universityData.name}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed font-light">
              {universityData.tagline}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                onClick={() => setIsContactOpen(true)}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-lg px-8 py-4 rounded-xl font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                Apply Now
                <ChevronRight className="w-5 h-5 ml-2" />
              </Button>
              {universityData.link && (
                <Button 
                  variant="outline" 
                  size="lg"
                  asChild
                  className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 text-lg px-8 py-4 rounded-xl font-semibold"
                >
                  <a href={universityData.link} target="_blank" rel="noopener noreferrer">
                    Visit Website
                  </a>
                </Button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-br from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-blue-700 text-sm font-medium mb-4">
              <Award className="w-4 h-4 mr-2" />
              Why Choose Us
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Excellence in Every Aspect
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We are committed to providing quality education and fostering innovation and research excellence.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {universityData.features.map((feature, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                  <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center ${feature.color || 'bg-blue-100'} group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className={`h-8 w-8 ${index === 0 ? 'text-blue-600' : index === 1 ? 'text-green-600' : index === 2 ? 'text-orange-600' : 'text-red-600'}`} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-center text-sm">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programmes Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-purple-100 rounded-full text-purple-700 text-sm font-medium mb-4">
              <BookOpen className="w-4 h-4 mr-2" />
              Academic Programs
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Programmes Offered
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Advance your career by choosing the course that interests you the most
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {universityData.courses.map((course, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 overflow-hidden border-0 shadow-lg cursor-pointer bg-gradient-to-br from-white to-gray-50"
                onClick={() => handleCourseClick(course)}
              >
                <div className="h-48 bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900 relative overflow-hidden">
                  {course.image ? (
                    <img src={course.image} alt={course.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <BookOpen className="h-16 w-16 text-white/80" />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-bold text-lg leading-tight">{course.title}</h3>
                  </div>
                  <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ChevronRight className="w-4 h-4 text-white" />
                  </div>
                </div>
                <div className="p-4">
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="w-full text-blue-600 hover:text-blue-700 hover:bg-blue-50 font-medium"
                  >
                    Learn More
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1562774053-701939374585?w=1200&q=80')] bg-cover bg-center opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-6">
              <Building className="w-4 h-4 mr-2" />
              Our Story
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
              About {universityData.name.split(' ').slice(-2).join(' ')}
            </h2>
            <div className="prose prose-lg text-white/90 max-w-none">
              <p className="text-lg leading-relaxed mb-8 font-light">
                {universityData.about}
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">{universityData.established}</div>
                <div className="text-gray-300 text-sm">Established</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">{universityData.students}</div>
                <div className="text-gray-300 text-sm">Students</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">{universityData.courses.length}+</div>
                <div className="text-gray-300 text-sm">Programs</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">A+</div>
                <div className="text-gray-300 text-sm">NAAC Grade</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Detail Dialog */}
      <Dialog open={isCourseDetailOpen} onOpenChange={setIsCourseDetailOpen}>
        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-gray-900 mb-2">
              {selectedCourse?.title}
            </DialogTitle>
            <DialogDescription className="text-gray-600 text-base">
              {selectedCourse?.description}
            </DialogDescription>
          </DialogHeader>
          
          {selectedCourse && (
            <div className="space-y-6 mt-6">
              {/* Program Highlights */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                  <Star className="w-5 h-5 mr-2 text-yellow-500" />
                  Program Highlights
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {selectedCourse.highlights?.map((highlight, index) => (
                    <div key={index} className="flex items-center space-x-2 text-gray-700">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-sm">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Additional Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                    <Users2 className="w-4 h-4 mr-2 text-green-500" />
                    Eligibility
                  </h4>
                  <p className="text-gray-600 text-sm">{selectedCourse.eligibility}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                    <Clock className="w-4 h-4 mr-2 text-orange-500" />
                    Career Opportunities
                  </h4>
                  <div className="flex flex-wrap gap-1">
                    {selectedCourse.career?.map((career, index) => (
                      <span key={index} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                        {career}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t">
                <Button 
                  onClick={handleApplyNow}
                  className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium"
                >
                  Apply Now
                </Button>
                <Button 
                  variant="outline" 
                  onClick={() => setIsCourseDetailOpen(false)}
                  className="flex-1"
                >
                  Close
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Contact Us Dialog */}
      <Dialog open={isContactOpen} onOpenChange={setIsContactOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold">Contact {universityData.name}</DialogTitle>
            <DialogDescription>
              Fill out the form below and we'll get back to you with more information.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="name">Full Name *</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                required
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                required
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="phone">Phone Number *</Label>
              <Input
                id="phone"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                required
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="course">Course Interest</Label>
              <Select value={formData.course} onValueChange={(value) => setFormData({...formData, course: value})}>
                <SelectTrigger className="mt-1">
                  <SelectValue placeholder="Select a course" />
                </SelectTrigger>
                <SelectContent>
                  {universityData.courses.map((course, index) => (
                    <SelectItem key={index} value={course.title}>
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
                className="mt-1"
              />
            </div>
            <div className="flex gap-3 pt-4">
              <Button type="submit" className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                Submit Application
              </Button>
              <Button type="button" variant="outline" onClick={() => setIsContactOpen(false)} className="flex-1">
                Cancel
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default UniversityLayout;
