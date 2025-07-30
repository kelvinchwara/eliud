import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { GraduationCap, Award, Users, Calendar, Download, ExternalLink, BookOpen } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: "Masters in Education Arts",
      institution: "Liverpool John Moores University",
      location: "Liverpool, UK",
      year: "2026",
      description: "Pursuing a Master's in Education with a specialization in Leadership and Management to enhance Educational outcomes."
    },
    {
      degree: "Bachelor of Education Arts",
      institution: "University of Nairobi",
      location: "Nairobi, Kenya",
      year: "2018",
      description: "Bachelors of Education (Arts), Specialized in Mathematics."
    }
  ];

  const courses = [
    { name: "CAT 3 IBDP MAA", provider: "International Baccalaureate Organisation", date: "Mar 2025" },
    { name: "CAT 2 IBDP MAA", provider: "International Baccalaureate Organisation", date: "Mar 2024" },
    { name: "Learn Today, Lead Tomorrow", provider: "Yew Chung Yew Wah Education Foundation", date: "Feb 2024" },
    { name: "YCYW Service Learning", provider: "Yew Chung International School Chongqing", date: "Mar 2024 - Present" },
    { name: "Additional Math (0606) PD", provider: "Cambridge International Examinations", date: "Jun 2022" },
    { name: "Technology and Online Learning", provider: "Edexcel Examinations Board", date: "Jul 2021" },
    { name: "Leadership Training on Tension Management", provider: "University of Nairobi", date: "Mar 2014" }
  ];

  const activities = [
    {
      title: "Model United Nations Faculty Advisor",
      organization: "Yew Chung International School",
      period: "Nov 2023 - Present",
      description: "Helping club members engage in UN simulations, learning about UN principles, SDGs, and debating world issues."
    },
    {
      title: "Secondary House Coordinator",
      organization: "YCIS Chongqing",
      period: "Aug 2024 - Present",
      description: "Coordinating house activities, fostering inclusive environment, and promoting unity within the school community."
    }
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#d1ac92' }}>
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4" style={{ color: '#5E4A35' }}>Education & Development</h1>
            <p className="text-xl" style={{ color: '#A37B5C' }}>Academic qualifications and professional development</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <Card className="bg-white hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center" style={{ color: '#5E4A35' }}>
                  <GraduationCap className="mr-3 h-6 w-6" style={{ color: '#A37B5C' }} />
                  Formal Education
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {education.map((edu, index) => (
                    <div key={index} className="border-l-4 pl-4" style={{ borderColor: '#A37B5C' }}>
                      <h3 className="font-semibold text-lg" style={{ color: '#5E4A35' }}>{edu.degree}</h3>
                      <p style={{ color: '#A37B5C' }}>{edu.institution}</p>
                      <p className="text-sm text-gray-500">{edu.location} • {edu.year}</p>
                      <p className="text-gray-700 mt-2">{edu.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center" style={{ color: '#5E4A35' }}>
                  <Users className="mr-3 h-6 w-6" style={{ color: '#A37B5C' }} />
                  Extra-Curricular Activities
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {activities.map((activity, index) => (
                    <div key={index} className="border-l-4 pl-4" style={{ borderColor: '#A37B5C' }}>
                      <h3 className="font-semibold" style={{ color: '#5E4A35' }}>{activity.title}</h3>
                      <p style={{ color: '#A37B5C' }}>{activity.organization}</p>
                      <p className="text-sm text-gray-500">{activity.period}</p>
                      <p className="text-gray-700 mt-2 text-sm">{activity.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="mb-8 bg-white hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="flex items-center" style={{ color: '#5E4A35' }}>
                <Award className="mr-3 h-6 w-6" style={{ color: '#A37B5C' }} />
                Professional Courses & Certifications
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                {courses.map((course, index) => (
                  <div 
                    key={index} 
                    className="p-4 border rounded-lg hover:shadow-md transition-shadow cursor-pointer"
                    style={{ borderColor: '#A37B5C' }}
                  >
                    <h3 className="font-semibold" style={{ color: '#5E4A35' }}>{course.name}</h3>
                    <p className="text-sm" style={{ color: '#A37B5C' }}>{course.provider}</p>
                    <Badge 
                      variant="outline" 
                      className="mt-2 text-white"
                      style={{ backgroundColor: '#aa8f7a', borderColor: '#aa8f7a' }}
                    >
                      <Calendar className="mr-1 h-3 w-3" />
                      {course.date}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* CTA Section */}
          <Card className="bg-white hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-semibold mb-4" style={{ color: '#5E4A35' }}>
                Want to learn more about my educational journey?
              </h3>
              <p className="mb-6" style={{ color: '#A37B5C' }}>
                Discover my complete academic background and professional development achievements.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button 
                  className="text-white hover:opacity-90 transition-opacity flex items-center gap-2"
                  style={{ backgroundColor: '#A37B5C' }}
                >
                  <Download className="h-4 w-4" />
                  Download Transcripts
                </Button>
                <Button 
                  variant="outline" 
                  className="flex items-center gap-2 border-2 hover:bg-opacity-10"
                  style={{ borderColor: '#5E4A35', color: '#5E4A35' }}
                >
                  <BookOpen className="h-4 w-4" />
                  View Certifications
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Education;