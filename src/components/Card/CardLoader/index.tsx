import loading from '../../../assets/images/loader.svg';
function CardLoader() {
  return (
    <div className="card-loading">
      <img src={loading} alt="" />
    </div>
  );
}

export default CardLoader;