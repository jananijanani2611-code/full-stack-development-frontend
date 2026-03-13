export default function Table(){
    return(
         <div className="table-container">
      <h2>Flower Details</h2>

      <table>
        <thead>
          <tr>
            <th>Flower</th>
            <th>Color</th>
            <th>Season</th>
            <th>Price</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Rose</td>
            <td>Red</td>
            <td>Winter</td>
            <td>₹20</td>
          </tr>

          <tr>
            <td>Lotus</td>
            <td>Pink</td>
            <td>Summer</td>
            <td>₹30</td>
          </tr>

          <tr>
            <td>Sunflower</td>
            <td>Yellow</td>
            <td>Summer</td>
            <td>₹25</td>
          </tr>

          <tr>
            <td>Lily</td>
            <td>White</td>
            <td>Spring</td>
            <td>₹35</td>
          </tr>
        </tbody>
      </table>
    </div>
    )
}