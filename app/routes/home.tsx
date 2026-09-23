import type { MetaFunction } from 'react-router';
import { ConverterView } from '@/views/converter-view/converter-view';

export const meta: MetaFunction = () => {
  return [
    { title: 'Currency converter | KC' },
    {
      property: 'og:title',
      content: 'Currency converter | KC'
    },
    {
      name: 'description',
      content:
        'A simple currency converter app built with React, TypeScript, and Vite. Convert currencies quickly and easily with this user-friendly tool.'
    }
  ];
};

export default function Home () {
  return <ConverterView />;
}
