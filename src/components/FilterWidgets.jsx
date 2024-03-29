import React from 'react'
import FilterResultBy from './partials/FilterResultBy'
import FilterBy from './partials/FilterBy'

const FilterWidgets = () => {
  return (
    <div className='col-lg-2' style={{ paddingTop: '30px' }}>
      <div className='category-filter-widgets'>
        <FilterResultBy />
        <FilterBy />
      </div>
    </div>
  )
}

export default FilterWidgets