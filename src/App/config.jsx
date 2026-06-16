import { Email, GitHub, LinkedIn, Resume } from 'icons';

export const config = {
  name: {
    display: 'Vikas kushwha',
  },
  title: {
    display: 'Software Engineer',
  },
  buttons: [
    {
      name: 'github',
      display: 'GitHub',
      ariaLabel: 'GitHub profile (opens in new window)',
      icon: <GitHub />,
      href: 'https://github.com/VikasKushwaha5424',
    },
    {
      name: 'linked-in',
      display: 'LinkedIn',
      ariaLabel: 'LinkedIn profile (opens in new window)',
      icon: <LinkedIn />,
      href: 'https://www.linkedin.com/in/vikaskushwaha5424',
    },
    {
      name: 'resume',
      display: 'Resume',
      ariaLabel: 'Resume in Google Drive (opens in new window)',
      icon: <Resume />,
      href: 'https://docs.google.com/document/d/1uXgc0kVxcsbwp3AzcBRKNEleVQrW5yH6/edit?usp=sharing&ouid=103733341149363765251&rtpof=true&sd=true',
    },
    {
      name: 'email',
      display: 'Email',
      ariaLabel: 'Email contact (opens in new window)',
      icon: <Email />,
      href: 'mailto:vikaskushwaha5424@gmail.com',
    },
  ],
};
