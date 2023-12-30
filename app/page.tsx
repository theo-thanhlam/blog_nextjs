import NavBar from '@/components/navbar'
import Footer from '@/components/footer'
import Image from 'next/image'
import Feature from '@/components/feature'
import CategoryList from '@/components/categoryList'
import CardList from '@/components/cardList'
import Pagination from '@/components/pagination'
import Menu from '@/components/menu'

export default function Home() {
  return (
    <div className=''>
    <Feature/>
    <CategoryList />
    <div>
      <CardList/>
      <Pagination/>
      <Menu/>
    </div>
    </div>
  )
}
