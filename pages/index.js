import { useState } from 'react';
import Layout from '../components/Layout';

const merchItems = [
  {
    id: 'shirt',
    label: 'Shirt',
    x: '30%',
    y: '40%',
    title: 'ABC Logo Tee',
    description: 'Comfortable cotton tee with ABC branding.',
    price: '$25',
    link: 'https://buy.stripe.com/test_abc_shirt'
  },
  {
    id: 'poster',
    label: 'Poster',
    x: '60%',
    y: '30%',
    title: 'Limited Poster',
    description: '11x17 high-quality matte poster.',
    price: '$15',
    link: 'https://buy.stripe.com/test_abc_poster'
  },
  {
    id: 'cd',
    label: 'CD',
    x: '50%',
    y: '70%',
    title: 'ABC Mixtape Vol. 1',
    description: 'A collection of sounds from our creators.',
    price: '$10',
    link: 'https://buy.stripe.com/test_abc_cd'
  }
];

export default function Home() {
  const [activeItem, setActiveItem] = useState(null);

  return (
    <Layout>
      <div className="space-y-12">
        <section className="relative max-w-4xl mx-auto">
          <img src="/images/merch-display.jpg" alt="Merch Setup" className="w-full rounded-lg shadow-md" />
          {merchItems.map(item => (
            <button
              key={item.id}
              className="absolute bg-red-500 text-white text-xs px-2 py-1 rounded-full hover:bg-red-600"
              style={{ left: item.x, top: item.y, transform: 'translate(-50%, -50%)' }}
              onClick={() => setActiveItem(item)}
            >
              {item.label}
            </button>
          ))}
        </section>

        {activeItem && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white text-black dark:bg-gray-800 dark:text-white p-6 rounded-xl shadow-xl w-full max-w-md relative">
              <button className="absolute top-2 right-2 text-lg" onClick={() => setActiveItem(null)}>✖</button>
              <h2 className="text-2xl font-bold mb-2">{activeItem.title}</h2>
              <p className="mb-2">{activeItem.description}</p>
              <p className="font-semibold">{activeItem.price}</p>
              <a href={activeItem.link} target="_blank" className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Buy Now</a>
            </div>
          </div>
        )}

        <section className="text-center max-w-xl mx-auto">
          <h2 className="text-xl font-bold mb-2">Stay in the Loop</h2>
          <p className="mb-4 text-sm">Sign up to hear about drops, pop-ups, and new creators.</p>
          <form action="https://your-mailchimp-url.com/subscribe/post" method="POST" target="_blank" className="space-y-2">
            <input type="email" name="EMAIL" placeholder="Your email" required className="w-full px-4 py-2 border rounded" />
            <button type="submit" className="w-full bg-black text-white px-4 py-2 rounded hover:bg-gray-800">Sign Up</button>
          </form>
        </section>
      </div>
    </Layout>
  );
}