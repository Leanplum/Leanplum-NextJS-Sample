import styles from '../../styles/Products.module.css'

function track() {
  console.log('tracking event "Add to cart"');
  Leanplum.track('Add to cart');
}

export default function Products() {
  return (
    <div className={styles.container}>
      <h2>Product listing</h2>

      <p>Click the button to track an event.</p>
      <button onClick={track}>Add to cart</button>
    </div>
  )
}

