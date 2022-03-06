import React from 'react'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { useRouter } from 'next/router'
import { Icon } from './styles';

const GoBack = () => {
  const router = useRouter()

  return (
    <Icon
      onClick={() => router.push('/bands')}
      icon={faAngleLeft as IconProp}
    />
  )
}

export default GoBack
