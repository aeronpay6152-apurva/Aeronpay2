import PaymentsInfrastructure from './PaymentsInfrastructure';
import WorkSection from './WorkSection';
import CredSection from './CredSection';
import ProductsSection from './ProductsSection';
import SecuritySection from './SecuritySection';
import Community from './Community';
import Blogs from './Blogs';
import Newsletter from './Newsletter';
import SiteFooter from '../Components/Footer';

export default function Home() {
  return (
    <div>
      <PaymentsInfrastructure />
      <WorkSection />
      <CredSection />
      <ProductsSection />
      <SecuritySection />
      <Community />
      <Blogs />
      <Newsletter />
      <SiteFooter />
    </div>
  );
}
