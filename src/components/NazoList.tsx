import React,{useState} from 'react';
import fs from 'fs'
import NazoCard from './NazoCard';
import { fetchFilteredIds } from '../libs/fetchFilteredIds';

function NazoList() {
  const nazoList = [
    ...fs.readdirSync('public/img/quiz')
  ]

  

nazoList.sort((a, b) => parseInt(a) - parseInt(b))
let rarity = 0
let count = 0

type filterddate = {
  show_flag_ids: number[]
  answer_flag_ids: number[]
} 
let data:filterddate= {
  show_flag_ids: [],
  answer_flag_ids: []

}
// fetchFilteredIds().then((get_data:filterddate) => {
//   date = get_data
// })

return (
  <div className="flex flex-wrap flex-row">
    {nazoList.map((name, index) => {
      count++;
      if(count === 26 || count === 51 || count ===71 ||count ===81 ||count ===91 ||count ===99) rarity++;
//      if(data.show_flag_ids.includes(count)){
        return <NazoCard key={index} src={name} alt={name} />;
//      }
//      return <div key={index}></div>
    })}
  </div>
);
};

export default NazoList