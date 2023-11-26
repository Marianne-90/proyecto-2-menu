export const UserHistory = ({ table }) => {
  return (
    <div className="user-history">
      {table.map((element, index) => {
        return (
          <div className="history-element" key={index}>
            <h3>{element.title}</h3>
            <p>
              <b>Como:</b>
              {element.who}
            </p>
            <p>
              <b>Quiero:</b>
              {element.what}
            </p>
            <p>
              <b>Para:</b>
              {element.for}
            </p>
            <p>
              <b>Condiciones:</b>
            </p>
            <ul>
              {element.conditions.map((item, subIndex) => {
                return <li key={subIndex}>{item}</li>;
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
};
