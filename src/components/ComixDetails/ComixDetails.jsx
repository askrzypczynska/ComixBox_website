import './ComixDetails.css';
import React, { useEffect, useState } from 'react';
import Loader from '../Loader/Loader';
import coverImg from '../../img/no_cover.jpg';
import {FaArrowLeft} from "react-icons/fa";
import { useNavigate, useParams } from 'react-router-dom';
import { useGlobalContext } from '../../content';

function ComixDetails() {
  
  const {comics} = useGlobalContext();
  const {id} = useParams();
  const [loading, setLoading] = useState(false);
  const [comic, setComic] = useState(null);
  const navigate = useNavigate();

  return (
    <section className='comixDetails'>
      <div className='container'>
        <div className='comixDetails-content'>
          <div className='comixDetails-img'>
            <img src={comics[id-1].coverPage} alt="Cover page" />
          </div>
          <div className='comixDetails-info'>
            <div className='comixDetail-item title'>
              <span className='comixDetails-title'>{comics[id-1].title}</span>
            </div>
            <div className='comixDetail-item description'>
              <span className='comixDetails-description'>{comics[id-1].description}</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default ComixDetails;
