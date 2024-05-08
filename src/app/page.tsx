import ImageDisplay from '../components/ImageDisplay'

async function getData() {
  const res = await fetch('https://nazo100.onrender.com/api/get_filtered_item', { cache: 'no-store' })
  return res.json()
}

export default async function Home() {
  const data = await getData()
  const { answer_flag_ids, show_flag_item } = data

  return (
    <div className=' p-1 text-center'>

      <div className='text-lg'>現在公開: {show_flag_item.length} / 100</div>
      <div className='text-lg'>解答済み: {answer_flag_ids.length} / 100</div>
      <ImageDisplay showFlagItem={show_flag_item} answerFlagIds={answer_flag_ids} />

    </div>
  )

}