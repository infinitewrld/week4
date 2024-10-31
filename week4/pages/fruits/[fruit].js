
import Layout from '../../components/layout';
import { getfruitnames, getfruit } from '../../lib/data';

// define a getStaticProps() function to have next.js retrieve data to use for the dynamic page
// - this name is defined by next.js
export async function getStaticProps( { params } ) {
  const itemData = await getfruit(params.fruit);
  return {
    props: {
      itemData
    }
  };
}

// define a getStaticPaths() function to tell next.js all valid URLs: 1,2,3,4 
// - this name is defined by next.js
export async function getStaticPaths() {
  const paths = getfruitnames();
  return {
    paths,
    fallback: false
  };
}

// export our dynamically routed page component Entry
export default function Entry( { itemData } ) {
  return (
    <Layout>
      <article className="card col-6">
        <div className="card-body">
          <h5 className="card-title">{itemData.fruit}</h5>
          <h6 className="card-subtitle mb-2 text-body-secondary">{itemData.color}</h6>
          <h6 className="card-title">quantity: {itemData.quantity}</h6>
        </div>
      </article>
    </Layout>
  );
}