import Card from '../components/Card';
import Banner from '../components/Banner';


const Null = () => {
  return null
}

export default function getComponent(component) {
  switch(component) {
    case 'Card':
      return Card
    case 'Banner':
      return Banner
    default:
      return Null
  }
}