import axios from "axios";
import { ContactForm } from "../models/schema";
import { apiKeys } from "../data/constants";

// Google recaptcha analytics
export default async function verifySite(formData: ContactForm) {
  axios({
    method: 'POST',
    url: 'https://www.google.com/recaptcha/api/siteverify',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Access-Control-Allow-Origin': '*'
    },
    params: {
      secret: apiKeys.recaptcha.secret_key, // for development purposes
      response: formData
    },

  }).then(response => {
    console.log(response.data);

  }).catch(error => {
    console.error('Recaptcha verification error:', {
      timestamp: new Date().toLocaleString(),
      error
    });
  });
}