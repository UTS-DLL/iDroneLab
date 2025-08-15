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
      
      <div className="min-h-screen bg-gray-100">
        {/* Navigation */}
        <nav className="bg-blue-600 text-white p-4">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-bold">🚁 UTS Intelligent Drone Lab</h1>
            <div className="space-x-4">
              <button onClick={() => setActiveSection('home')} className="hover:underline">Home</button>
              <button onClick={() => setActiveSection('about')} className="hover:underline">About</button>
              <button onClick={() => setActiveSection('projects')} className="hover:underline">Projects</button>
              <button onClick={() => setActiveSection('team')} className="hover:underline">Team</button>
            </div>
          </div>
        </nav>

        {/* Content */}
        <main className="container mx-auto p-8">
          {activeSection === 'home' && (
            <div className="text-center py-20">
              <h1 className="text-5xl font-bold mb-6">Intelligent Drone Lab</h1>
              <p className="text-xl mb-8">Pioneering autonomous flight systems at UTS</p>
              <button 
                onClick={() => setActiveSection('about')}
                className="bg-blue-500 text-white px-8 py-3 rounded-lg hover:bg-blue-600"
              >
                Learn More
              </button>
            </div>
          )}

          {activeSection === 'about' && (
            <div className="py-12">
              <h2 className="text-4xl font-bold mb-8">About the Lab</h2>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <p className="text-lg mb-4">
                  The UTS Intelligent Drone Lab is at the forefront of unmanned aerial vehicle 
                  research and development. Our interdisciplinary team combines expertise in 
                  robotics, artificial intelligence, and aerospace engineering.
                </p>
                <p className="text-lg">
                  Founded in 2018, we collaborate with industry partners and research institutions 
                  worldwide to tackle real-world challenges in autonomous flight systems.
                </p>
              </div>
            </div>
          )}

          {activeSection === 'projects' && (
            <div className="py-12">
              <h2 className="text-4xl font-bold mb-8">Research Projects</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {projectsData.projects.map(project => (
                  <div key={project.id} className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map(tech => (
                        <span key={tech} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <a 
                      href={`https://github.com/${project.githubRepo}`}
                      className="text-blue-500 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View on GitHub →
                    </a>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeSection === 'team' && (
            <div className="py-12">
              <h2 className="text-4xl font-bold mb-8">Our Team</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {teamData.members.map(member => (
                  <div key={member.id} className="bg-white p-6 rounded-lg shadow-md text-center">
                    <div className="w-16 h-16 bg-blue-500 text-white rounded-full mx-auto mb-4 flex items-center justify-center text-xl font-bold">
                      {member.initials}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                    <p className="text-blue-600 mb-1">{member.role}</p>
                    <p className="text-gray-600 text-sm mb-3">{member.specialty}</p>
                    <p className="text-gray-500 text-sm">{member.email}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </main>
      </div>
    </>
  )
}
