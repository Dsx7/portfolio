"use client";
import { useRef, useState } from 'react';
import { portfolioData } from '@/data/portfolioData';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import { Turnstile } from '@marsidev/react-turnstile';

export default function Contact() {
  const { personal } = portfolioData;
  const formRef = useRef();
  
  // State
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [token, setToken] = useState(null); 

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError(false);


    if (!token) {
        alert("Please verify you are human.");
        setLoading(false);
        return;
    }

    const SERVICE_ID = "service_rpcsygy";
    const TEMPLATE_ID = "template_fqhcjef";
    const PUBLIC_KEY = "j27Jx7XgFN3W2gVOF";

    try {
      // 4. Send Email (Without hidden captcha fields)
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, {
        publicKey: PUBLIC_KEY,
      });

      setLoading(false);
      setSuccess(true);
      formRef.current.reset();
      
      // Note: We don't reset Turnstile automatically as it auto-refreshes
      setToken(null); 
      
      setTimeout(() => setSuccess(false), 5000);

    } catch (err) {
      console.error('FAILED...', err);
      setLoading(false);
      setError(true);
    }
  };

  return (
    <section id="contact" className="py-24 bg-[#020618] relative overflow-hidden">
      
      <div className="max-w-[1470px] mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Get In <span className="text-secondary">Touch</span>
            </h2>
            <p className="text-gray-400 text-base md:text-lg max-w-2xl">
                Let’s discuss your project or just say hello. I’m always open to new opportunities.
            </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 md:gap-16">
          
          {/* --- Left Card: Info --- */}
          <div className="bg-[#080E22] p-8 md:p-12 rounded-[2rem] border border-white/5 shadow-xl flex flex-col justify-center h-full">
            <h3 className="text-2xl font-bold text-white mb-4">Contact Information</h3>
            <p className="text-gray-400 mb-12 text-base leading-relaxed">
              You can reach me directly through the details below. I usually respond within 24 hours.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-5 group">
                <div className="w-14 h-14 flex items-center justify-center bg-[#112240] rounded-xl text-secondary border border-white/5 group-hover:border-secondary/50 transition-all duration-300 shadow-lg">
                  <FaEnvelope size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium mb-1">Email</p>
                  <a href={`mailto:${personal.email}`} className="text-white text-lg font-bold hover:text-secondary transition-colors">
                    {personal.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-5 group">
                <div className="w-14 h-14 flex items-center justify-center bg-[#112240] rounded-xl text-secondary border border-white/5 group-hover:border-secondary/50 transition-all duration-300 shadow-lg">
                  <FaPhone size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium mb-1">Phone</p>
                  <p className="text-white text-lg font-bold">{personal.phone}</p>
                </div>
              </div>

              <div className="flex items-center gap-5 group">
                <div className="w-14 h-14 flex items-center justify-center bg-[#112240] rounded-xl text-secondary border border-white/5 group-hover:border-secondary/50 transition-all duration-300 shadow-lg">
                  <FaMapMarkerAlt size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium mb-1">Location</p>
                  <p className="text-white text-lg font-bold">Sirajganj, Bangladesh</p>
                </div>
              </div>
               <div className='text-secondary mt-4'><p>Available for freelance & full-time opportunities.</p></div> 
            </div>
          </div>

          {/* --- Right Card: Form --- */}
          <div className="bg-[#080E22] p-8 md:p-12 rounded-[2rem] border border-white/5 shadow-xl h-full">
            <h3 className="text-2xl font-bold text-white mb-4">Send a Message</h3>
            <p className="text-gray-400 mb-8 text-base">
              Fill out the form and I&apos;ll get back to you as soon as possible.
            </p>

            <form ref={formRef} onSubmit={sendEmail} className="space-y-5">
              
              <div>
                <input type="text" name="user_name" required placeholder="Your Name" className="w-full bg-[#112240] border border-white/10 p-4 rounded-xl text-white placeholder-gray-500 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all text-sm md:text-base" />
              </div>
              
              <div>
                <input type="email" name="user_email" required placeholder="Your Email" className="w-full bg-[#112240] border border-white/10 p-4 rounded-xl text-white placeholder-gray-500 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all text-sm md:text-base" />
              </div>

              <div>
                <textarea name="message" required rows="5" placeholder="Your Message" className="w-full bg-[#112240] border border-white/10 p-4 rounded-xl text-white placeholder-gray-500 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all resize-none text-sm md:text-base"></textarea>
              </div>

              
              <div className="flex justify-center my-2">
                  <Turnstile 
                    siteKey="0x4AAAAAACTb8PSBZWwGgQtU" 
                    onSuccess={(token) => setToken(token)} 
                    options={{ theme: 'dark' }} 
                  />
              </div>

              <button 
                type="submit" 
                disabled={loading}
                className="w-full bg-primary text-black font-bold text-base md:text-lg py-4 rounded-xl hover:bg-yellow-400 transition-all transform hover:-translate-y-1 shadow-lg hover:shadow-primary/20 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Sending...' : <><FaPaperPlane size={16} /> Send Message</>}
              </button>

              {success && <p className="text-green-500 text-center mt-2 font-medium">Message sent successfully!</p>}
              {error && <p className="text-red-500 text-center mt-2 font-medium">Failed to send. Please try again.</p>}

            </form>

          </div>

        </div>
      </div>
    </section>
  );
}