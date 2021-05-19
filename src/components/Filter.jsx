const Filter = ({handleSetCategory}) => {
  return (
    <div className="filter_container">
      <div className="filter">
        <label className="filter_label" htmlFor="filter">Filtro: </label>
        <select className="filter_selector" name="filter" id="filter" onChange={handleSetCategory}>
          <option value="all">Todos</option>
          <option value="expert">Expert</option>
          <option value="potão">Potão</option>
          <option value="spa naturals">Spa Naturals</option>
          <option value="especials">Especials</option>
          <option value="brasil">Brasil</option>
        </select>
      </div>
    </div>
  );
}

export default Filter;
