import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage, CustomerPage } from "./pages";

const RouterRoots = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route>
                    <Route path="/" element={<HomePage />} />
                    <Route path="items" element={<CustomerPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default RouterRoots;