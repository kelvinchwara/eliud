import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, Download, BookOpen, Users, Award, Globe } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#d1ac92' }}>
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4" style={{ color: '#5E4A35' }}>About Eliud Mautia</h1>
            <p className="text-xl" style={{ color: '#A37B5C' }}>IGCSE | IBDP | A-LEVEL MATH TEACHER | IBDP MAA EXAMINER</p>
          </div>

          <Card className="mb-8 bg-white hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold mb-4" style={{ color: '#5E4A35' }}>Professional Summary</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                I am a highly motivated and innovative professional with a flexible mindset, 
                adept at embracing new ideas and changes, and driven by a commitment to 
                achieving results through teamwork. I excel in leadership, organization, and 
                interpersonal communication, bringing extensive experience in Secondary 
                Mathematics education across IGCSE, A Level, IB Diploma, and 8.4.4. systems.
              </p>
              <p className="text-gray-700 leading-relaxed">
                As a passionate educator, I employ an effective and positive teaching style, 
                leveraging technology to cultivate independent learners. My advanced skills in 
                communication, planning, socialization, and problem solving empower me to excel 
                as a mathematics educator.
              </p>
            </CardContent>
          </Card>

          <Card className="mb-8 bg-white hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-8">
              <div className="flex items-center mb-4">
                <BookOpen className="mr-3 h-6 w-6" style={{ color: '#A37B5C' }} />
                <h2 className="text-2xl font-semibold" style={{ color: '#5E4A35' }}>Founder of Elton Soma School</h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-6">
                Am not only a dedicated Mathematics educator but also the visionary founder of Elton Soma School. 
                Driven by a passion to provide accessible, high-quality education, Soma school is here to nurture 
                young minds and foster love for learning, especially in the crucial fields of STEM. Elton Soma 
                School stands as a testament to the belief in holistic education, combining rigorous academics 
                with character development and practical skills.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="https://soma-school.onrender.com/" target="_blank" rel="noopener noreferrer">
                  <Button 
                    className="text-white hover:opacity-90 transition-opacity"
                    style={{ backgroundColor: '#A37B5C' }}
                  >
                    Read more
                  </Button>
                </a>
                <a
                  href="/MAUTIA%20ELIUD%20RESUME.pdf"
                  download
                  className="flex items-center gap-2 border-2 border-[#5E4A35] text-[#5E4A35] hover:bg-opacity-10 px-3 py-1 rounded inline-flex"
                  style={{ borderColor: '#5E4A35', color: '#5E4A35' }}
                >
                  <Download className="h-4 w-4" />
                  Download My Resume
                </a>
              </div>
            </CardContent>
          </Card>

          <div className="text-center mb-8">
            <p className="text-lg font-medium" style={{ color: '#5E4A35' }}>
              Ready to learn more about my professional journey and qualifications?
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <Card className="bg-white hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center" style={{ color: '#5E4A35' }}>
                  <Phone className="mr-2 h-5 w-5" style={{ color: '#A37B5C' }} />
                  Contact Information
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Phone className="mr-3 h-4 w-4 text-gray-500" />
                    <a 
                      href="tel:+8613038303477" 
                      className="hover:underline cursor-pointer transition-colors"
                      style={{ color: '#A37B5C' }}
                    >
                      +86 130 3830 3477
                    </a>
                  </div>
                  <div className="flex items-center">
                    <Phone className="mr-3 h-4 w-4 text-gray-500" />
                    <a 
                      href="tel:+254720059892" 
                      className="hover:underline cursor-pointer transition-colors"
                      style={{ color: '#A37B5C' }}
                    >
                      +254 720 059 892
                    </a>
                  </div>
                  <div className="flex items-center">
                    <Mail className="mr-3 h-4 w-4 text-gray-500" />
                    <a 
                      href="mailto:mautiaeliud@gmail.com" 
                      className="hover:underline cursor-pointer transition-colors"
                      style={{ color: '#A37B5C' }}
                    >
                      mautiaeliud@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="mr-3 h-4 w-4 text-gray-500" />
                    <span>401122, Chongqing, China</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center" style={{ color: '#5E4A35' }}>
                  <Globe className="mr-2 h-5 w-5" style={{ color: '#A37B5C' }} />
                  Languages
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <Badge className="text-white" style={{ backgroundColor: '#A37B5C' }}>🇺🇸 English</Badge>
                    <span className="text-sm text-gray-600">Fluent</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <Badge className="text-white" style={{ backgroundColor: '#aa8f7a' }}>🇰🇪 Kiswahili</Badge>
                    <span className="text-sm text-gray-600">Fluent</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <Badge className="text-white" style={{ backgroundColor: '#5E4A35' }}>🇨🇳 Mandarin</Badge>
                    <span className="text-sm text-gray-600">Fluent</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;