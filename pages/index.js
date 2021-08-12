import { fetchEntries } from '@utils/contentfulReviews'

import Review from "../components/Review";

export default function Home({ reviews }) {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <h1 className="text-3xl font-medium title-font text-gray-900 mb-12 text-center">
          Reviews
        </h1>
        <div className="flex flex-wrap -m-4">
          {reviews.map((r) => {
            return <Review key={r.sys.id} title={r.fields.title} text={r.fields.text} authorName={r.fields.authorName} authorTitle={r.fields.authorTitle} topic={r.fields.topic} record={r.fields.record} />
          })}
        </div>
      </div>
    </section>
  );
}

export async function getStaticProps() {
  const res = await fetchEntries()
  const reviews = await res.map((p) => {
    return p
  })

  return {
    props: {
      reviews,
    },
  }
}