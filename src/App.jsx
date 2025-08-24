import { useState } from 'react'
import { motion } from 'framer-motion'
import Modal from './components/Modal.jsx'
import { projects } from './data/projects.js'

export default function App() {
  const [activeProject, setActiveProject] = useState(null)
  const [aiOpen, setAiOpen] = useState(false)
  const [aiPrompt, setAiPrompt] = useState('')
  const [aiOutput, setAiOutput] = useState('')

  const handleGenerate = () => {
    // Dummy AI response
    if (!aiPrompt.trim()) {
      setAiOutput('Tuliskan judul/problem/stack/accomplishments singkat, lalu klik Generate.')
      return
    }
    setAiOutput(
      `\u2728 Ringkasan AI (dummy):\n${aiPrompt}\n\nFokus pada tujuan, pendekatan teknis, dan dampak terukur. (Nanti bisa disambungkan ke API AI sungguhan.)`
    )
  }

  return (
    <div className="min-h-screen bg-background text-gray-800">
      {/* Navbar */}
      <header className="sticky top-0 z-40 w-full bg-background/80 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <a href="#hero" className="text-lg font-semibold text-primary">Bogani</a>
          <div className="hidden gap-6 md:flex">
            <a href="#about" className="hover:text-primary">About</a>
            <a href="#skills" className="hover:text-primary">Skills</a>
            <a href="#projects" className="hover:text-primary">Projects</a>
            <a href="#ai" className="hover:text-primary">AI</a>
            <a href="#contact" className="hover:text-primary">Contact</a>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section id="hero" className="mx-auto flex min-h-[70vh] max-w-6xl flex-col items-center justify-center px-6 text-center">
        <motion.h1
          className="text-4xl font-bold text-primary md:text-6xl"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Hi, I’m Bogani — building clean web experiences
        </motion.h1>
        <motion.p
          className="mt-4 max-w-2xl text-lg text-gray-600"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Portfolio single page: simpel, cepat, mobile-friendly, dengan modal Projects dan AI assistant.
        </motion.p>
        <div className="mt-8 flex gap-3">
          <a href="#projects" className="rounded-xl bg-primary px-5 py-2 text-white shadow-soft hover:bg-accent">See Projects</a>
          <button onClick={() => setAiOpen(true)} className="rounded-xl border border-primary px-5 py-2 text-primary hover:bg-primary/10">Open AI</button>
        </div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="mb-6 text-2xl font-semibold text-accent">About Me</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl bg-white p-6 shadow-soft">
            <p>
              Saya fokus pada pengembangan aplikasi web modern yang ringan, aman, dan mudah di-maintain. Senang mengeksplorasi AI untuk merapikan konten dan workflow.
            </p>
          </div>
          <div className="rounded-2xl bg-white p-6 shadow-soft">
            <p>
              Nilai utama: aksesibilitas, performa, dan desain bersih. Tools favorit: React, Tailwind, Vite, dan Framer Motion.
            </p>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="mb-6 text-2xl font-semibold text-accent">Skills</h2>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {['React', 'Tailwind', 'Node.js', 'AI Tools'].map((s) => (
            <div key={s} className="rounded-2xl bg-white p-4 text-center shadow-soft">{s}</div>
          ))}
        </div>
      </section>

      {/* Projects (buttons only) */}
      <section id="projects" className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="mb-8 text-2xl font-semibold text-accent">Projects</h2>
        <div className="flex flex-col gap-4">
          {projects.map((p) => (
            <button
              key={p.id}
              className="rounded-xl bg-primary px-5 py-3 text-left font-medium text-white shadow-soft hover:bg-accent"
              onClick={() => setActiveProject(p)}
            >
              {p.title}
            </button>
          ))}
        </div>
      </section>

      {/* AI Assistant (button only) */}
      <section id="ai" className="mx-auto max-w-6xl px-6 py-16 text-center">
        <h2 className="mb-6 text-2xl font-semibold text-accent">AI Project Summary</h2>
        <button
          className="rounded-xl bg-primary px-6 py-3 font-medium text-white shadow-soft hover:bg-accent"
          onClick={() => setAiOpen(true)}
        >
          Open AI Assistant
        </button>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-6xl px-6 py-16 text-center">
        <h2 className="mb-6 text-2xl font-semibold text-accent">Contact</h2>
        <p>DM me on social or email: <a className="text-primary underline" href="mailto:hello@example.com">hello@example.com</a></p>
      </section>

      {/* Project Modal */}
      <Modal isOpen={!!activeProject} onClose={() => setActiveProject(null)} title={activeProject?.title}>
        {activeProject && (
          <div>
            <img src={activeProject.image} alt={activeProject.title} className="mb-4 w-full rounded-2xl" />
            <p className="text-gray-700">{activeProject.description}</p>
            <div className="mt-4 flex gap-3">
              {activeProject.links?.demo && <a href={activeProject.links.demo} className="rounded-xl border border-primary px-4 py-2 text-primary hover:bg-primary/10">Live Demo</a>}
              {activeProject.links?.github && <a href={activeProject.links.github} className="rounded-xl bg-primary px-4 py-2 text-white hover:bg-accent">GitHub</a>}
            </div>
          </div>
        )}
      </Modal>

      {/* AI Modal */}
      <Modal isOpen={aiOpen} onClose={() => setAiOpen(false)} title="AI Assistant">
        <div className="space-y-3">
          <p className="text-sm text-gray-600">Masukkan judul/problem/tech stack/accomplishments (bebas, singkat) lalu klik Generate. (Saat ini dummy — nanti bisa dihubungkan ke API AI.)</p>
          <textarea
            className="h-28 w-full rounded-xl border border-gray-200 p-3 outline-none focus:border-primary"
            placeholder="Contoh: \nJudul: Finance Compass\nProblem: Rumitnya pencatatan keuangan harian\nStack: React, Vite, Tailwind\nAccomplishments: Sync cloud, grafik real-time"
            value={aiPrompt}
            onChange={(e) => setAiPrompt(e.target.value)}
          />
          <div className="flex items-center justify-between">
            <button onClick={handleGenerate} className="rounded-xl bg-primary px-4 py-2 text-white hover:bg-accent">Generate</button>
            <button onClick={() => { setAiPrompt(''); setAiOutput('') }} className="text-gray-500 hover:text-gray-700">Clear</button>
          </div>
          {aiOutput && (
            <pre className="whitespace-pre-wrap rounded-2xl bg-gray-50 p-3 text-sm text-gray-800">{aiOutput}</pre>
          )}
        </div>
      </Modal>
    </div>
  )
}
