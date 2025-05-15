export interface ContactForm {
  email: string;
  message: string;
  name: string;
  token: string | null;
}

export interface Projects {
  name: string;
  url: string;
  languages: {
    language: string;
    icon_src: string;
  }[];
}