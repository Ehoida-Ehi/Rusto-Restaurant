import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar'; 
import Footer from './components/Footer'; 
import Navigatebar from './components/Navigatebar'; 
import Home from './pages/Home';
import ShopMenu from './pages/ShopMenu';
import Details from './pages/Details';
import SignIn from './pages/SignIn';
import RegForm from './pages/RegForm';
import Layout from './dashboard/Layout';
import Layout2 from './dashStaff/Layout';
import Layout3 from './dashSuperAdmin/Layout';
import AddProduct from './dashboard/AddProduct';
import AdminSign from './dashboard/AdminSign';
import AdminReg from './dashboard/AdminReg';
import Error404 from './pages/Error404';
import CreateCategory from './dashboard/CreateCategory';
import Dashboard from './dashboard/Dashboard';
import ChangeUserPass from './pages/ChangeUserPass';
import StaffReg from './pages/StaffReg';
import StaffSignIn from './pages/StaffSignIn';
import ChangeStaffPass from './pages/ChangeStaffPass';
import ChangeAdminPass from './dashboard/ChangeAdminPass';
import Contact from './pages/Contact';
import Booking from './pages/Booking';
import Cart from './pages/Cart';
import DashStaff from './dashStaff/DashStaff';
import OrderDish from './dashStaff/OrderDish';
import TableManger from './dashStaff/TableManger';
import ViewMenu from './dashStaff/ViewMenu';
import AllUsers from './dashboard/AllUsers';
import AllStaff from './dashStaff/AllStaff';
import AllMenu from './dashboard/AllMenu';
import OrderHistory from './pages/OrderHistory';
import ViewProfile from './dashStaff/ViewProfile';
import EditProfile from './dashStaff/EditProfile';
import AdminProfile from './dashboard/AdminProfile';
import EditAdminPro from './dashboard/EditAdminPro';
import BillingReceipt from './pages/BillingReceipt';
import RestaurantBill from './dashStaff/RestaurantBill';
import TransactionHistory from './dashboard/TransactionHistory';
import WishList from './pages/WishList';
import ReviewPage from './pages/ReviewPage';
import DashSuperAdmin from './dashSuperAdmin/DashSuperAdmin';
import ViewAll from './dashSuperAdmin/ViewAll';
import SuperAdminSignin from './pages/SuperAdminSignin';
import BranchRevenue from './dashSuperAdmin/BranchRevenue';
import ViewBranch from './dashSuperAdmin/ViewBranch';

const Content = () => {
  const location = useLocation(); // Get the current location

  // Define paths for Navbar, Navigatebar, and Footer
  const showNavbarOnPaths = ["/"];
  const showNavigatebarOnPaths = ["/ShopMenu", "/Contact", "/Details/:id", 
    "/Booking", "/Cart", "/Seating", "/CustomerView", "/StaffView", "/OrderHistory", "/BillingReceipt", "/WishList", "/ReviewPage"];
  const showFooterOnPaths = ["/", "/ShopMenu", "/Contact", "/Details/:id", 
    "/Booking", "/Cart", "Seating", "/CustomerView", "/StaffView", "/OrderHistory", "/BillingReceipt", "/WishList", "/ReviewPage"];

  // Check if the current path matches the criteria
  const showNavbar = showNavbarOnPaths.includes(location.pathname);
  const showNavigatebar = showNavigatebarOnPaths.some((path) => location.pathname.startsWith(path.replace(":id", "")));
  const showFooter = showFooterOnPaths.some((path) => location.pathname.startsWith(path.replace(":id", "")));

  return (
    <>
      
      {/* Conditionally render the Navbar */}
      {showNavbar && <Navbar />}

      {/* Conditionally render the Navigatebar */}
      {showNavigatebar && <Navigatebar />}

      <Routes>
        {/* Home Page */}
        <Route path="/" element={<Home />} />

        {/* Other pages */}
        <Route path="/ShopMenu" element={<ShopMenu />} />
        <Route path="/Details/:id" element={<Details />} />
        <Route path="/Booking" element={<Booking />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/OrderHistory" element={<OrderHistory />} />
        <Route path="/BillingReceipt" element={<BillingReceipt />} />
        <Route path="/WishList" element={<WishList />} />
        <Route path="/ReviewPage" element={<ReviewPage />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/RegForm" element={<RegForm />} />
        <Route path="/ChangeUserPass" element={<ChangeUserPass />} />
        <Route path="/StaffReg" element={<StaffReg />} />
        <Route path="/StaffSignIn" element={<StaffSignIn />} />
        <Route path="/ChangeStaffPass" element={<ChangeStaffPass />} />
        <Route path="/AdminSign" element={<AdminSign />} />
        <Route path="/AdminReg" element={<AdminReg />} />
        <Route path="/ChangeAdminPass" element={<ChangeAdminPass />} />
        <Route path="/SuperAdminSign" element={<SuperAdminSignin />} />
        <Route path="*" element={<Error404 />} />

        {/* Dashboard nested routes */}
        <Route path="/dashboard/*" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="create-category" element={<CreateCategory />} />
          <Route path="add-product" element={<AddProduct />} />
          <Route path="all-menu" element={<AllMenu />} />
          <Route path="all-users" element={<AllUsers />} />
          <Route path="transaction-history" element={<TransactionHistory />} />
          <Route path="admin-profile" element={<AdminProfile />} />
          <Route path="editadmin-pro" element={<EditAdminPro />} />
        </Route>

        {/* Staff Dashboard nested routes */}
        <Route path="/dashstaff/*" element={<Layout2 />}>
          <Route index element={<DashStaff />} />
          <Route path="order-dish" element={<OrderDish />} />
          <Route path="table-manger" element={<TableManger />} />
          <Route path="view-menu" element={<ViewMenu />} />
          <Route path="all-staff" element={<AllStaff />} />
          <Route path="restaurant-bill" element={<RestaurantBill />} />
          <Route path="view-profile" element={<ViewProfile />} />
          <Route path="edit-profile" element={<EditProfile />} />
        </Route>

        {/* Super Admin Dashboard nested routes */}
        <Route path="/dashsuperadmin/*" element={<Layout3 />}>
          <Route index element={<DashSuperAdmin />} />
          <Route path="view-all" element={<ViewAll />} />
          <Route path="branch-revenue" element={<BranchRevenue />} />
          <Route path="view-branch" element={<ViewBranch />} />
          
        </Route>


      </Routes>

      {/* Conditionally render the Footer */}
      {(showFooter && ["/SignIn", "/RegForm", "/AdminSign", "/AdminReg", "/StaffReg", "/StaffSignIn", "/ChangeUserPass", "/ChangeStaffPass", "/ChangeAdminPass"].every((path) => !location.pathname.startsWith(path))) && <Footer />}
       

    </>
  );
};

const App = () => {
  return (
    <Router>
      <Content />
    </Router>
  );
};

export default App;










