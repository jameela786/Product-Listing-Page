import Header from '../Header'
import Products from '../Products'
import './index.css'

const Home = () => {
  console.log('inside home')
  return (
    <>
      <Header />
      <div className="home_container">
        <div className="home_text_container">
          <h1 className="home_title">DISCOVER OUR PRODUCTS</h1>
          <p className="home_description">
            Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
            scelerisque. Dolor integer scelerisque nibh amet mi ut elementum
            dolor.
          </p>
        </div>
        <Products />
      </div>
    </>
  )
}
export default Home
