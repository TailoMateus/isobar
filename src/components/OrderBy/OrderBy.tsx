import React, { useState } from 'react'
import { OrderImage, Dropdown, DropdownOption } from './styles'
import { TBands } from '../../types'

type TData = {
  data: TBands[] | any
  ordenated: (bands: TBands[]) => void;
}

const OrderBy = ({ data, ordenated }: TData) => {
  const [openDropdown, setOpenDropdown] = useState(false);

  const sortBy = (typeSort: string) => {
    data.sort((firstElement: any, secondElement: any) => {
      if(firstElement[typeSort] < secondElement[typeSort]) {
        return -1;
      } else {
        return true;
      }
    });

    const bands = [...data]
    setOpenDropdown(false)
    ordenated(bands);
  }

  return (
    <>
      <OrderImage
        src="assets/order_by.png"
        alt="order bands by name"
        onClick={() => setOpenDropdown((prevState) => !prevState)}
      />

      {openDropdown && (
        <Dropdown>
          <DropdownOption onClick={() => sortBy('name')}>
            ORDEM ALFABÉTICA
          </DropdownOption>
          <DropdownOption onClick={() => sortBy('numPlays')}>
            POPULARIDADE
          </DropdownOption>
        </Dropdown>
      )}
    </>
  )
}

export default OrderBy
