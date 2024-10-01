import { z } from 'zod'
import validator from 'validator'

// const phoneRegex = new RegExp(
//   /^([+]?[\s0-9]+)?(\d{8}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
// )
export const ContactFormSchema = z.object({
  name: z
    .string()
    .min(1, { message: 'Name is required.' })
    .min(2, { message: 'Must be at least 2 characters.' }),
  email: z.string().email('Plz provide valid email.'),

  phone: z
    .string()
    .min(8, { message: 'plz provide valid phone .' })
    .refine(validator.isMobilePhone, { message: 'Invalid phone' }),

  message: z.string().min(2, { message: 'Message is required.' })
})

export const NewsletterFormSchema = z.object({
  email: z.string().email('Invalid email.')
})
