import HomePage from "./components/Home";
export default function Home() {
  const items = [
    {
      image: "https://images.pexels.com/photos/17588450/pexels-photo-17588450/free-photo-of-noir-et-blanc-mode-homme-gens.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      caption: "Kami membantu anda untuk menerjemahkan teks baik untuk tugas sekolah, kuliah, penelitian maupun pekerjaan anda",
      instagramUrl: "instagram url here",
      title: "Translation",
      icon: "bx:edit",
    },
    {
      image: "https://images.pexels.com/photos/17640285/pexels-photo-17640285/free-photo-of-lumineux-mode-gens-femme.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      caption: "Kami membantu anda mengkoreksi tulisan anda agar tidak ada typo dan sesuai dengan EYD ata Grammar",
      instagramUrl: "instagram url here",
      title: "Proofread",
      icon: "ph:read-cv-logo-bold",
    },
    {
      image: "https://images.pexels.com/photos/17640285/pexels-photo-17640285/free-photo-of-lumineux-mode-gens-femme.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      caption: "Kami membantu anda merubah tulisan agar sesuai dengan EYD atau Grammar",
      instagramUrl: "instagram url here",
      title: "Editing",
      icon: "ant-design:translation-outlined",
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
  return (
    <main>
      <HomePage />
    </main>
  );
}
