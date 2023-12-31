import NavBar from '@/components/navbar';
import Footer from '@/components/footer';
import Image from 'next/image';
import Feature from '@/components/feature';
import CategoryList from '@/components/categoryList';
import Pagination from '@/components/pagination';
import Menu from '@/components/menu';
import PostList from '@/components/postList';

export default function Home() {
  return (
    <div className="">
      <Feature />
      <CategoryList />
      <div>
        <PostList />
        <Pagination />
      </div>
    </div>
  );
}
