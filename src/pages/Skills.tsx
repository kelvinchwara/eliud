import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  MessageCircle, Brain, Users, Lightbulb, Target, BookOpen, Globe, 
  Award, Monitor, Languages, Download, ExternalLink 
} from 'lucide-react';

const Skills = () => {
  const competencies = [
    { name: "Communication (Verbal & Written)", icon: <MessageCircle className="h-5 w-5" /> },
    { name: "Analytical Thinking & Data Mining", icon: <Brain className="h-5 w-5" /> },
    { name: "Innovation & Conflict Resolution", icon: <Lightbulb className="h-5 w-5" /> },
    { name: "Leadership & Coaching", icon: <Users className="h-5 w-5" /> },
    { name: "Problem Solving & Decision Making", icon: <Target className="h-5 w-5" /> },
    { name: "Cultural Awareness & Inclusivity", icon: <Globe className="h-5 w-5" /> },
    { name: "Tech Integration & Growth Mindset", icon: <Monitor className="h-5 w-5" /> },
    { name: "Lifelong Learning & Interpersonal Skills", icon: <BookOpen className="h-5 w-5" /> },
    { name: "Collaboration & Emotional Intelligence", icon: <Users className="h-5 w-5" /> },
    { name: "Planning, Reflection & Organization", icon: <Target className="h-5 w-5" /> },
    { name: "Inquiry-Based & Project Learning", icon: <Lightbulb className="h-5 w-5" /> },
    { name: "Curriculum Design & Lesson Planning", icon: <BookOpen className="h-5 w-5" /> }
  ];

  const languages = [
    { name: "English", level: "Fluent", flag: "🇺🇸" },
    { name: "Swahili", level: "Fluent", flag: "🇰🇪" },
    { name: "Mandarin", level: "Fluent", flag: "🇨🇳" }
  ];

  const techSkills = [
    "Microsoft Office Suite", "Google Workspace", "Moodle & Google Classroom",
    "GeoGebra & Desmos", "Excel & SPSS"
  ];

  const certifications = [
    "IB DP AA & AI Workshops", "Cambridge IGCSE & A-Level Training",
    "Online Teaching Practices Certificate", "First Aid & CPR"
  ];

  const education = [
    "M.Ed., University of Liverpool John Moores", "B.Ed., Nairobi"
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#d1ac92' }}>
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4" style={{ color: '#5E4A35' }}>Professional Skills & Expertise</h1>
            <p className="text-xl" style={{ color: '#A37B5C' }}>Comprehensive skill set for educational excellence</p>
          </div>

          {/* Key Competencies */}
          <Card className="mb-8 bg-white hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl" style={{ color: '#5E4A35' }}>
                <Brain className="mr-3 h-6 w-6" style={{ color: '#A37B5C' }} />
                Key Competencies
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {competencies.map((skill, index) => (
                  <div 
                    key={index} 
                    className="flex items-center p-3 rounded-lg border hover:shadow-md transition-shadow cursor-pointer"
                    style={{ borderColor: '#A37B5C' }}
                  >
                    <div className="mr-3" style={{ color: '#A37B5C' }}>{skill.icon}</div>
                    <span className="text-sm font-medium" style={{ color: '#5E4A35' }}>{skill.name}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Languages */}
            <Card className="bg-white hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center" style={{ color: '#5E4A35' }}>
                  <Languages className="mr-3 h-6 w-6" style={{ color: '#A37B5C' }} />
                  Languages
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {languages.map((lang, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center">
                        <span className="text-2xl mr-3">{lang.flag}</span>
                        <span className="font-medium" style={{ color: '#5E4A35' }}>{lang.name}</span>
                      </div>
                      <Badge className="text-white" style={{ backgroundColor: '#A37B5C' }}>
                        {lang.level}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Technology Skills */}
            <Card className="bg-white hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center" style={{ color: '#5E4A35' }}>
                  <Monitor className="mr-3 h-6 w-6" style={{ color: '#A37B5C' }} />
                  Technology Skills
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {techSkills.map((tech, index) => (
                    <Badge 
                      key={index} 
                      variant="outline" 
                      className="mr-2 mb-2 text-white"
                      style={{ backgroundColor: '#aa8f7a', borderColor: '#aa8f7a' }}
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Certifications */}
            <Card className="bg-white hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center" style={{ color: '#5E4A35' }}>
                  <Award className="mr-3 h-6 w-6" style={{ color: '#A37B5C' }} />
                  Certifications
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {certifications.map((cert, index) => (
                    <div key={index} className="flex items-center p-2 border-l-4" style={{ borderColor: '#A37B5C' }}>
                      <Award className="mr-3 h-4 w-4" style={{ color: '#A37B5C' }} />
                      <span style={{ color: '#5E4A35' }}>{cert}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Education */}
            <Card className="bg-white hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center" style={{ color: '#5E4A35' }}>
                  <BookOpen className="mr-3 h-6 w-6" style={{ color: '#A37B5C' }} />
                  Education
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {education.map((edu, index) => (
                    <div key={index} className="flex items-center p-2 border-l-4" style={{ borderColor: '#A37B5C' }}>
                      <BookOpen className="mr-3 h-4 w-4" style={{ color: '#A37B5C' }} />
                      <span style={{ color: '#5E4A35' }}>{edu}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* CTA Section */}
          <Card className="bg-white hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-semibold mb-4" style={{ color: '#5E4A35' }}>
                Ready to explore my full professional profile?
              </h3>
              <div className="flex flex-wrap justify-center gap-4">
                <Button 
                  className="text-white hover:opacity-90 transition-opacity flex items-center gap-2"
                  style={{ backgroundColor: '#A37B5C' }}
                >
                  <Download className="h-4 w-4" />
                  Download Resume
                </Button>
                <Button 
                  variant="outline" 
                  className="flex items-center gap-2 border-2 hover:bg-opacity-10"
                  style={{ borderColor: '#5E4A35', color: '#5E4A35' }}
                >
                  <ExternalLink className="h-4 w-4" />
                  View Portfolio
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Skills;