import React from 'react'

export const injectPropInComponent = (
  children: React.ReactNode,
  props: object
) => {
  return React.Children.map(children, (child) => {
    if (!React.isValidElement(child)) return null
    return React.cloneElement(child, props)
  })
}
