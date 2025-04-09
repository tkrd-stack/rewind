import Link from 'next/link';
function Rewind() {
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
      <Link href={'/pastrewind'}>昨日のつぶやき</Link>
      <h2>つぶやき</h2>
      <textarea
        name=''
        id=''
        cols={30}
        rows={10}
        placeholder='つぶやき内容'
        className='border-2 border-gray-300 rounded-md p-2'
      ></textarea>
      <button>つぶやく</button>
      <br />
      <h2>つぶやき一覧</h2>
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

export default Rewind;
