import './style.css'

const ItemDetail = ({itemSelected}) => {
  return (
    <div>
        <h6 className="card-tittle">{itemSelected?.tittle}</h6>
        <img src={itemSelected?.image} alt={itemSelected?.tittle} width={70} />
        <div className="card-description">
            <p>{itemSelected?.description}</p>
        </div>
        <p>${itemSelected?.price}</p>
    </div>
  );
};

export default ItemDetail