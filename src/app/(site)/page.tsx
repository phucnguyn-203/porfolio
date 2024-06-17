import Banner from '@/components/Banner';
import ContactSection from '@/components/Contact/ContactSection';
import FieldSection from '@/components/Field/FieldSection';
import NewsSection from '@/components/News/NewsSection';
import ArtsPerfomance from '@/components/ArtsPerformance/ArtsPerfomance';

export default function Home() {
  return (
    <main>
      <Banner />
      <div className="max-w-screen-xl mx-auto">
        <FieldSection />
        <NewsSection />
        <ArtsPerfomance />
        <ContactSection />
      </div>
    </main>
  );
}
