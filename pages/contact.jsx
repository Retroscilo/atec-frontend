import React from 'react';
import { fetchAPI } from '../lib/api'

const Contact = ({ contact }) => {
  console.log(contact)
  return (
    <div>contact</div>
  )
}

export async function getStaticProps() {
  const [contact] = await Promise.all([fetchAPI("/contact")])

  return {
    props: { contact },
    revalidate: 1,
  }
}

export default Contact