export const Table = ({ table }) => {
  return (
    <div className="table">
      <tr>
        {table.headers?.map((element, index) => {
          return <td key={index}>{element}</td>;
        })}
      </tr>
      {table.columns?.map((column, index) => {
        return (
          <tr key={index}>
            {column.map((row, subIndex) => {
              return <td key={subIndex}>{row}</td>;
            })}
          </tr>
        );
      })}
    </div>
  );
};
