import ContactForm from "../components/ContactForm";
import ContactInfo from "../components/ContactInfo";

export default function Contact() {
  return (
    <main className="bg-[#162235] min-h-[60vh] rounded-b-4xl">
      <ContactInfo />
      <ContactForm />
    </main>
  );
}
