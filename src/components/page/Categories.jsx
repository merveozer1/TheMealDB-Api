import { useState, useEffect } from "react"
import { Link } from "react-router-dom";


function Categories(props) {
    const [data, setData] = useState([]);
    const setLoading = useState(true)

    useEffect(() => {
        setTimeout(() => {
            const URL = 'https://www.themealdb.com/api/json/v1/1/categories.php';
            fetch(URL)
                .then(response => response.json())
                .then(json => {
                    setData(json.categories)
                    console.log(json)
                    setLoading(false)
                })
                .catch((error) => console.error('Error:', error))
        }, 500)
    }, [setLoading])

    return <>
        <h1>Categories</h1>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Meal</th>
                    <th scope="col">Description</th>
                </tr>
            </thead>
            <tbody>
                {
                    data.map(
                        item => <tr>
                            <td>   {item.idCategory}  </td>
                            <td>  <Link to={`${item.idCategory}`}>{item.strCategory}</Link> </td>
                            <td>   {item.strCategoryDescription.split(".")[0]}.  </td>
                        </tr>
                    )
                }
            </tbody>
        </table>
    </>
}

export default Categories