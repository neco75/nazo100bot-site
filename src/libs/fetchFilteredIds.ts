export const fetchFilteredIds = () =>

fetch('https://nazo100.onrender.com/api/get_filtered_ids')
  .then(response => response.json())
  .then(data => {
    console.log(data);
    return data;
    // データ処理のロジックを記述
  })
  .catch(error => {
    console.error('Error:', error);
  });

  
