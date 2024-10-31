import Link from 'next/link';
import Layout from '../components/layout';
import { getfruitList, getSortedList } from '../lib/data';

// define a getStaticProps() function - this name is defined by next.js
export async function getStaticProps() {
  const allData = getSortedList();
  const fruitdata = getfruitList();
  return { 
    props: { allData,fruitdata},
  };
}

// export our home page component Home
export default function Home( { allData,fruitdata} ) {
  return (
    <Layout home>
      <h1>List of Names</h1>
      <div className="list-group">
      
        {allData.map( 
            ({id, name}) => (
              <Link key={id} href={`/${id}`} className="list-group-item list-group-item-action">
                {name}
              </Link>
            )
          )
        }
      </div>
      <h1>list of fruits</h1>
      <div className = "list-group">
      {fruitdata.map(
        ({id,fruit,size,color}) => {
          return(
          <Link key={id} href={`/fruits/${fruit}`}className="list-group-item list-group-item-action">  
            <h1>{fruit}</h1>
            <h4>{size}</h4>
            <h4>{color}</h4>
          </Link>
          )
        }
      )}
      </div>
    </Layout>
  );
}
