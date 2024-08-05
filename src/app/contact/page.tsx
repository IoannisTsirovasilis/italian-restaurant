import ContactForm from "../../components/ContactForm";

export default function ContactPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <p className="mb-4">
        We would love to hear from you! Please fill out the form below or
        contact us directly at:
      </p>
      <p className="mb-4">Email: info@labellaitalia.com</p>
      <p className="mb-4">Phone: +39 123 456 7890</p>
      <ContactForm />
    </div>
  );
}
