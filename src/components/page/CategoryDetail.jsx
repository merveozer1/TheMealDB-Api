import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

function CategoryDetail(props) {
    const params = useParams()
    const [data, setData] = useState([])
    console.log(params)

    useEffect(() => {
        const URL = 'https://www.themealdb.com/api/json/v1/1/categories.php';
        fetch(URL)
            .then(response => response.json())
            .then(json => {
                setData(json.categories.filter(item => item.idCategory === params.idCategory.toString() && item))
                console.log(json)
            })
            .catch((error) => console.error('Error:', error))
    }, [params.idCategory])

    return <>
        <h1>Detail</h1>
        {
            data.map(
                item => <div key={item.idCategory}>
                    {item.strCategoryDescription}
                    <br/>
                    <img src={item.strCategoryThumb} alt="thumb" />
                </div>
            )
        }
    </>
}

export default CategoryDetail


