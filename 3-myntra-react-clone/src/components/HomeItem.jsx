import { useDispatch, useSelector } from "react-redux";
import { bagActions } from "../store/bagSlice";
import { GrAddCircle } from "react-icons/gr";
import { MdDelete } from "react-icons/md";

const HomeItem = ( {item} ) => {
  const dispatch = useDispatch();
  const bag = useSelector(store => store.bag);
  const exists = bag.indexOf(item.id) !== -1;


  const handleAddToBag = () => {
    dispatch(bagActions.addToBag(item.id));
  }

  const handleRemoveFromBag = () => {
    dispatch(bagActions.removeFromBag(item.id));
  }

  return(
    <div className="item-container">
      <img className="item-image" src={item.image} alt="item image"/>
      <div className="rating">
          {item.rating.stars} ⭐ | {item.rating.count}
      </div>
      <div className="company-name">{item.company}</div>
      <div className="item-name">{item.item_name}</div>
      <div className="price">
          <span className="current-price">Rs {item.current_price}</span>
          <span className="original-price">Rs {item.original_price}</span>
          <span className="discount">({item.discount_percentage}% OFF)</span>
      </div>

      {exists ? 
        <button type="button" className="btn btn-danger btn-add-bag" onClick={handleRemoveFromBag}><MdDelete /> Remove</button> : 
        <button type="button" className="btn btn-success btn-add-bag" onClick={handleAddToBag}><GrAddCircle /> Add to Bag</button>
      }

    </div>

    
  )
}

export default HomeItem;