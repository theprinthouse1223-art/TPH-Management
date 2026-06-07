import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

import MainLayout from "../layout/MainLayout";

import LoginPage from "../pages/Login/LoginPage";
import Dashboard from "../pages/Dashboard/Dashboard";
import InventoryPage from "../pages/Inventory/InventoryPage";
import PurchaseEntry from "../pages/Purchase/PurchaseEntry";
import SalesPOS from "../pages/Sales/SalesPOS";
import CustomerOrderPage from "../pages/Orders/CustomerOrderPage";
import ProductionQueuePage from "../pages/Production/ProductionQueuePage";
import BillingQueuePage from "../pages/Billing/BillingQueuePage";
import SettingsPage from "../pages/Settings/SettingsPage";

export default function AppRouter(){

    return(

        <BrowserRouter>

            <Routes>

                <Route
                    path="/"
                    element={<LoginPage/>}
                />

                <Route
                    path="/app"
                    element={<MainLayout/>}
                >

                    <Route
                        path="dashboard"
                        element={<Dashboard/>}
                    />

                    <Route
                        path="inventory"
                        element={<InventoryPage/>}
                    />

                    <Route
                        path="purchase"
                        element={<PurchaseEntry/>}
                    />

                    <Route
                        path="sales"
                        element={<SalesPOS/>}
                    />

                    <Route
                        path="orders"
                        element={<CustomerOrderPage/>}
                    />

                    <Route
                        path="production"
                        element={<ProductionQueuePage/>}
                    />

                    <Route
                        path="billing"
                        element={<BillingQueuePage/>}
                    />

                    <Route
                        path="settings"
                        element={<SettingsPage/>}
                    />

                </Route>

            </Routes>

        </BrowserRouter>

    );

}