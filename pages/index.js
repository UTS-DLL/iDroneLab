import Head from 'next/head'
import { useState } from 'react'

// Import your data
import teamData from '../data/team.json'
import projectsData from '../data/projects.json'

export default function Home() {
  const [activeSection, setActiveSection] = useState('home')

  return (
    <>
      <Head>
        <title>UTS Intelligent Drone Lab</title>
        <meta name="description" content="Pioneering autonomous flight systems at UTS" />
      </Head>
      
      <div className="min-h-screen bg-gray-50">
        {/* Navigation */}
        <nav className="bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg">
          <div className="container mx-auto px-4 py-4">
            <div className="flex justify-between items-center">
              <h1 className="text-2xl font-bold">🚁 UTS Intelligent Drone Lab</h1>
              <div className="hidden md:flex space-x-6">
                {['home', 'about', 'projects', 'team', 'contact'].map((section) => (
                  <button 
                    key={section}
                    onClick={() => setActiveSection(section)} 
                    className={`px-4 py-2 rounded-full transition-all duration-300 capitalize ${
                      activeSection === section 
                        ? 'bg-white text-blue-600 font-semibold' 
                        : 'hover:bg-white/20'
                    }`}
                  >
                    {section}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </nav>

        {/* Content */}
        <main className="min-h-screen">
          {activeSection === 'home' && (
            <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 text-white">
              <div className="container mx-auto px-4 py-20 text-center">
                <div className="text-6xl mb-8 animate-bounce">🚁</div>
                <h1 className="text-5xl md:text-6xl font-bold mb-6">Intelligent Drone Lab</h1>
                <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
                  Pioneering autonomous flight systems and intelligent robotics at the University of Technology Sydney
                </p>
                <div className="space-x-4">
                  <button 
                    onClick={() => setActiveSection('about')}
                    className="btn-primary bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
                  >
                    Explore Our Research
                  </button>
                  <button 
                    onClick={() => setActiveSection('projects')}
                    className="btn-primary border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
                  >
                    View Projects
                  </button>
                </div>
              </div>
            </div>
          )}

          {activeSection === 'about' && (
            <div className="py-20">
              <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">About the Lab</h2>
                <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
                  <div className="space-y-6">
                    <div className="bg-white p-8 rounded-2xl shadow-lg">
                      <p className="text-lg text-gray-600 leading-relaxed mb-4">
                        The UTS Intelligent Drone Lab is at the forefront of unmanned aerial vehicle 
                        research and development. Our interdisciplinary team combines expertise in 
                        robotics, artificial intelligence, and aerospace engineering.
                      </p>
                      <p className="text-lg text-gray-600 leading-relaxed">
                        Founded in 2018, we collaborate with industry partners and research institutions 
                        worldwide to tackle real-world challenges in autonomous flight systems.
                      </p>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
                      <div className="text-6xl mb-4">🔬</div>
                      <h3 className="text-2xl font-bold mb-6">Research Focus</h3>
                      <div className="space-y-3">
                        <div className="bg-white/20 rounded-full px-4 py-2">Autonomous Navigation</div>
                        <div className="bg-white/20 rounded-full px-4 py-2">Computer Vision</div>
                        <div className="bg-white/20 rounded-full px-4 py-2">AI & Machine Learning</div>
                        <div className="bg-white/20 rounded-full px-4 py-2">Swarm Intelligence</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeSection === 'projects' && (
            <div className="py-20 bg-white">
              <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Research Projects</h2>
                <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                  {projectsData.projects.map(project => (
                    <div key={project.id} className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                      <h3 className="text-2xl font-bold mb-4 text-gray-800">{project.title}</h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.technologies.map(tech => (
                          <span key={tech} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-500">Updated: {project.lastUpdate}</span>
                        <a 
                          href={`https://github.com/${project.githubRepo}`}
                          className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition-colors duration-300 font-medium"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          View on GitHub →
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeSection === 'team' && (
            <div className="py-20">
              <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Our Team</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                  {teamData.members.map(member => (
                    <div key={member.id} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-center">
                      <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 text-white rounded-full mx-auto mb-6 flex items-center justify-center text-2xl font-bold">
                        {member.initials}
                      </div>
                      <h3 className="text-xl font-bold mb-2 text-gray-800">{member.name}</h3>
                      <p className="text-blue-600 font-semibold mb-2">{member.role}</p>
                      <p className="text-gray-600 text-sm mb-4">{member.specialty}</p>
                      <p className="text-gray-500 text-sm bg-gray-50 px-3 py-2 rounded-full">{member.email}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeSection === 'contact' && (
            <div className="py-20">
              <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Contact Us</h2>
                <div className="max-w-4xl mx-auto">
                  <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
                    <div className="text-5xl mb-6">📍</div>
                    <h3 className="text-2xl font-bold mb-6">Visit Our Lab</h3>
                    <div className="space-y-3 text-lg">
                      <p>📧 intelligent.drones@uts.edu.au</p>
                      <p>📞 +61 2 9514 2000</p>
                      <p>🏢 University of Technology Sydney<br />
                      Faculty of Engineering and IT<br />
                      Building 11, Level 4<br />
                      15 Broadway, Ultimo NSW 2007</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </main>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="container mx-auto px-4 text-center">
            <h3 className="text-xl font-bold mb-4">🚁 UTS Intelligent Drone Lab</h3>
            <p className="text-gray-400">University of Technology Sydney | Faculty of Engineering and IT</p>
            <p className="text-gray-500 text-sm mt-4">&copy; 2025 UTS Intelligent Drone Lab. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </>
  )
}
