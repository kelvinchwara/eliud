import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MapPin, Calendar, GraduationCap, Download, ExternalLink, Briefcase } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "IGCSE | IBDP Teacher of Mathematics",
      company: "Yew Chung International School",
      location: "Chongqing, China",
      period: "Aug 2023 - Present",
      responsibilities: [
        "Delivering comprehensive instruction in IGCSE, AA, and AI IBDP Mathematics at both Standard and Higher Levels",
        "Conducting continuous assessment of student progress, maintaining records per school requirements",
        "Developing differentiated instructional materials for diverse student needs",
        "Participating in curriculum development and review processes",
        "Integrating technology into teaching methodologies",
        "Collaborating with colleagues, parents, and students"
      ]
    },
    {
      title: "IGCSE | IBDP Teacher of Mathematics",
      company: "Sandford International School",
      location: "Addis Ababa, Ethiopia",
      period: "Aug 2021 - Jul 2023",
      responsibilities: [
        "Taught IGCSE, AA, and AI IBDP Mathematics at Standard and Higher levels",
        "Researched and integrated effective teaching aids",
        "Supported school volleyball and football teams",
        "Led parent-teacher conferences",
        "Conducted life skills training during PHSE sessions",
        "Maintained communication with students and parents"
      ]
    },
    {
      title: "IGCSE | A-Level Teacher of Mathematics",
      company: "British International School",
      location: "Addis Ababa, Ethiopia",
      period: "Sep 2019 - Jul 2021",
      responsibilities: [
        "Taught IGCSE and A-Level Mathematics",
        "Conducted after-school remedial classes",
        "Implemented Think, Pair, Share strategy",
        "Coached students in regional 'Mathletics' competition",
        "Introduced innovative teaching methods"
      ]
    },
    {
      title: "IGCSE | IBDP | A-Level Teacher & Lead Teacher",
      company: "Nairobi Home School",
      location: "Nairobi, Kenya",
      period: "Jan 2018 - Jul 2019",
      responsibilities: [
        "Led development of mathematics curricula for multiple systems",
        "Directed recruitment and assessment of teaching staff",
        "Taught Mathematics at IGCSE, IB, and A-Level",
        "Managed school operations",
        "Implemented student welfare programs"
      ]
    }
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#d1ac92' }}>
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4" style={{ color: '#5E4A35' }}>Work Experience</h1>
            <p className="text-xl" style={{ color: '#A37B5C' }}>Professional journey in mathematics education</p>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 bg-white">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center" style={{ color: '#5E4A35' }}>
                    <Briefcase className="mr-3 h-5 w-5" style={{ color: '#A37B5C' }} />
                    {exp.title}
                  </CardTitle>
                  <div className="flex flex-wrap gap-4 text-sm" style={{ color: '#A37B5C' }}>
                    <div className="flex items-center">
                      <GraduationCap className="mr-2 h-4 w-4" />
                      {exp.company}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="mr-2 h-4 w-4" />
                      {exp.location}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="mr-2 h-4 w-4" />
                      {exp.period}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {exp.responsibilities.map((resp, respIndex) => (
                      <li key={respIndex} className="flex items-start">
                        <span className="mr-2 mt-2 w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: '#A37B5C' }}></span>
                        <span className="text-gray-700">{resp}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <Card className="mt-12 bg-white hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-semibold mb-4" style={{ color: '#5E4A35' }}>
                Interested in my professional background?
              </h3>
              <p className="mb-6" style={{ color: '#A37B5C' }}>
                Explore my complete work history and achievements in mathematics education.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="/MAUTIA%20ELIUD%20RESUME.pdf"
                  download
                  className="text-white hover:opacity-90 transition-opacity flex items-center gap-2 px-3 py-1 rounded inline-flex"
                  style={{ backgroundColor: '#A37B5C' }}
                >
                  <Download className="h-4 w-4" />
                  Download Full CV
                </a>
                <a
                  href="#contact"
                  className="flex items-center gap-2 border-2 border-[#5E4A35] hover:bg-opacity-10 px-3 py-1 rounded inline-flex"
                  style={{ borderColor: '#5E4A35', color: '#5E4A35' }}
                >
                  <ExternalLink className="h-4 w-4" />
                  View References
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Experience;