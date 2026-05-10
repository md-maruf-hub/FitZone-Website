import { Link } from 'react-router-dom'
const ProductCard = ({ item }) => {
return (
<div className='bg-white p-4 border'>
<img
src={item.image}
alt=''
className='w-full h-72 object-cover'
/>
<div className='mt-4'>
<h2 className='text-2xl font-bold'>{item.name}</h2>
<p className='text-lime-600 text-xl font-semibold mt-2'>
${item.price}
</p>
<Link to={`/product/${item._id}`}>
<button className='w-full border mt-4 py-3 hover:bg-lime-400
transition'>
VIEW PRODUCT
</button>
</Link>
</div>
</div>
)
}

export default ProductCard
