function PastRewind() {
  const converse = [
    {
      time: '10:10',
      content: 'htmlをはじめた',
    },
    {
      time: '13:40',
      content: 'cssをはじめた',
    },
    {
      time: '18:20',
      content: 'jsをはじめた',
    },
  ];
  return (
    <div>
      <h2>昨日のつぶやき</h2>
      <h3>要約</h3>
      <p>昨日はhtml, css, jsを学びました。</p>
      <h3>分類</h3>
      <p>学び：HTML,css,js</p>
      <p>感情：😃</p>
      <p>課題：CSS設計</p>
      <br />
      <h2>昨日のつぶやき一覧</h2>
      {converse.map((item) => (
        <div
          key={item.time}
          className=' border-gray-300 p-2'
        >
          <p>{item.time}</p>
          <p>{item.content}</p>
        </div>
      ))}
    </div>
  );
}

export default PastRewind;
