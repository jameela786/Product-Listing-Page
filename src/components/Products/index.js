import {Component} from 'react'
import {ThreeDots} from 'react-loader-spinner'
import FiltersGroup from '../FiltersGroup'
import ProductCard from '../ProductCard'
import ProductsHeader from '../ProductsHeader'
import './index.css'

const categoryOptions = [
  {
    name: 'Clothing',
    categoryId: '1',
  },
  {
    name: 'Electronics',
    categoryId: '2',
  },
  {
    name: 'Appliances',
    categoryId: '3',
  },
  {
    name: 'Grocery',
    categoryId: '4',
  },
  {
    name: 'Toys',
    categoryId: '5',
  },
]

const sortbyOptions = [
  {
    optionId: 'RECOMMENDED',
    displayText: 'RECOMMENDED',
  },
  {
    optionId: 'NEWEST_FIRST',
    displayText: 'NEWEST FIRST',
  },
  {
    optionId: 'POPULAR',
    displayText: 'POPULAR',
  },
  {
    optionId: 'PRICE_HIGH',
    displayText: 'Price (High-Low)',
  },
  {
    optionId: 'PRICE_LOW',
    displayText: 'Price (Low-High)',
  },
]

const ratingsList = [
  {
    ratingId: '4',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rating-four-stars-img.png',
  },
  {
    ratingId: '3',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rating-three-stars-img.png',
  },
  {
    ratingId: '2',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rating-two-stars-img.png',
  },
  {
    ratingId: '1',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rating-one-star-img.png',
  },
]

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Products extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    productsList: [],
    activeOptionId: sortbyOptions[0].optionId,
    activeCategoryId: '',
    searchInput: '',
    activeRatingId: '',
  }

  componentDidMount() {
    this.getProducts()
  }

  getProducts = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })
    const apiUrl = `https://fakestoreapi.com/products`
    try {
      const response = await fetch(apiUrl)
      if (response.ok) {
        const fetchedData = await response.json()
        const UpdatedData = fetchedData.map(eachproduct => ({
          category: eachproduct.category,
          description: eachproduct.description,
          id: eachproduct.id,
          image: eachproduct.image,
          price: eachproduct.price,
          count: eachproduct.rating.count,
          rate: eachproduct.rating.rate,
          title: eachproduct.title,
        }))
        console.log('UpdatedData:', UpdatedData)

        this.setState({
          productsList: UpdatedData,
          apiStatus: apiStatusConstants.success,
        })
      } else {
        this.setState({apiStatus: apiStatusConstants.failure})
      }
    } catch (error) {
      console.log('Network error:', error)
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderProductsList = () => {
    const {productsList, activeOptionId} = this.state
    const shouldShowProductsList = productsList.length > 0

    return shouldShowProductsList ? (
      <div className="all-products-container">
        <ProductsHeader
          activeOptionId={activeOptionId}
          sortbyOptions={sortbyOptions}
          changeSortby={this.changeSortby}
        />
        <ul className="products-list">
          {productsList.map(product => (
            <ProductCard productData={product} key={product.id} />
          ))}
        </ul>
      </div>
    ) : (
      <div className="no-products-view">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz/nxt-trendz-no-products-view.png"
          className="no-products-img"
          alt="no products"
        />
        <h1 className="no-products-heading">No Products Found</h1>
        <p className="no-products-description">
          We could not find any products. Try other filters.
        </p>
      </div>
    )
  }

  renderLoader = () => (
    <div className="products-loader-container" data-testid="loader">
      <ThreeDots type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </div>
  )

  renderApiFailed = () => {
    console.log('job inside api fail')
    return (
      <div className="Mainapifailures_container">
        <div className="failureApi_container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/failure-img.png"
            className="failureApi_img"
            alt="failure view"
          />
          <h1 className="failureapi_mainhead">Oops! Something Went Wrong!</h1>
          <p className="failureapi_mainhead">
            We cannot seem to find the page you are looking for.
          </p>
        </div>
      </div>
    )
  }

  renderProducts() {
    const {apiStatus} = this.state
    console.log('renderProducts api status=', apiStatus)
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderProductsList()
      case apiStatusConstants.failure:
        return this.renderApiFailed()
      case apiStatusConstants.inProgress:
        return this.renderLoader()
      default:
        return null
    }
  }

  render() {
    const {activeCategoryId, searchInput, activeRatingId} = this.state
    return (
      <>
        <div className="all-products-section">
          <ul className="All_profile_Filter_container">
            <FiltersGroup
              searchInput={searchInput}
              categoryOptions={categoryOptions}
              ratingsList={ratingsList}
              changeSearchInput={this.changeSearchInput}
              enterSearchInput={this.enterSearchInput}
              activeCategoryId={activeCategoryId}
              activeRatingId={activeRatingId}
              changeCategory={this.changeCategory}
              changeRating={this.changeRating}
              clearFilters={this.clearFilters}
            />
          </ul>
          <div className="all-products-container">{this.renderProducts()}</div>
        </div>
      </>
    )
  }
}

export default Products
