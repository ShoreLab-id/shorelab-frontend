'use client'

import { Breadcrumbs, BreadcrumbItem } from '@nextui-org/react'
import {oxygen} from './font'

export const BreadcrumbsComponent = ({items}) => {
  return (
    <Breadcrumbs>
      {items.map((item, i) => <BreadcrumbItem classNames={{
        item: oxygen + "text-lg last:font-semibold last:text-teal-secondary "
      }} key={i} href={item.href}>{item.name}</BreadcrumbItem>)}
    </Breadcrumbs>
  )
}