import React, { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';
import { roles } from 'config/roles';
// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('views/dashboard/Default')));

// all pages routing
const AddEmployee = Loadable(lazy(() => import('views/AddNewEmployee/AddNewEmployee')));
const ViewEmployees = Loadable(lazy(() => import('views/ViewEmployees/ViewEmployees')));
const VerifyPensioner = Loadable(lazy(() => import('views/VerifyPensioner/VerifyPensioner')));
const SearchRecords = Loadable(lazy(() => import('views/SearchRecords/SearchRecords')));
const SalarySlip = Loadable(lazy(() => import('views/salarySlip/salarySlip')));
const GpFund = Loadable(lazy(() => import('views/gpFund/gpFund')));
const LeaveRecord = Loadable(lazy(() => import('views/leaveRecord/leaveRecord')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [
        {
            path: '/dashboard',
            permission: [roles.admin],
            element: <DashboardDefault />
        },
        {
            path: '/addemployee',
            permission: [roles.admin],

            element: <AddEmployee />
        },
        {
            path: '/employee',
            permission: [roles.admin],

            element: <AddEmployee />
        },
        {
            path: '/employee/:id',
            permission: [roles.admin],

            element: <AddEmployee />
        },
        {
            path: '/viewemployees',
            permission: [roles.admin],
            element: <ViewEmployees />
        },
        {
            path: '/verifypensioner',
            permission: [roles.admin],

            element: <VerifyPensioner />
        },
        {
            path: '/search-records',
            permission: [roles.employee],

            element: <SearchRecords />
        },
        {
            path: '/salary-slip',
            permission: [roles.employee],

            element: <SalarySlip />
        },
        {
            path: '/gpfund',
            permission: [roles.admin],

            element: <GpFund />
        },
        {
            path: '/leave-record',
            permission: [roles.admin],

            element: <LeaveRecord />
        }
    ]
};

export default MainRoutes;
