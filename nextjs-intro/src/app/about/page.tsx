import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
  description: 'This is the about page.',
};

const About = () => {
  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-center text-4xl">About</h1>
      <p className="text-center">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus
        doloremque at voluptatum minus inventore deleniti vel maxime corrupti
        aspernatur enim!
      </p>
    </div>
  );
};

export default About;
