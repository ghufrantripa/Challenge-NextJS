import Layout from '../components/Layout'

export default function Home() {
  return (
    <>
      <Layout pageTitle='Home Page'>
      <h1 className='title'>Hello Everyone!</h1>
  <div className='box'>
  <h1>
    Ghufran Tripa
  </h1>
  <div className='description'>
  im a Software engineering student at Asia e university and also a student at CCIT FTUI as a 4th-semester software engineer who has an interest in IT. Hoping to get an internship opportunity as a Frontend Developer  at Synapsis.id to add to my work experience in IT
  </div>
  <div className='social'>
    <a className='as' href='https://github.com/ghufrantripa'>GitHub</a>
    <a className='as' href='https://www.instagram.com/ghufrantripa/'>Instagram</a>
    <a className='as' href='https://www.linkedin.com/in/muhamad-ghufran-tripa-syaveyenda-a5942121b/'>LinkedIn</a>
  </div>
</div>
      </Layout>
    </>
  );
}
