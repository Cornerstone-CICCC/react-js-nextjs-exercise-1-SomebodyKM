import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home',
  description: 'This is the homepage.',
};

const Home = () => {
  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-center text-4xl">Home</h1>
      <p className="text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure distinctio
        ea porro enim accusantium! Sint aliquam laboriosam enim minima
        distinctio!
      </p>
    </div>
  );
};

export default Home;
