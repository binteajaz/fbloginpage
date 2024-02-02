import React from 'react';
import facebookLogo from './Facebook_Logo_(2019).svg.png';

export default function Title() {
  return (
    <div className="title">
    <img src={facebookLogo} width="240px" alt="Facebook" />
    <p>Facebook helps you connect and share with the people in your life.</p>
    </div>
  );
}
