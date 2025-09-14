import React from 'react';
import DashboardCover from '../../SharedPages/dashboardCover/DashboardCover';

const AdminHome = () => {
    return (
        <div>
              <DashboardCover
                    heading={"wellCome to Your Dashboard"}
                    subheading={"Admin home"}
                  ></DashboardCover>
        </div>
    );
};

export default AdminHome;