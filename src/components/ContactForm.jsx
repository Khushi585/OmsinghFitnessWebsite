import { useState } from 'react'
import { motion } from 'framer-motion'
import { Loader2, Send } from 'lucide-react'
import { serviceOptions } from '../data/content'
import { useToast } from './Toast'

/**
 * ContactForm — front-end only. Validates, fakes a short submit delay, then
 * fires a success toast and resets.
 *
 * TO CONNECT A REAL BACKEND:
 * replace the body of `submitEnquiry` below with a fetch() to your endpoint,
 * a Formspree/Getform URL, or an email service. Nothing else needs to change.
 */
async function submitEnquiry(values) {
  // eslint-disable-next-line no-console
  console.log('Enquiry submitted (front-end only):', values)
  await new Promise((resolve) => setTimeout(resolve, 900))
  return { ok: true }
}

const initialValues = {
  name: '',
  email: '',
  phone: '',
  service: '',
  message: '',
}

function validate(values) {
  const errors = {}

  if (!values.name.trim()) errors.name = 'Please enter your name'
  else if (values.name.trim().length < 2) errors.name = 'That name looks too short'

  if (!values.email.trim()) errors.email = 'Please enter your email'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email.trim()))
    errors.email = 'Please enter a valid email address'

  if (!values.phone.trim()) errors.phone = 'Please enter your phone number'
  else if (!/^[+\d][\d\s()-]{7,19}$/.test(values.phone.trim()))
    errors.phone = 'Please enter a valid phone number'

  if (!values.service) errors.service = 'Please select a service'

  if (!values.message.trim()) errors.message = 'Please write a line about your problem'
  else if (values.message.trim().length < 12)
    errors.message = 'A sentence or two helps Om understand'

  return errors
}

