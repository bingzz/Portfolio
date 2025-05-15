import { Ref, useRef, useState } from "react";
import { ContactForm } from "../models/schema";
import { regex } from "../data/regex";
import ReCaptchaV2 from 'react-google-recaptcha';
import LottieTemplate from "../components/Lottie";
import sendMessage from "../utils/email";
import contactMeAnimation from '../assets/lottie/contact_me.json';
import mailSvg from '../assets/img/svg/mail.svg';
import phoneSvg from '../assets/img/svg/telephone.svg';
import locationSvg from '../assets/img/svg/location.svg';
import { apiKeys, personal_info } from "../data/constants";

enum FormStatus {
  idle = 'idle',
  processing = 'processing',
  sent = 'sent',
  error = 'error'
}

type SentStatus = {
  type: keyof typeof FormStatus,
  message: string;
};

export default function Contact() {
  // State management
  const [errors, setErrors] = useState<ContactForm>({
    email: '',
    message: '',
    name: '',
    token: null
  });
  const [formData, setFormData] = useState<ContactForm>({
    email: '',
    name: '',
    message: '',
    token: null
  });
  const [status, setStatus] = useState<SentStatus>({
    type: FormStatus.idle,
    message: ''
  });
  const recaptchaRef: Ref<ReCaptchaV2> | undefined = useRef(null);
  const maxMsgLength = 255; // Message length

  // Change input data
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    resetErrors(name);
    setFormData({
      ...formData,
      [name]: value
    });
    setStatus({ type: 'idle', message: '' });
  };

  // Submit form
  const submitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status.type === 'processing') return;

    const formErrors = validateForm(formData);
    setErrors(formErrors);

    const hasErrors = Object.values(formErrors).some(error => !!error?.length);

    if (hasErrors) {
      setStatus({ type: 'error', message: '' });

      setTimeout(() => {
        setStatus({ type: 'idle', message: '' });
      }, 2000);
      return;
    }

    setStatus({ type: 'processing', message: 'Sending message...' });

    // Email to user
    sendMessage(formData)
      .then(response => {
        // Success
        if (response.status === 200) {
          setStatus({ type: 'sent', message: 'Message successfully sent!' });
          // verifySite(formData);

          setTimeout(() => {
            resetErrors();
            clearForm();
            setStatus({ type: 'idle', message: '' });
            recaptchaRef.current?.reset();
          }, 4000);
          return;
        }

        // Multiple requests
        if (response.status === 429) {
          setStatus({ type: 'error', message: 'Too many requests! Please try again later.' });

          setTimeout(() => {
            resetErrors();
            setStatus({ type: 'idle', message: '' });
            recaptchaRef.current?.reset();
          }, 4000);
        } else { // Other errors
          console.error('Error sending message:', response.text);
          setStatus({ type: 'error', message: 'There is an error sending the message' });
        }
      }).catch(error => {
        console.error('Failed to send a message:', error);
        setStatus({ type: 'error', message: 'Failed to send message' });
      });
  };

  // Form validation
  const validateForm = (data: ContactForm) => {
    const formErrors: ContactForm = {
      email: '',
      message: '',
      name: '',
      token: null
    };

    if (!data.email) {
      formErrors.email = 'Email is required.';
    }

    if (data.email && !regex.email.test(data.email)) {
      formErrors.email = 'Invalid Email.';
    }

    if (!data.name) {
      formErrors.name = 'Name is required.';
    }

    if (!data.message) {
      formErrors.message = 'Message is required.';
    }

    if (data.message && data.message.length < 2) {
      formErrors.message = 'Message too short.';
    }

    if (!data.token) {
      formErrors.token = 'Validate ReCaptcha.';
    }

    return formErrors;
  };

  // Clear errors 
  const resetErrors = (key?: string) => {
    if (!key) {
      setErrors({
        email: '',
        message: '',
        name: '',
        token: null
      });
      return;
    }

    setErrors({
      ...errors,
      [key]: ''
    });
  };

  // Handle recaptcha token
  const handleToken = (token: string | null) => {
    if (!token) {
      recaptchaRef.current?.reset();
    }

    setFormData({
      ...formData,
      token
    });
  };

  // Clear form
  const clearForm = () => setFormData({
    email: '',
    message: '',
    name: '',
    token: null
  });

  return (
    <section id="contact-wrapper">
      <div className="contact-form-wrapper">
        <h2>Feel free to reach me out!</h2>
        <fieldset>
          <form onSubmit={submitForm}>
            <p className="msg">If you have any questions or have any work opportunities that aligns with my skills, you can contact me by filling in this form.</p>
            <label htmlFor="name">
              <strong>Name:</strong>
              <input type="text" name="name" id="name" value={formData.name} onChange={handleInputChange} placeholder="Your name" disabled={status.type !== 'idle'} autoFocus required aria-required="true" />
              <span>{errors.name}</span>
            </label>
            <label htmlFor="email">
              <strong>Email:</strong>
              <input type="text" name="email" id="email" value={formData.email} onChange={handleInputChange} placeholder="Your email address" disabled={status.type !== 'idle'} required aria-required="true" />
              <span>{errors.email}</span>
            </label>
            <label htmlFor="message">
              <div>
                <strong>Message:</strong>
                <span className="info">{formData.message.length} / {maxMsgLength}</span>
              </div>
              <textarea name="message" id="message" maxLength={255} value={formData.message} onChange={handleInputChange} placeholder="Say something" disabled={status.type !== 'idle'} required aria-required="true"></textarea>
              <span>{errors.message}</span>
            </label>
            <div className="submission">
              <button type="submit" disabled={status.type !== 'idle'}>
                <p>Send</p>
                <img src={mailSvg} alt={'Send Form'} />
              </button>
              <div className="recaptcha">
                <ReCaptchaV2 sitekey={apiKeys.recaptcha.site_key} onExpired={() => handleToken(null)} onChange={handleToken} ref={recaptchaRef} />
                <span>{errors.token}</span>
              </div>
            </div>
            <p>{status.message}</p>
          </form>
        </fieldset>
      </div>
      <div className="contact-details">
        <div className="lottie">
          <LottieTemplate key={'contact_me'} src={contactMeAnimation} />
        </div>
        <div className="contact-info">
          <div>
            <span><img src={locationSvg} alt={'Location'} /></span>
            <p>{personal_info.location}</p>
          </div>
          <div>
            <span><img src={mailSvg} alt={'Email Address'} /></span>
            <p>{personal_info.email}</p>
          </div>
          <div>
            <span><img src={phoneSvg} alt={'Contact Number'} /></span>
            <p>{personal_info.contact}</p>
          </div>
        </div>
      </div>
    </section>
  );
}