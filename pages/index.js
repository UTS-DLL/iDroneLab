import Head from 'next/head'
import { useState } from 'react'

// Import your data
import teamData from '../data/team.json'
import projectsData from '../data/projects.json'

export default function Home() {
  const [activeSection, setActiveSection] = useState('home')

  const styles = {
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 1rem'
    },
    nav: {
      background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
      color: 'white',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
    },
    navContent: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '1rem 0'
    },
    navButton: {
      padding: '0.5rem 1rem',
      borderRadius: '50px',
      border: 'none',
      background: 'transparent',
      color: 'white',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      textTransform: 'capitalize',
      fontWeight: '500'
    },
    navButtonActive: {
      background: 'white',
      color: '#3b82f6',
      fontWeight: '600'
    },
    heroSection: {
      background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 50%, #3b82f6 100%)',
      color: 'white',
      textAlign: 'center',
      padding: '5rem 1rem',
      minHeight: '80vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    heroContent: {
      maxWidth: '800px'
    },
    heroTitle: {
      fontSize: '3.5rem',
      fontWeight: 'bold',
      marginBottom: '1.5rem',
      lineHeight: '1.2'
    },
    heroSubtitle: {
      fontSize: '1.2rem',
      marginBottom: '2rem',
      opacity: '0.9',
      lineHeight: '1.6'
    },
    button: {
      padding: '0.75rem 2rem',
      borderRadius: '50px',
      border: 'none',
      cursor: 'pointer',
      fontSize: '1rem',
      fontWeight: '600',
      transition: 'all 0.3s ease',
      margin: '0 0.5rem'
    },
    buttonPrimary: {
      background: 'white',
      color: '#3b82f6'
    },
    buttonSecondary: {
      background: 'transparent',
      color: 'white',
      border: '2px solid white'
    },
    section: {
      padding: '4rem 1rem'
    },
    sectionTitle: {
      fontSize: '2.5rem',
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: '3rem',
      color: '#1f2937'
    },
    card: {
      background: 'white',
      padding: '2rem',
      borderRadius: '1rem',
      boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)',
      marginBottom: '2rem',
      transition: 'all 0.3s ease'
    },
    projectCard: {
      background: 'linear-gradient(135deg, #f0f9ff 0%, #e0e7ff 100%)',
      padding: '2rem',
      borderRadius: '1rem',
      boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)',
      marginBottom: '2rem',
      transition: 'all 0.3s ease',
      border: '1px solid #e5e7eb'
    },
    teamCard: {
      background: 'white',
      padding: '2rem',
      borderRadius: '1rem',
      boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)',
      textAlign: 'center',
      transition: 'all 0.3s ease'
    },
    avatar: {
      width: '80px',
      height: '80px',
      background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
      color: 'white',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '1.5rem',
      fontWeight: 'bold',
      margin: '0 auto 1rem'
    },
    tech: {
      background: '#dbeafe',
      color: '#1e40af',
      padding: '0.25rem 0.75rem',
      borderRadius: '50px',
      fontSize: '0.875rem',
      margin: '0.25rem',
      display: 'inline-block'
    },
    footer: {
      background: '#111827',
      color: 'white',
      textAlign: 'center',
      padding: '3rem 1rem'
    },
    grid: {
      display: 'grid',
      gap: '2rem'
    },
    gridCols2: {
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))'
    },
    gridCols3: {
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))'
    }
  }

  return (
    <>
      <Head>
        <title>UTS Intelligent Drone Lab</title>
        <meta name="description" content="Pioneering autonomous flight systems at UTS" />
      </Head>
      
      <div style={{ minHeight: '100vh', background: '#f9fafb' }}>
        {/* Navigation */}
        <nav style={styles.nav}>
          <div style={{...styles.container, ...styles.navContent}}>
            <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold', margin: 0 }}>
              🚁 UTS Intelligent Drone Lab
            </h1>
            <div style={{ display: 'flex', gap: '1rem' }}>
              {['home', 'about', 'projects', 'team', 'contact'].map((section) => (
                <button 
                  key={section}
                  onClick={() => setActiveSection(section)} 
                  style={{
                    ...styles.navButton,
                    ...(activeSection === section ? styles.navButtonActive : {})
                  }}
                  onMouseEnter={(e) => {
                    if (activeSection !== section) {
                      e.target.style.background = 'rgba(255, 255, 255, 0.2)'
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (activeSection !== section) {
                      e.target.style.background = 'transparent'
                    }
                  }}
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        </nav>

        {/* Content */}
        <main>
          {activeSection === 'home' && (
            <div style={styles.heroSection}>
              <div style={styles.heroContent}>
                <div style={{ fontSize: '4rem', marginBottom: '2rem' }}>🚁</div>
                <h1 style={styles.heroTitle}>Intelligent Drone Lab</h1>
                <p style={styles.heroSubtitle}>
                  Pioneering autonomous flight systems and intelligent robotics at the University of Technology Sydney
                </p>
                <div>
                  <button 
                    style={{...styles.button, ...styles.buttonPrimary}}
                    onClick={() => setActiveSection('about')}
                    onMouseEnter={(e) => {
                      e.target.style.transform = 'translateY(-2px)'
                      e.target.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.2)'
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.transform = 'translateY(0)'
                      e.target.style.boxShadow = 'none'
                    }}
                  >
                    Explore Research
                  </button>
                  <button 
                    style={{...styles.button, ...styles.buttonSecondary}}
                    onClick={() => setActiveSection('projects')}
                    onMouseEnter={(e) => {
                      e.target.style.background = 'white'
                      e.target.style.color = '#3b82f6'
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.background = 'transparent'
                      e.target.style.color = 'white'
                    }}
                  >
                    View Projects
                  </button>
                </div>
              </div>
            </div>
          )}

          {activeSection === 'about' && (
            <div style={styles.section}>
              <div style={styles.container}>
                <h2 style={styles.sectionTitle}>About the Lab</h2>
                <div style={{...styles.grid, ...styles.gridCols2, alignItems: 'center'}}>
                  <div style={styles.card}>
                    <p style={{ fontSize: '1.1rem', lineHeight: '1.7', marginBottom: '1rem', color: '#374151' }}>
                      The UTS Intelligent Drone Lab is at the forefront of unmanned aerial vehicle 
                      research and development. Our interdisciplinary team combines expertise in 
                      robotics, artificial intelligence, and aerospace engineering.
                    </p>
                    <p style={{ fontSize: '1.1rem', lineHeight: '1.7', color: '#374151' }}>
                      Founded in 2018, we collaborate with industry partners and research institutions 
                      worldwide to tackle real-world challenges in autonomous flight systems.
                    </p>
                  </div>
                  <div style={{
                    background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
                    borderRadius: '1rem',
                    padding: '2rem',
                    color: 'white',
                    textAlign: 'center'
                  }}>
                    <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🔬</div>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>Research Areas</h3>
                    <div>
                      {['Autonomous Navigation', 'Computer Vision', 'AI & Machine Learning', 'Swarm Intelligence'].map((area) => (
                        <div key={area} style={{
                          background: 'rgba(255, 255, 255, 0.2)',
                          borderRadius: '50px',
                          padding: '0.5rem 1rem',
                          margin: '0.5rem 0',
                          fontSize: '0.9rem'
                        }}>{area}</div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeSection === 'projects' && (
            <div style={{...styles.section, background: 'white'}}>
              <div style={styles.container}>
                <h2 style={styles.sectionTitle}>Research Projects</h2>
                <div style={{...styles.grid, ...styles.gridCols2}}>
                  {projectsData.projects.map(project => (
                    <div key={project.id} style={styles.projectCard}>
                      <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem', color: '#1f2937' }}>
                        {project.title}
                      </h3>
                      <p style={{ color: '#6b7280', marginBottom: '1rem', lineHeight: '1.6' }}>
                        {project.description}
                      </p>
                      <div style={{ marginBottom: '1rem' }}>
                        {project.technologies.map(tech => (
                          <span key={tech} style={styles.tech}>{tech}</span>
                        ))}
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span style={{ fontSize: '0.875rem', color: '#9ca3af' }}>
                          Updated: {project.lastUpdate}
                        </span>
                        <a 
                          href={`https://github.com/${project.githubRepo}`}
                          style={{
                            background: '#3b82f6',
                            color: 'white',
                            padding: '0.5rem 1rem',
                            borderRadius: '50px',
                            textDecoration: 'none',
                            fontSize: '0.875rem',
                            fontWeight: '500'
                          }}
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
            <div style={styles.section}>
              <div style={styles.container}>
                <h2 style={styles.sectionTitle}>Our Team</h2>
                <div style={{...styles.grid, ...styles.gridCols3}}>
                  {teamData.members.map(member => (
                    <div key={member.id} style={styles.teamCard}>
                      <div style={styles.avatar}>{member.initials}</div>
                      <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.5rem', color: '#1f2937' }}>
                        {member.name}
                      </h3>
                      <p style={{ color: '#3b82f6', fontWeight: '600', marginBottom: '0.5rem' }}>
                        {member.role}
                      </p>
                      <p style={{ color: '#6b7280', fontSize: '0.875rem', marginBottom: '1rem' }}>
                        {member.specialty}
                      </p>
                      <p style={{ 
                        color: '#9ca3af', 
                        fontSize: '0.875rem',
                        background: '#f9fafb',
                        padding: '0.5rem',
                        borderRadius: '50px'
                      }}>
                        {member.email}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeSection === 'contact' && (
            <div style={styles.section}>
              <div style={styles.container}>
                <h2 style={styles.sectionTitle}>Contact Us</h2>
                <div style={{ maxWidth: '600px', margin: '0 auto' }}>
                  <div style={{
                    background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
                    borderRadius: '1rem',
                    padding: '3rem',
                    color: 'white',
                    textAlign: 'center'
                  }}>
                    <div style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>📍</div>
                    <h3 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>Visit Our Lab</h3>
                    <div style={{ fontSize: '1.1rem', lineHeight: '2' }}>
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
        <footer style={styles.footer}>
          <div style={styles.container}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1rem' }}>
              🚁 UTS Intelligent Drone Lab
            </h3>
            <p style={{ color: '#9ca3af', marginBottom: '0.5rem' }}>
              University of Technology Sydney | Faculty of Engineering and IT
            </p>
            <p style={{ color: '#6b7280', fontSize: '0.875rem' }}>
              &copy; 2025 UTS Intelligent Drone Lab. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </>
  )
}
