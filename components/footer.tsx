import { OWNER_NAME } from "@/constants";

const Footer = () => {
  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <small className="mb-2 block text-xs">
        &copy; {new Date().getFullYear()} <b>{OWNER_NAME.split(" ")[0]}</b> |
        All rights reserved
      </small>
      <p className="text-xs">
        <b className="font-semibold">About this website:</b> built with React
        &amp; Next.js (App Router and Server Actions), Typescript, Tailwind CSS,
        Framer Motion, EmailJS, React Toaster, React Vertical Timeline &amp;
        Vercel Hosting.
      </p>
    </footer>
  );
};

export default Footer;
