import Home from "./components/page/Home";  
import About from "./components/page/About";  
import Categories from "./components/page/Categories";  
import CategoryDetail from "./components/page/CategoryDetail";  
import SearchProduct from "./components/page/SearchProduct";  




const routes = [
    {title: "Home", path:"/", element: Home, isNav:true },
    {title: "About", path:"About", element: About, isNav:true },
    {title: "Categories", path:"Categories", element:Categories, isNav:true },
    {title: "CategoryDetail", path:"categories/:idCategory", element:CategoryDetail, isNav:false},
    {title: "SearchProduct", path:"search-product", element:SearchProduct, isNav:false},
    // {title: "NotFound", path="*", element:NotFound, isNav:false},

]
export default routes
 