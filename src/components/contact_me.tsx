import { useState } from "react";
import { regex } from "../data/regex";
import { ContactForm } from "../models/schema";
import sendMessage from "../utils/email";

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


export default function ContactMe() {
  // State management
  const [errors, setErrors] = useState<ContactForm>({
    email: '',
    message: '',
    name: ''
  });
  const [formData, setFormData] = useState<ContactForm>({
    email: '',
    name: '',
    message: ''
  });
  const [status, setStatus] = useState<SentStatus>({
    type: FormStatus.idle,
    message: ''
  });
  // const [status, setStatus] = useState({
  //   isLoading: false,
  //   isSent: false,
  //   isError: false,
  //   message: ''
  // });
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
  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status.type === 'processing') return;

    const formErrors = validateForm(formData);
    setErrors(formErrors);

    setStatus({ type: 'processing', message: 'Sending message...' });

    const hasErrors = Object.values(formErrors).some(error => !!error.length);

    if (hasErrors) {
      setStatus({ type: 'error', message: 'Please complete the form' });
      return;
    }

    // Email to user
    sendMessage(formData)
      .then(response => {
        // Success
        if (response.status === 200) {
          setStatus({ type: 'sent', message: 'Message successfully sent!' });

          setTimeout(() => {
            resetErrors();
            clearForm();
            setStatus({ type: 'idle', message: '' });
          }, 4000);
          return;
        }

        // Multiple requests
        if (response.status === 429) {
          setStatus({ type: 'error', message: 'Too many requests! Please try again later.' });

          setTimeout(() => {
            setStatus({ type: 'idle', message: '' });
          }, 4000);
        } else {
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
      name: ''
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

    return formErrors;
  };

  // Clear errors 
  const resetErrors = (key?: string) => {
    if (!key) {
      setErrors({
        email: '',
        message: '',
        name: ''
      });
      return;
    }

    setErrors({
      ...errors,
      [key]: ''
    });
  };

  // Clear form
  const clearForm = () => setFormData({
    email: '',
    message: '',
    name: ''
  });

  return (
    <div className="contact-form-wrapper">
      <h2>Feel free to reach me out!</h2>
      <fieldset>
        <form onSubmit={submitForm}>
          <p className="msg">If you have any questions or have any work opportunities that aligns with my skills, you can contact me on this form.</p>
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
            <button type="submit" disabled={status.type !== 'idle'}>Send</button>
          </div>
          <p>{status.message}</p>
        </form>
      </fieldset>
    </div>
  );
}