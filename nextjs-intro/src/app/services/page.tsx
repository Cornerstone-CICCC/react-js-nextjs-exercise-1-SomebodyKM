import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services',
  description: 'This is the services page.',
};

const Services = () => {
  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-center text-4xl">Services</h1>
      <p className="text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
        mollitia consequatur possimus ipsum voluptates dolor vitae dolorum quas
        beatae cupiditate.
      </p>
    </div>
  );
};

export default Services;
