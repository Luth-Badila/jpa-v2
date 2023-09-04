import HomePage from "./components/Home";
import Gallery from "./components/Gallery";
import Card from "./components/Card";
export default function Home() {
  const items = [
    {
      image: "https://images.pexels.com/photos/17588450/pexels-photo-17588450/free-photo-of-noir-et-blanc-mode-homme-gens.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      caption: "Kami membantu anda untuk menerjemahkan teks baik untuk tugas sekolah, kuliah, penelitian maupun pekerjaan anda",
      instagramUrl: "instagram url here",
      title: "Sablon Kaos",
      icon: "la:tshirt",
    },
    {
      image: "https://images.pexels.com/photos/17640285/pexels-photo-17640285/free-photo-of-lumineux-mode-gens-femme.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      caption: "Kami membantu anda mengkoreksi tulisan anda agar tidak ada typo dan sesuai dengan EYD ata Grammar",
      instagramUrl: "instagram url here",
      title: "Sablon Banner",
      icon: "ph:flag-banner",
    },
    {
      image: "https://images.pexels.com/photos/17640285/pexels-photo-17640285/free-photo-of-lumineux-mode-gens-femme.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      caption: "Kami membantu anda merubah tulisan agar sesuai dengan EYD atau Grammar",
      instagramUrl: "instagram url here",
      title: "Satuan maupun lusinan",
      icon: "bi:repeat-1",
    },
  ];
  const accordionData = [
    {
      title: "What types of files do you support ?",
      content: "We support commonly used text formats (DOC, PDF, TXT) and deliver our customers' files in the original format after translation. Please contact our Support team for more details.",
    },
    {
      title: "Bagaimana saya bisa menghubungi penerjemah ?",
      content: "Kamu bisa menulis catatan kepada penerjemah sebelum proses terjemahan dilakukan atau hubungi langsung tim  kami",
    },
  ];
  const tabs = [
    {
      label: "Tab 1",
      content: <p>This is the content of Tab 1.</p>,
    },
    {
      label: "Tab 2",
      content: <p>This is the content of Tab 2.</p>,
    },
    {
      label: "Tab 3",
      content: (
        <div>
          <p>This is the content of Tab 3</p>
        </div>
      ),
    },
  ];
  const galleryTab = [
    // you can add more image if you want
    {
      imageUrl: "https://themewagon.github.io/snapshot/images/model-1.jpg",
      type: "Nature",
      title: "Beautiful Work",
    },
    {
      imageUrl: "https://themewagon.github.io/snapshot/images/model-8.jpg",
      type: "Nature",
      title: "Beautiful Work",
    },
    {
      imageUrl: "https://themewagon.github.io/snapshot/images/model-3.jpg",
      type: "Nature",
      title: "Beautiful Work",
    },
    {
      imageUrl: "https://themewagon.github.io/snapshot/images/model-4.jpg",
      type: "Nature",
      title: "Beautiful Work",
    },
    {
      imageUrl: "https://themewagon.github.io/snapshot/images/model-5.jpg",
      type: "Nature",
      title: "Beautiful Work",
    },
  ];

  const slides = galleryTab.map((item) => ({
    src: item.imageUrl,
    width: 3840,
    height: 2560,
    srcSet: [
      { src: item.imageUrl, width: 320, height: 213 },
      { src: item.imageUrl, width: 640, height: 426 },
      { src: item.imageUrl, width: 1200, height: 800 },
      { src: item.imageUrl, width: 2048, height: 1365 },
      { src: item.imageUrl, width: 3840, height: 2560 },
    ],
  }));
  return (
    <main>
      <section>
        <HomePage />
      </section>

      <section>
        <div className="px-2 mx-auto flex justify-center flex-col gap-3 my-16">
          <div className="container mx-auto grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
            {items.map(({ caption, image, instagramUrl, title, icon }, index) => {
              return <Card key={index} caption={caption} image={image} instagramUrl={instagramUrl} title={title} icon={icon} />;
            })}
          </div>
        </div>
      </section>

      <section>
        <Gallery />
      </section>
    </main>
  );
}
