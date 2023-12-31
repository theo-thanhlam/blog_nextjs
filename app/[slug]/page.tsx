import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import TimeAgo from 'react-timeago';
import { format } from 'date-fns';
import Comments from '@/components/postComments';
const SinglePage = () => {
  return (
    <div className="">
      <div className="flex overflow-hidden">
        <img src="/p2.jpg" alt="Post Cover" className="object-center" />
      </div>
      <div className="postInfo">
        <div className="postTitle">
          <h1 className="title font-bold text-3xl">
            Lorem ipsum dolor sit amet, consectetur adipisicing
          </h1>
        </div>
        <div className="userContainer flex py-4 items-center gap-5">
          <div className="userImageContainer w-12 h-12 relative rounded-full overflow-hidden ">
            <img
              src="/p1.jpg"
              alt=""
              className="authorImage w-full h-full object-cover "
            />
          </div>

          <div>
            <div className="author ">
              <Link href={''} className="font-bold">
                Author Name
              </Link>
            </div>
            <div className="time">
              <time>
                {' '}
                {format(
                  new Date('2021-09-27 15:22:53.679985+02'),
                  'MMM d, yyyy'
                )}
              </time>
            </div>
          </div>
        </div>
        <div className="postContent">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur,
          dolor tempora voluptatem itaque est harum dolorum incidunt doloribus
          eum dolores delectus, optio officiis tenetur nostrum totam vel?
          Delectus, animi eius. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. At modi maiores saepe, doloribus atque impedit
          consectetur officia delectus laboriosam expedita reprehenderit
          blanditiis hic ut possimus odit, in, quod vel placeat.
        </div>
      </div>
      <div className="postComment">
        <Comments />
      </div>
    </div>
  );
};

export default SinglePage;
