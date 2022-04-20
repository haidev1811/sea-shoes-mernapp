import React from 'react'
import { Breadcrumbs, EmailHome, NewsDetail } from '../components'

const NewsDetailPage = () => {
  return (
    <>
      <Breadcrumbs label='Hướng dẫn cách làm trắng đế giày bị ố vàng chuẩn chỉ' category='Tin tức'/>
      <NewsDetail/>
      <EmailHome/>
    </>
  )
}

export default NewsDetailPage