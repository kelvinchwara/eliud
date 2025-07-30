import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Mail, Phone, MapPin, User, MessageCircle, Send, 
  Linkedin, Twitter, Facebook, Instagram, Youtube, Github
} from 'lucide-react';
import ContactForm from '@/components/ContactForm';

const Contact = () => {
  const references = [
    {
      name: "Mr. Garry James",
      title: "Head of Secondary",
      organization: "Yew Chung International School, Chongqing China",
      email: "garry.james@ycis.com"
    },
    {
      name: "Ms. Prachi Gupta",
      title: "Deputy Head of Secondary",
      organization: "Yew Chung International School Chongqing, China",
      email: "prachi.gupta@ycis.com",
      phone: "+86 136 7129 8529"
    },
    {
      name: "Mr. Richard Cogley",
      title: "Head of School",
      organization: "Sandford International School, Addis Ababa, Ethiopia",
      email: "richard.cogley@sandfordschool.org",
      phone: "+251 944 074 144"
    },
    {
      name: "Mr. Ted Asfaw",
      title: "Head of Secondary",
      organization: "British International School Addis Ababa, Ethiopia",
      email: "bisheadups@gmail.com",
      phone: "+251 962 598 500"
    },
    {
      name: "Mrs. Rose Kiema",
      title: "Lecturer",
      organization: "Technical University of Kenya, Nairobi, Kenya",
      email: "rosekiema@yahoo.com",
      phone: "+254 722 357 010"
    }
  ];

  const socialLinks = [
    { name: 'LinkedIn', icon: <Linkedin className="h-6 w-6" />, url: '#', color: '#0077B5' },
    { name: 'Twitter', icon: <Twitter className="h-6 w-6" />, url: '#', color: '#1DA1F2' },
    { name: 'Facebook', icon: <Facebook className="h-6 w-6" />, url: '#', color: '#4267B2' },
    { name: 'Instagram', icon: <Instagram className="h-6 w-6" />, url: '#', color: '#E4405F' },
    
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#d1ac92' }}>
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4" style={{ color: '#5E4A35' }}>Contact Information</h1>
            <p className="text-xl" style={{ color: '#A37B5C' }}>Get in touch with Eliud Mautia</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <Card className="h-fit bg-white hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center" style={{ color: '#5E4A35' }}>
                  <Mail className="mr-3 h-6 w-6" style={{ color: '#A37B5C' }} />
                  Contact Details
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center p-3 rounded-lg" style={{ backgroundColor: '#f5f1ed' }}>
                    <Phone className="mr-3 h-5 w-5" style={{ color: '#A37B5C' }} />
                    <div>
                      <p className="font-medium" style={{ color: '#5E4A35' }}>Primary Phone</p>
                      <a 
                        href="tel:+8613038303477" 
                        className="hover:underline cursor-pointer transition-colors"
                        style={{ color: '#A37B5C' }}
                      >
                        +86 130 3830 3477
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center p-3 rounded-lg" style={{ backgroundColor: '#f5f1ed' }}>
                    <Phone className="mr-3 h-5 w-5" style={{ color: '#A37B5C' }} />
                    <div>
                      <p className="font-medium" style={{ color: '#5E4A35' }}>Secondary Phone</p>
                      <a 
                        href="tel:+254720059892" 
                        className="hover:underline cursor-pointer transition-colors"
                        style={{ color: '#A37B5C' }}
                      >
                        +254 720 059 892
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center p-3 rounded-lg" style={{ backgroundColor: '#f5f1ed' }}>
                    <Mail className="mr-3 h-5 w-5" style={{ color: '#A37B5C' }} />
                    <div>
                      <p className="font-medium" style={{ color: '#5E4A35' }}>Email</p>
                      <a 
                        href="mailto:mautiaeliud@gmail.com" 
                        className="hover:underline cursor-pointer transition-colors"
                        style={{ color: '#A37B5C' }}
                      >
                        mautiaeliud@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center p-3 rounded-lg" style={{ backgroundColor: '#f5f1ed' }}>
                    <MapPin className="mr-3 h-5 w-5" style={{ color: '#A37B5C' }} />
                    <div>
                      <p className="font-medium" style={{ color: '#5E4A35' }}>Location</p>
                      <p className="text-gray-600">401122, Chongqing, China</p>
                    </div>
                  </div>
                </div>

                {/* Social Media Section */}
                <div className="pt-4 border-t" style={{ borderColor: '#A37B5C' }}>
                  <h3 className="font-semibold mb-4" style={{ color: '#5E4A35' }}>Connect on Social Media</h3>
                  <div className="grid grid-cols-3 gap-3">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.url}
                        className="flex flex-col items-center p-3 rounded-lg hover:shadow-md transition-all duration-300 bg-white border"
                        style={{ borderColor: '#A37B5C' }}
                      >
                        <div style={{ color: social.color }}>
                          {social.icon}
                        </div>
                        <span className="text-xs mt-1" style={{ color: '#5E4A35' }}>{social.name}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            <ContactForm />
          </div>

          <Card className="mb-8 bg-white hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="flex items-center" style={{ color: '#5E4A35' }}>
                <User className="mr-3 h-6 w-6" style={{ color: '#A37B5C' }} />
                Professional References
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {references.map((ref, index) => (
                  <div 
                    key={index} 
                    className="p-4 border rounded-lg hover:shadow-md transition-shadow bg-white cursor-pointer"
                    style={{ borderColor: '#A37B5C' }}
                  >
                    <h3 className="font-semibold" style={{ color: '#5E4A35' }}>{ref.name}</h3>
                    <p className="text-sm" style={{ color: '#A37B5C' }}>{ref.title}</p>
                    <p className="text-xs mb-2 text-gray-500">{ref.organization}</p>
                    <div className="space-y-1">
                      <div className="flex items-center text-sm">
                        <Mail className="mr-2 h-3 w-3 text-gray-400" />
                        <a 
                          href={`mailto:${ref.email}`} 
                          className="hover:underline cursor-pointer text-xs transition-colors"
                          style={{ color: '#A37B5C' }}
                        >
                          {ref.email}
                        </a>
                      </div>
                      {ref.phone && (
                        <div className="flex items-center text-sm">
                          <Phone className="mr-2 h-3 w-3 text-gray-400" />
                          <a 
                            href={`tel:${ref.phone.replace(/\s+/g, '')}`} 
                            className="hover:underline cursor-pointer transition-colors"
                            style={{ color: '#A37B5C' }}
                          >
                            {ref.phone}
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* CTA Section */}
          <Card className="bg-white hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-semibold mb-4" style={{ color: '#5E4A35' }}>
                Ready to start a conversation?
              </h3>
              <p className="mb-6" style={{ color: '#A37B5C' }}>
                Whether you're looking for collaboration, consultation, or just want to connect, I'd love to hear from you.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button 
                  className="text-white hover:opacity-90 transition-opacity flex items-center gap-2"
                  style={{ backgroundColor: '#A37B5C' }}
                >
                  <MessageCircle className="h-4 w-4" />
                  Start a Conversation
                </Button>
                <Button 
                  variant="outline" 
                  className="flex items-center gap-2 border-2 hover:bg-opacity-10"
                  style={{ borderColor: '#5E4A35', color: '#5E4A35' }}
                >
                  <Send className="h-4 w-4" />
                  Schedule a Meeting
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;