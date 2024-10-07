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
      <div  className = "list-group">
      {fruitdata.map( 
            ({id, fruit}) => (
              <Link key={id} href={`/${id}`} className="list-group-item list-group-item-action">
                {fruit}
              </Link>
            )
          )
        }
      </div>
    </Layout>
  );
}