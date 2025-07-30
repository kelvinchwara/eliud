import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, GraduationCap, Briefcase, Award, ArrowRight } from 'lucide-react';

const Index = () => {
  return (
    <div 
      className="min-h-screen"
      style={{
       
        backgroundImage: 'url(/eliu.png)',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="min-h-screen bg-black bg-opacity-40">
        {/* Hero Section */}
        <section className="py-12 sm:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="mb-6 sm:mb-8">
                <div 
                  className="w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-4 sm:mb-6 rounded-full flex items-center justify-center"
                  style={{ background: 'linear-gradient(135deg, #A37B5C, #5E4A35)' }}
                >
                  <GraduationCap className="h-12 w-12 sm:h-16 sm:w-16 text-white" />
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4">Eliud Mautia</h1>
                <p className="text-lg sm:text-xl md:text-2xl mb-4 sm:mb-6 px-2" style={{ color: '#A37B5C' }}>
                  IGCSE | IBDP | A-LEVEL MATH TEACHER | IBDP MAA EXAMINER
                </p>
                <p className="text-sm sm:text-base md:text-lg text-gray-100 max-w-3xl mx-auto leading-relaxed px-4">
                  Highly motivated mathematics educator with extensive experience across international curricula, 
                  passionate about fostering independent learning through innovative teaching methods.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center gap-2 sm:gap-4 mb-6 sm:mb-8 px-2">
                <div className="flex items-center bg-white bg-opacity-90 px-3 sm:px-4 py-2 rounded-full shadow text-sm sm:text-base">
                  <Phone className="h-3 w-3 sm:h-4 sm:w-4 mr-2" style={{ color: '#A37B5C' }} />
                  <a 
                    href="tel:+8613038303477" 
                    className="hover:underline"
                    style={{ color: '#5E4A35' }}
                  >
                    +86 130 3830 3477
                  </a>
                </div>
                <div className="flex items-center bg-white bg-opacity-90 px-3 sm:px-4 py-2 rounded-full shadow text-sm sm:text-base">
                  <Mail className="h-3 w-3 sm:h-4 sm:w-4 mr-2" style={{ color: '#A37B5C' }} />
                  <a 
                    href="mailto:mautiaeliud@gmail.com" 
                    className="hover:underline break-all"
                    style={{ color: '#5E4A35' }}
                  >
                    mautiaeliud@gmail.com
                  </a>
                </div>
                <div className="flex items-center bg-white bg-opacity-90 px-3 sm:px-4 py-2 rounded-full shadow text-sm sm:text-base">
                  <MapPin className="h-3 w-3 sm:h-4 sm:w-4 mr-2" style={{ color: '#A37B5C' }} />
                  <span style={{ color: '#5E4A35' }}>Chongqing, China</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 px-4">
                <Link to="/about" className="w-full sm:w-auto">
                  <Button 
                    size="lg" 
                    className="w-full sm:w-auto flex items-center justify-center text-white hover:bg-opacity-80"
                    style={{ backgroundColor: '#A37B5C' }}
                  >
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link to="/contact" className="w-full sm:w-auto">
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="w-full sm:w-auto bg-white bg-opacity-90 hover:bg-opacity-100"
                    style={{ color: '#5E4A35', borderColor: '#A37B5C' }}
                  >
                    Get In Touch
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Overview */}
        <section className="py-12 sm:py-16" style={{ backgroundColor: '#d1ac92' }}>
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12" style={{ color: '#5E4A35' }}>
                Professional Overview
              </h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
                <Card className="text-center hover:shadow-lg transition-shadow bg-white">
                  <CardContent className="p-6 sm:p-8">
                    <Award className="h-10 w-10 sm:h-12 sm:w-12 mx-auto mb-3 sm:mb-4" style={{ color: '#A37B5C' }} />
                    <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4" style={{ color: '#5E4A35' }}>Expert Skills</h3>
                    <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">Comprehensive skill set in communication, leadership, and educational innovation</p>
                    <Link to="/skills">
                      <Button 
                        variant="outline"
                        size="sm"
                        style={{ color: '#A37B5C', borderColor: '#A37B5C' }}
                        className="hover:bg-opacity-10 text-xs sm:text-sm"
                      >
                        View Skills
                      </Button>
                    </Link>
                  </CardContent>
                </Card>

                <Card className="text-center hover:shadow-lg transition-shadow bg-white">
                  <CardContent className="p-6 sm:p-8">
                    <Briefcase className="h-10 w-10 sm:h-12 sm:w-12 mx-auto mb-3 sm:mb-4" style={{ color: '#aa8f7a' }} />
                    <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4" style={{ color: '#5E4A35' }}>Rich Experience</h3>
                    <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">5+ years teaching mathematics across international schools in China, Ethiopia, and Kenya</p>
                    <Link to="/experience">
                      <Button 
                        variant="outline"
                        size="sm"
                        style={{ color: '#A37B5C', borderColor: '#A37B5C' }}
                        className="hover:bg-opacity-10 text-xs sm:text-sm"
                      >
                        View Experience
                      </Button>
                    </Link>
                  </CardContent>
                </Card>

                <Card className="text-center hover:shadow-lg transition-shadow bg-white sm:col-span-2 md:col-span-1">
                  <CardContent className="p-6 sm:p-8">
                    <GraduationCap className="h-10 w-10 sm:h-12 sm:w-12 mx-auto mb-3 sm:mb-4" style={{ color: '#5E4A35' }} />
                    <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4" style={{ color: '#5E4A35' }}>Education</h3>
                    <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">Master's in Education Arts and continuous professional development</p>
                    <Link to="/education">
                      <Button 
                        variant="outline"
                        size="sm"
                        style={{ color: '#A37B5C', borderColor: '#A37B5C' }}
                        className="hover:bg-opacity-10 text-xs sm:text-sm"
                      >
                        View Education
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Languages */}
        <section className="py-12 sm:py-16 bg-white bg-opacity-90">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8" style={{ color: '#5E4A35' }}>Languages</h2>
              <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 px-2">
                <Badge 
                  className="text-base sm:text-lg px-4 sm:px-6 py-2 text-white"
                  style={{ backgroundColor: '#A37B5C' }}
                >
                  🇺🇸 English
                </Badge>
                <Badge 
                  className="text-base sm:text-lg px-4 sm:px-6 py-2 text-white"
                  style={{ backgroundColor: '#aa8f7a' }}
                >
                  🇰🇪 Kiswahili
                </Badge>
                <Badge 
                  className="text-base sm:text-lg px-4 sm:px-6 py-2 text-white"
                  style={{ backgroundColor: '#5E4A35' }}
                >
                  🇨🇳 Mandarin
                </Badge>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Index;
