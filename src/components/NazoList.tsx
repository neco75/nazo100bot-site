import React from 'react'
import fs from 'fs'
import NazoCard from './NazoCard';

function NazoList() {
  const nazoList = [
    ...fs.readdirSync('public/img/0'),
    ...fs.readdirSync('public/img/1'),
    ...fs.readdirSync('public/img/2'),
    ...fs.readdirSync('public/img/3'),
    ...fs.readdirSync('public/img/4'),
    ...fs.readdirSync('public/img/5'),
    ...fs.readdirSync('public/img/6')
  ]

nazoList.sort((a, b) => parseInt(a) - parseInt(b))
let rarity = 0
let count = 0
return (
    <div className="flex flex-wrap flex-row">
      {nazoList.map((name, index) => {
        count++;
        if(count === 26 || count === 51 || count ===71 ||count ===81 ||count ===91 ||count ===99) rarity++;
        return <NazoCard key={index} src={name} alt={name} rarity={rarity} />;
      })}
    </div>
  );
};

export default NazoList