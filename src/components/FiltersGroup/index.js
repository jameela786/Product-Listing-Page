import {Component} from 'react'
import {RiArrowDropUpLine, RiArrowDropDownLine} from 'react-icons/ri'
import './index.css'

class FiltersGroup extends Component {
  state = {
    isDropdownOpen: false,
    selectedOptions: {
      Kids: false,
      Men: false,
      Women: false,
    },
  }

  handleCheckboxChange = option => {
    this.setState(prevState => ({
      selectedOptions: {
        ...prevState.selectedOptions,
        [option]: !prevState.selectedOptions[option],
      },
    }))
  }

  handleUnselectAll = () => {
    this.setState({
      selectedOptions: {
        Kids: false,
        Men: false,
        Women: false,
      },
    })
  }

  onClickIdealFor = () => {
    this.setState(prevState => ({isDropdownOpen: !prevState.isDropdownOpen}))
  }

  renderRatingsFiltersList = () => {
    const {ratingsList, changeRating, activeRatingId} = this.props

    return ratingsList.map(rating => {
      const ratingClassName =
        activeRatingId === rating.ratingId ? `and-up active-rating` : `and-up`

      const onClickRatingItem = () => changeRating(rating.ratingId)

      return (
        <li
          className="rating-item"
          key={rating.ratingId}
          onClick={onClickRatingItem}
        >
          <img
            src={rating.imageUrl}
            alt={`rating ${rating.ratingId}`}
            className="rating-img"
          />
          <p className={ratingClassName}>& up</p>
        </li>
      )
    })
  }

  renderRatingsFilters = () => (
    <div>
      <h1 className="rating-heading">Rating</h1>
      <ul className="ratings-list">{this.renderRatingsFiltersList()}</ul>
    </div>
  )

  renderCategoriesList = () => {
    const {categoryOptions, changeCategory, activeCategoryId} = this.props

    return categoryOptions.map(category => {
      const onClickCategoryItem = () => changeCategory(category.categoryId)
      const isActive = category.categoryId === activeCategoryId
      const categoryClassName = isActive
        ? `category-name active-category-name`
        : `category-name`

      return (
        <li
          className="category-item"
          key={category.categoryId}
          onClick={onClickCategoryItem}
        >
          <p className={categoryClassName}>{category.name}</p>
        </li>
      )
    })
  }

  renderProductCategories = () => (
    <>
      <h1 className="category-heading">Category</h1>
      <ul className="categories-list">{this.renderCategoriesList()}</ul>
    </>
  )

