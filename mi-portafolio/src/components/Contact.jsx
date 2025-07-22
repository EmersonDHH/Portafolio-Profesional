import React, { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('')
  const formRef = useRef()

  const handleChange = e => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async e => {
    e.preventDefault()
    setStatus('Enviando...')

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setStatus('Mensaje Enviado!')
        setForm({ name: '', email: '', message: '' })

        setTimeout(() => setStatus(''), 3000)
      })
      .catch(error => {
        console.error(error)
        setStatus('Error al enviar. Intenta de nuevo.')
        setTimeout(() => setStatus(''), 3000)
      })

    setTimeout(() => {
      setStatus('¡Mensaje enviado!')
      setForm({ name: '', email: '', message: '' })
      setTimeout(() => setStatus(''), 3000)
    }, 1500)
  }

  return (
    <motion.form
      ref={formRef}
      id="contacto"
      onSubmit={handleSubmit}
      className="w-full p-8 space-y-6 "
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl font-bold text-center text-[#4ACAE2]">
        Contáctame
      </h2>

      <div className="flex flex-col">
        <label htmlFor="name" className="mb-2 text-sm text-[#B3B3B3]">
          Nombre
        </label>
        <input
          type="text"
          name="name"
          id="name"
          value={form.name}
          onChange={handleChange}
          required
          className="w-full p-3 bg-transparent border border-[#4ACAE2] rounded-md focus:outline-none focus:ring-2 focus:ring-[#4ACAE2] text-white"
          placeholder="Tu nombre"
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="email" className="mb-2 text-sm text-[#B3B3B3]">
          Correo electrónico
        </label>
        <input
          type="email"
          name="email"
          id="email"
          value={form.email}
          onChange={handleChange}
          required
          className="w-full p-3 bg-transparent border border-[#4ACAE2] rounded-md focus:outline-none focus:ring-2 focus:ring-[#4ACAE2] text-white"
          placeholder="tu@correo.com"
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="message" className="mb-2 text-sm text-[#B3B3B3]">
          Mensaje
        </label>
        <textarea
          name="message"
          id="message"
          rows="5"
          value={form.message}
          onChange={handleChange}
          required
          className="w-full p-3 bg-transparent border border-[#4ACAE2] rounded-md focus:outline-none focus:ring-2 focus:ring-[#4ACAE2] text-white resize-none"
          placeholder="Escribe tu mensaje aquí"
        />
      </div>

      <button
        type="submit"
        disabled={status === 'Enviando...'}
        className="w-full py-3 bg-[#4ACAE2] text-[#1E1E1E] font-semibold rounded-md hover:bg-[#4ACAE2]/90 transition disabled:opacity-50"
      >
        {status || 'Enviar Mensaje'}
      </button>
    </motion.form>
  )
}