export default function ContactForm() {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})
  const [status, setStatus] = useState('idle') // idle | submitting
  const { toast } = useToast()

  const handleChange = (e) => {
    const { name, value } = e.target
    setValues((v) => ({ ...v, [name]: value }))
    if (touched[name]) {
      setErrors((prev) => ({ ...prev, [name]: validate({ ...values, [name]: value })[name] }))
    }
  }

  const handleBlur = (e) => {
    const { name } = e.target
    setTouched((t) => ({ ...t, [name]: true }))
    setErrors((prev) => ({ ...prev, [name]: validate(values)[name] }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const nextErrors = validate(values)
    setErrors(nextErrors)
    setTouched(
      Object.keys(initialValues).reduce((acc, k) => ({ ...acc, [k]: true }), {})
    )

    if (Object.keys(nextErrors).length > 0) {
      toast({
        variant: 'error',
        title: 'Please check the marked fields',
        description: 'A few details are missing.',
      })
      // move focus to the first invalid field
      const firstKey = Object.keys(initialValues).find((k) => nextErrors[k])
      document.getElementById(`field-${firstKey}`)?.focus()
      return
    }

    setStatus('submitting')
    try {
      await submitEnquiry(values)
      toast({
        title: 'Message sent',
        description: `Thanks ${values.name.split(' ')[0]}, your message has reached Om. You will get a reply within a day.`,
      })
      setValues(initialValues)
      setTouched({})
      setErrors({})
    } catch (err) {
      toast({
        variant: 'error',
        title: 'Something went wrong',
        description: 'Please try again, or message on WhatsApp.',
      })
    } finally {
      setStatus('idle')
    }
  }

  const submitting = status === 'submitting'

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field
          id="field-name"
          name="name"
          label="Your name"
          placeholder="e.g. Rahul Sharma"
          value={values.name}
          error={touched.name && errors.name}
          onChange={handleChange}
          onBlur={handleBlur}
          autoComplete="name"
        />
        <Field
          id="field-email"
          name="email"
          type="email"
          label="Email"
          placeholder="you@email.com"
          value={values.email}
          error={touched.email && errors.email}
          onChange={handleChange}
          onBlur={handleBlur}
          autoComplete="email"
        />
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field
          id="field-phone"
          name="phone"
          type="tel"
          label="Phone / WhatsApp"
          placeholder="+91 00000 00000"
          value={values.phone}
          error={touched.phone && errors.phone}
          onChange={handleChange}
          onBlur={handleBlur}
          autoComplete="tel"
        />

        <div>
          <Label htmlFor="field-service">What do you need help with?</Label>
          <div className="relative">
            <select
              id="field-service"
              name="service"
              value={values.service}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`peer w-full appearance-none rounded-[3px] border bg-bone-50 px-4 py-3.5 text-[14px] text-charcoal outline-none transition-colors duration-300 focus:border-moss ${
                touched.service && errors.service ? 'border-clay' : 'border-charcoal/15'
              } ${values.service ? '' : 'text-stone-400'}`}
            >
              <option value="">Choose one…</option>
              {serviceOptions.map((option) => (
                <option key={option} value={option} className="text-charcoal">
                  {option}
                </option>
              ))}
            </select>
            <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-stone-400">
              <svg width="11" height="7" viewBox="0 0 11 7" fill="none" aria-hidden="true">
                <path d="M1 1l4.5 4.5L10 1" stroke="currentColor" strokeWidth="1.4" />
              </svg>
            </span>
          </div>
          <FieldError message={touched.service && errors.service} />
        </div>
      </div>

      <div>
        <Label htmlFor="field-message">Tell us about it</Label>
        <textarea
          id="field-message"
          name="message"
          rows={5}
          placeholder="Where does it hurt, how long has it been there, or what do you want to achieve?"
          value={values.message}
          onChange={handleChange}
          onBlur={handleBlur}
          className={`w-full resize-none rounded-[3px] border bg-bone-50 px-4 py-3.5 text-[14px] text-charcoal outline-none transition-colors duration-300 placeholder:text-stone-400 focus:border-moss ${
            touched.message && errors.message ? 'border-clay' : 'border-charcoal/15'
          }`}
        />
        <FieldError message={touched.message && errors.message} />
      </div>

      <motion.button
        type="submit"
        disabled={submitting}
        whileTap={{ scale: 0.99 }}
        className="group inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-charcoal px-8 py-4 text-[15px] font-medium tracking-tight text-bone transition-all duration-500 ease-premium hover:bg-moss-900 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
      >
        {submitting ? (
          <>
            <Loader2 size={16} strokeWidth={1.8} className="animate-spin" />
            Sending…
          </>
        ) : (
          <>
            Send
            <Send
              size={15}
              strokeWidth={1.7}
              className="transition-transform duration-500 ease-premium group-hover:translate-x-0.5"
            />
          </>
        )}
      </motion.button>

      <p className="text-[11.5px] leading-relaxed text-stone-400">
        Your details are used only to reply to you. (Note for the site owner: this
        form is front-end only — connect it to email before going live.)
      </p>
    </form>
  )
}

function Label({ htmlFor, children }) {
  return (
    <label
      htmlFor={htmlFor}
      className="mb-2 block text-[11px] font-medium uppercase tracking-wider2 text-stone-500"
    >
      {children}
    </label>
  )
}

function FieldError({ message }) {
  if (!message) return null
  return (
    <motion.p
      initial={{ opacity: 0, y: -4 }}
      animate={{ opacity: 1, y: 0 }}
      className="mt-2 text-[11.5px] text-clay"
    >
      {message}
    </motion.p>
  )
}

function Field({ id, name, label, error, ...rest }) {
  return (
    <div>
      <Label htmlFor={id}>{label}</Label>
      <input
        id={id}
        name={name}
        aria-invalid={Boolean(error)}
        className={`w-full rounded-[3px] border bg-bone-50 px-4 py-3.5 text-[14px] text-charcoal outline-none transition-colors duration-300 placeholder:text-stone-400 focus:border-moss ${
          error ? 'border-clay' : 'border-charcoal/15'
        }`}
        {...rest}
      />
      <FieldError message={error} />
    </div>
  )
}
