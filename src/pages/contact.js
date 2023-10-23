import ContactDetail from "@/Component/Contact/ContactDetail";
import RootLayout from "@/Component/layout/RootLayout";


const Contact = () => {
    return (
        <div>
            <ContactDetail></ContactDetail>
        </div>
    );
};

export default Contact;

Contact.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};