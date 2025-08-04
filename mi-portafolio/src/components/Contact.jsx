/* eslint-disable no-unused-vars */
import React, { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { useTranslation } from 'react-i18next';

export default function ContactForm() {
  const { t } = useTranslation();

  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('')
  const formRef = useRef()

  const handleChange = e => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async e => {
    e.preventDefault()
    setStatus(t('footer.sending'))

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setStatus(t('footer.sent'))
        setForm({ name: '', email: '', message: '' })

        setTimeout(() => setStatus(''), 3000)
      })
      .catch(error => {
        console.error(error)
        setStatus(t('footer.error'))
        setTimeout(() => setStatus(''), 3000)
      })

    setTimeout(() => {
      setStatus(t('footer.sent'))
      setForm({ name: '', email: '', message: '' })
      setTimeout(() => setStatus(''), 3000)
    }, 1500)
  }

  return (
    <div id="contacto" className="max-w-7xl mx-auto  scroll-mt-56 sm:scroll-mt-18  pb-6 md: px-4 sm:px-4">
      <motion.form
        ref={formRef}
        onSubmit={handleSubmit}
        className="w-full space-y-6 "
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl  font-bold text-center text-[#4ACAE2]">
          {t('contact.title')}

        </h2>

        <motion.p
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
          }}
          className="mt-4 text-[#B3B3B3] text-center text-lg max-w-2xl mx-auto"
        >
          {t('contact.description')}
        </motion.p>

        <div className="flex flex-col">
          <label htmlFor="name" className="mb-2 text-sm text-[#B3B3B3]">
            {t('contact.form.labelName')}

          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full hover:cursor-pointer p-3 bg-transparent border border-[#4ACAE2] rounded-md focus:outline-none focus:ring-2 focus:ring-[#4ACAE2] text-white"
            placeholder={t('contact.form.name')}
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="email" className="mb-2 text-sm text-[#B3B3B3]">
            {t('contact.form.labelEmail')}

          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full hover:cursor-pointer p-3 bg-transparent border border-[#4ACAE2] rounded-md focus:outline-none focus:ring-2 focus:ring-[#4ACAE2] text-white"
            placeholder={t('contact.form.email')}
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="message" className="mb-2 text-sm text-[#B3B3B3]">
            {t('contact.form.labelMessage')}
          </label>
          <textarea
            name="message"
            id="message"
            rows="5"
            value={form.message}
            onChange={handleChange}F
            required
            className="w-full hover:cursor-pointer p-3 bg-transparent border border-[#4ACAE2] rounded-md focus:outline-none focus:ring-2 focus:ring-[#4ACAE2] text-white resize-none"
            placeholder={t('contact.form.message')}
          />
        </div>

        <button
          type="submit"
          disabled={status === t('footer.sending')}
          className="w-full hover:cursor-pointer py-3 bg-[#4ACAE2] text-[#1E1E1E] font-semibold rounded-md hover:bg-[#4ACAE2]/90 transition disabled:opacity-50"
        >
          {status || t('contact.form.submit')}
        </button>
      </motion.form>
    </div>
  )
}
