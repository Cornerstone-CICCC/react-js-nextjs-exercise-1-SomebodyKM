import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'This is the contact page.',
};

const Contact = () => {
  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-center text-4xl">Contact</h1>
      <p className="text-center">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas molestias
        odit assumenda. Cumque placeat accusamus neque optio cum eaque itaque?
      </p>
    </div>
  );
};

export default Contact;
