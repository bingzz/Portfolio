import emailjs from "@emailjs/browser";
import { apiKeys } from "../data/constants";
import { ContactForm } from "../models/schema";

// Send message to personal email
export default async function sendMessage(form: ContactForm) {

  const emailParams = {
    ...form,
    time: new Date().toLocaleString(),
  };

  return await emailjs.send(apiKeys.emailjs.service_id, apiKeys.emailjs.template_id, emailParams, apiKeys.emailjs.public_key);
}