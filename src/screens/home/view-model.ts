import {useState} from 'react';

interface AdsProps {
  id: number;
  title: string;
  price: number;
  is_active: boolean;
  is_new: boolean;
  image: string;
}

interface useHomeViewModelProps {
  adsData?: AdsProps[];
}

function useHomeViewModel(): useHomeViewModelProps {
  const [adsData, setAdsData] = useState<AdsProps[]>([
    {
      id: 1,
      title: 'chinelo',
      price: 2000,
      is_active: false,
      is_new: false,
      image:
        'https://imgs.search.brave.com/3LSbiKJsy4SitTLk7Np5rwbdqwW8hvesA8510OqzPo4/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jbGlt/YmEuY29tLmJyL2Js/b2cvd3AtY29udGVu/dC91cGxvYWRzLzIw/MTgvMDUvMjAwMDQw/LWZvdG9zLWRlLXBy/b2R1dG9zLWRpY2Fz/LXBhcmEtdG9ybmFy/LW9zLWl0ZW5zLW1h/aXMtYXRyYXRpdm9z/LW5hLWxvamEtdmly/dHVhbC05OTl4NTE1/LmpwZw',
    },
    {
      id: 2,
      title: 'chinelo',
      price: 2000,
      is_active: true,
      is_new: true,
      image:
        'https://imgs.search.brave.com/3LSbiKJsy4SitTLk7Np5rwbdqwW8hvesA8510OqzPo4/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jbGlt/YmEuY29tLmJyL2Js/b2cvd3AtY29udGVu/dC91cGxvYWRzLzIw/MTgvMDUvMjAwMDQw/LWZvdG9zLWRlLXBy/b2R1dG9zLWRpY2Fz/LXBhcmEtdG9ybmFy/LW9zLWl0ZW5zLW1h/aXMtYXRyYXRpdm9z/LW5hLWxvamEtdmly/dHVhbC05OTl4NTE1/LmpwZw',
    },
    {
      id: 3,
      title: 'chinelo',
      price: 2000,
      is_active: true,
      is_new: true,
      image:
        'https://imgs.search.brave.com/3LSbiKJsy4SitTLk7Np5rwbdqwW8hvesA8510OqzPo4/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jbGlt/YmEuY29tLmJyL2Js/b2cvd3AtY29udGVu/dC91cGxvYWRzLzIw/MTgvMDUvMjAwMDQw/LWZvdG9zLWRlLXBy/b2R1dG9zLWRpY2Fz/LXBhcmEtdG9ybmFy/LW9zLWl0ZW5zLW1h/aXMtYXRyYXRpdm9z/LW5hLWxvamEtdmly/dHVhbC05OTl4NTE1/LmpwZw',
    },
    {
      id: 4,
      title: 'chinelo',
      price: 2000,
      is_active: true,
      is_new: true,
      image:
        'https://imgs.search.brave.com/3LSbiKJsy4SitTLk7Np5rwbdqwW8hvesA8510OqzPo4/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jbGlt/YmEuY29tLmJyL2Js/b2cvd3AtY29udGVu/dC91cGxvYWRzLzIw/MTgvMDUvMjAwMDQw/LWZvdG9zLWRlLXBy/b2R1dG9zLWRpY2Fz/LXBhcmEtdG9ybmFy/LW9zLWl0ZW5zLW1h/aXMtYXRyYXRpdm9z/LW5hLWxvamEtdmly/dHVhbC05OTl4NTE1/LmpwZw',
    },
  ]);
  return {adsData};
}

export {useHomeViewModel};