  render() {
    const {isDropdownOpen, selectedOptions} = this.state

    return (
      <div className="filters-group-container">
        <div className="Customize_checkbox">
          <input
            type="checkbox"
            name="checkbox"
            value="chechbox"
            className="checkbox_style"
          />
          <label htmlFor="checkbox" className="checkbox_label">
            CUSTOMIZBLE
          </label>
        </div>
        <hr className="line_break" />
        <div className="dropdown_container">
          <div className="style_idealfordropdown">
            <div className="dropdown_header">
              <label
                htmlFor="category-select"
                className="dropdown-label_header"
              >
                IDEAL FOR
              </label>
              {isDropdownOpen ? (
                <RiArrowDropUpLine size={24} onClick={this.onClickIdealFor} />
              ) : (
                <RiArrowDropDownLine size={24} onClick={this.onClickIdealFor} />
              )}
            </div>
            {isDropdownOpen && (
              <div className="dropdown_idealfor">
                <div className="Customize_checkbox">
                  <button
                    type="button"
                    className="unselect_btn"
                    onClick={this.handleUnselectAll}
                  >
                    Unselect All
                  </button>
                </div>
                {Object.keys(selectedOptions).map(option => (
                  <div className="IdealFor_checkbox" key={option}>
                    <input
                      type="checkbox"
                      name={option}
                      value={option}
                      className="IdealFor_style"
                      checked={selectedOptions[option]}
                      onChange={() => this.handleCheckboxChange(option)}
                    />
                    <label htmlFor={option} className="IdealFor_label">
                      {option}
                    </label>
                  </div>
                ))}
              </div>
            )}
          </div>
          <hr className="line_break" />
          <div className="style_idealfordropdown">
            <div className="dropdown_header">
              <label
                htmlFor="category-select"
                className="dropdown-label_header"
              >
                OCCASSION
              </label>
              {isDropdownOpen ? (
                <RiArrowDropUpLine size={24} onClick={this.onClickIdealFor} />
              ) : (
                <RiArrowDropDownLine size={24} onClick={this.onClickIdealFor} />
              )}
            </div>
            {isDropdownOpen && (
              <div className="dropdown_idealfor">
                <div className="Customize_checkbox">
                  <button
                    type="button"
                    className="unselect_btn"
                    onClick={this.handleUnselectAll}
                  >
                    Unselect All
                  </button>
                </div>
                {Object.keys(selectedOptions).map(option => (
                  <div className="IdealFor_checkbox" key={option}>
                    <input
                      type="checkbox"
                      name={option}
                      value={option}
                      className="IdealFor_style"
                      checked={selectedOptions[option]}
                      onChange={() => this.handleCheckboxChange(option)}
                    />
                    <label htmlFor={option} className="IdealFor_label">
                      {option}
                    </label>
                  </div>
                ))}
              </div>
            )}
          </div>
          <hr className="line_break" />
          <div className="style_idealfordropdown">
            <div className="dropdown_header">
              <label
                htmlFor="category-select"
                className="dropdown-label_header"
              >
                WORK
              </label>
              {isDropdownOpen ? (
                <RiArrowDropUpLine size={24} onClick={this.onClickIdealFor} />
              ) : (
                <RiArrowDropDownLine size={24} onClick={this.onClickIdealFor} />
              )}
            </div>
            {isDropdownOpen && (
              <div className="dropdown_idealfor">
                <div className="Customize_checkbox">
                  <button
                    type="button"
                    className="unselect_btn"
                    onClick={this.handleUnselectAll}
                  >
                    Unselect All
                  </button>
                </div>
                {Object.keys(selectedOptions).map(option => (
                  <div className="IdealFor_checkbox" key={option}>
                    <input
                      type="checkbox"
                      name={option}
                      value={option}
                      className="IdealFor_style"
                      checked={selectedOptions[option]}
                      onChange={() => this.handleCheckboxChange(option)}
                    />
                    <label htmlFor={option} className="IdealFor_label">
                      {option}
                    </label>
                  </div>
                ))}
              </div>
            )}
          </div>
          <hr className="line_break" />
          <div className="style_idealfordropdown">
            <div className="dropdown_header">
              <label
                htmlFor="category-select"
                className="dropdown-label_header"
              >
                FABRIC
              </label>
              {isDropdownOpen ? (
                <RiArrowDropUpLine size={24} onClick={this.onClickIdealFor} />
              ) : (
                <RiArrowDropDownLine size={24} onClick={this.onClickIdealFor} />
              )}
            </div>
            {isDropdownOpen && (
              <div className="dropdown_idealfor">
                <div className="Customize_checkbox">
                  <button
                    type="button"
                    className="unselect_btn"
                    onClick={this.handleUnselectAll}
                  >
                    Unselect All
                  </button>
                </div>
                {Object.keys(selectedOptions).map(option => (
                  <div className="IdealFor_checkbox" key={option}>
                    <input
                      type="checkbox"
                      name={option}
                      value={option}
                      className="IdealFor_style"
                      checked={selectedOptions[option]}
                      onChange={() => this.handleCheckboxChange(option)}
                    />
                    <label htmlFor={option} className="IdealFor_label">
                      {option}
                    </label>
                  </div>
                ))}
              </div>
            )}
          </div>
          <hr className="line_break" />
          <div className="style_idealfordropdown">
            <div className="dropdown_header">
              <label
                htmlFor="category-select"
                className="dropdown-label_header"
              >
                SEGMENT
              </label>
              {isDropdownOpen ? (
                <RiArrowDropUpLine size={24} onClick={this.onClickIdealFor} />
              ) : (
                <RiArrowDropDownLine size={24} onClick={this.onClickIdealFor} />
              )}
            </div>
            {isDropdownOpen && (
              <div className="dropdown_idealfor">
                <div className="Customize_checkbox">
                  <button
                    type="button"
                    className="unselect_btn"
                    onClick={this.handleUnselectAll}
                  >
                    Unselect All
                  </button>
                </div>
                {Object.keys(selectedOptions).map(option => (
                  <div className="IdealFor_checkbox" key={option}>
                    <input
                      type="checkbox"
                      name={option}
                      value={option}
                      className="IdealFor_style"
                      checked={selectedOptions[option]}
                      onChange={() => this.handleCheckboxChange(option)}
                    />
                    <label htmlFor={option} className="IdealFor_label">
                      {option}
                    </label>
                  </div>
                ))}
              </div>
            )}
          </div>
          <hr className="line_break" />
          <div className="style_idealfordropdown">
            <div className="dropdown_header">
              <label
                htmlFor="category-select"
                className="dropdown-label_header"
              >
                SUITABLE FOR
              </label>
              {isDropdownOpen ? (
                <RiArrowDropUpLine size={24} onClick={this.onClickIdealFor} />
              ) : (
                <RiArrowDropDownLine size={24} onClick={this.onClickIdealFor} />
              )}
            </div>
            {isDropdownOpen && (
              <div className="dropdown_idealfor">
                <div className="Customize_checkbox">
                  <button
                    type="button"
                    className="unselect_btn"
                    onClick={this.handleUnselectAll}
                  >
                    Unselect All
                  </button>
                </div>
                {Object.keys(selectedOptions).map(option => (
                  <div className="IdealFor_checkbox" key={option}>
                    <input
                      type="checkbox"
                      name={option}
                      value={option}
                      className="IdealFor_style"
                      checked={selectedOptions[option]}
                      onChange={() => this.handleCheckboxChange(option)}
                    />
                    <label htmlFor={option} className="IdealFor_label">
                      {option}
                    </label>
                  </div>
                ))}
              </div>
            )}
          </div>
          <hr className="line_break" />
          <div className="style_idealfordropdown">
            <div className="dropdown_header">
              <label
                htmlFor="category-select"
                className="dropdown-label_header"
              >
                RAW MATERIALS
              </label>
              {isDropdownOpen ? (
                <RiArrowDropUpLine size={24} onClick={this.onClickIdealFor} />
              ) : (
                <RiArrowDropDownLine size={24} onClick={this.onClickIdealFor} />
              )}
            </div>
            {isDropdownOpen && (
              <div className="dropdown_idealfor">
                <div className="Customize_checkbox">
                  <button
                    type="button"
                    className="unselect_btn"
                    onClick={this.handleUnselectAll}
                  >
                    Unselect All
                  </button>
                </div>
                {Object.keys(selectedOptions).map(option => (
                  <div className="IdealFor_checkbox" key={option}>
                    <input
                      type="checkbox"
                      name={option}
                      value={option}
                      className="IdealFor_style"
                      checked={selectedOptions[option]}
                      onChange={() => this.handleCheckboxChange(option)}
                    />
                    <label htmlFor={option} className="IdealFor_label">
                      {option}
                    </label>
                  </div>
                ))}
              </div>
            )}
          </div>
          <hr className="line_break" />
          <div className="style_idealfordropdown">
            <div className="dropdown_header">
              <label
                htmlFor="category-select"
                className="dropdown-label_header"
              >
                PATTERN
              </label>
              {isDropdownOpen ? (
                <RiArrowDropUpLine size={24} onClick={this.onClickIdealFor} />
              ) : (
                <RiArrowDropDownLine size={24} onClick={this.onClickIdealFor} />
              )}
            </div>
            {isDropdownOpen && (
              <div className="dropdown_idealfor">
                <div className="Customize_checkbox">
                  <button
                    type="button"
                    className="unselect_btn"
                    onClick={this.handleUnselectAll}
                  >
                    Unselect All
                  </button>
                </div>
                {Object.keys(selectedOptions).map(option => (
                  <div className="IdealFor_checkbox" key={option}>
                    <input
                      type="checkbox"
                      name={option}
                      value={option}
                      className="IdealFor_style"
                      checked={selectedOptions[option]}
                      onChange={() => this.handleCheckboxChange(option)}
                    />
                    <label htmlFor={option} className="IdealFor_label">
                      {option}
                    </label>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default FiltersGroup
