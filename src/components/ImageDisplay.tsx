"use client";

import Image from 'next/image'
import Link from 'next/link'
import { useState,Suspense } from 'react'
import Loading from './Loading'

type ImageDisplayProps = {
  showFlagItem: [number, string, number, number, string][]
  answerFlagIds: number[]
}

const ImageDisplay = ({ showFlagItem, answerFlagIds }: ImageDisplayProps) => {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <div>
      <div className="mb-4">
        <label className="inline-flex items-center me-5 cursor-pointer">
          <span className="ms-3 mx-2 text-sm font-medium">解答表示</span>
          <input 
            type="checkbox" 
            value="" 
            onChange={() => setShowAnswer(!showAnswer)}
            className="sr-only peer" 
            checked={showAnswer}
            />
          <div className="relative w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
        </label>
      </div>
      <div className="flex flex-wrap justify-center" style={{width: '100%' , margin: '0 auto'}}>
        {Array.from({ length: 100 }, (_, i) => i + 1).map((id) => {
          const item = showFlagItem.find((item) => item[0] === id);

          return (
            <div
              key={id}
              className=" w-1/5 box-border flex justify-center items-center m-2"
              style={{
                border: answerFlagIds.includes(id)
                  ? '2px solid green'
                  : '2px solid red',
              }}
            >
              {item ? (
                <Suspense fallback={<Loading />}>
                  <div className="text-center">
                    <Link href={`/image/${item[4].split('.')[0]}`}>
                      <Image
                        src={`/img/quiz/${item[4]}`}
                        alt={item[4]}
                        width={350}
                        height={350}
                      />
                    </Link>
                    {showAnswer && item[3] === 1 && <div>{item[1]}</div>}
                  </div>
                </Suspense>
              ) : (
                <Image
                  src="/img/sample.png"
                  alt="Sample Image"
                  width={350}
                  height={350}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ImageDisplay;