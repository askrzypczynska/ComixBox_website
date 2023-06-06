import './ComixList.css';
import React from 'react';
import { useGlobalContext } from '../../content';

import Comic from "../ComixList/Comic"
import Loader from "../Loader/Loader"
import coverImg from "../../img/no_cover.jpg"

function Comixlist() {
  const {comics, loading, resultTitle} = useGlobalContext();
  const comicsWithCovers = comics.map((comicSingle) => {
    return {
      ...comicSingle,
      id: comicSingle.id,
      cover_img: comicSingle.coverPage ? comicSingle.coverPage : coverImg
    }
  });

  console.log(comics);

  if(loading) return <Loader />;

  return (
    <section className='comixList'>
      <div className='container'>
        <div className='section-title'>
          <h2>{resultTitle}</h2>
        </div>
        <div className='comixList-content grid'>
          {
            comicsWithCovers.slice(0, 30).map((item, index) => {
              return (
                <Comic key={index} {...item} />
              )
            })
          }
        </div>
      </div>
    </section>
  );
}

export default Comixlist;
