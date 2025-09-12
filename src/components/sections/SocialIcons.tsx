// SVGs para LinkedIn, GitHub e Portfólio
export const LinkedInIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} fill="none" viewBox="0 0 24 24" {...props}>
    <rect width="24" height="24" rx="4" fill="#0A66C2"/>
    <path d="M7.1 8.6a1.3 1.3 0 1 1 0-2.6 1.3 1.3 0 0 1 0 2.6Zm-1.1 1.2h2.2v6.6H6V9.8Zm3.2 0h2.1v.9h.03c.29-.55 1-1.13 2.07-1.13 2.22 0 2.63 1.46 2.63 3.36v3.48h-2.2v-3.09c0-.74-.01-1.7-1.04-1.7-1.04 0-1.2.81-1.2 1.65v3.14h-2.2V9.8Z" fill="#fff"/>
  </svg>
);

export const GitHubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} fill="none" viewBox="0 0 24 24" {...props}>
    <rect width="24" height="24" rx="4" fill="#181717"/>
    <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.48 2.87 8.28 6.84 9.63.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.36-3.37-1.36-.45-1.18-1.1-1.5-1.1-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05A9.36 9.36 0 0 1 12 6.84c.85.004 1.7.12 2.5.35 1.91-1.33 2.75-1.05 2.75-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.07.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.8 0 .26.18.57.69.48A10.01 10.01 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z" fill="#fff"/>
  </svg>
);

export const PortfolioIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} fill="none" viewBox="0 0 24 24" {...props}>
    <rect width="24" height="24" rx="4" fill="#6C63FF"/>
    <path d="M7 8a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V8Zm2 0v8h6V8H9Zm1 2h4v2h-4v-2Z" fill="#fff"/>
  </svg>
);
