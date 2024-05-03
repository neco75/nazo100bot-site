// app/page.tsx
import ImageDisplay from '../components/ImageDisplay'

async function getData() {
  const res = await fetch('https://nazo100.onrender.com/api/get_filtered_item', { cache: 'no-store' })
  return res.json()
}

export default async function Home() {
  const data = await getData()
  const { answer_flag_ids, show_flag_item } = data

  return (
    <div className='bg-black text-green-500 p-1 text-center'>
      <h1 className='text-3xl font-bold mb-4'>謎100BOT</h1>
      <p className='text-lg'>現在公開: {show_flag_item.length} / 100</p>
      <p className='text-lg'>解答済み: {answer_flag_ids.length} / 100</p>
      <ImageDisplay showFlagItem={show_flag_item} answerFlagIds={answer_flag_ids} />
    </div>
  )

}