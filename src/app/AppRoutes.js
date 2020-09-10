import React, { Component, Suspense, lazy } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Spinner from "../app/shared/Spinner";

const Dashboard = lazy(() => import("./dashboard/Dashboard"));

const BasicElements = lazy(() => import("./form-elements/BasicElements"));

const Approval = lazy(() => import("./Approval/Approval.js"));

const Leave = lazy(() => import("./leave/Leave.js"));

const ViewAttendance = lazy(() => import("./viewattendance/ViewAttendance.js"));

const BasicTable = lazy(() => import("./tables/BasicTable"));

const FontAwesome = lazy(() => import("./icons/FontAwesome"));

const ChartJs = lazy(() => import("./charts/ChartJs"));

const Error404 = lazy(() => import("./user-pages/Error404"));
const Error500 = lazy(() => import("./user-pages/Error500"));

const Login = lazy(() => import("./user-pages/Login"));
const Register1 = lazy(() => import("./user-pages/Register"));

const BlankPage = lazy(() => import("./user-pages/BlankPage"));

class AppRoutes extends Component {
  render() {
    return (
      <Suspense fallback={<Spinner />}>
        <Switch>
          <Route exact path="/dashboard" component={Dashboard} />
          <Route
            path="/form-Elements/basic-elements"
            component={BasicElements}
          />

          <Route path="/leave" component={Leave} />

          <Route path="/approval" component={Approval} />
          <Route path="/viewattendance" component={ViewAttendance} />

          <Route path="/icons/font-awesome" component={FontAwesome} />

          <Route path="/charts/chart-js" component={ChartJs} />

          <Route path="/user-pages/login-1" component={Login} />
          <Route path="/user-pages/register-1" component={Register1} />

          <Route path="/user-pages/error-404" component={Error404} />
          <Route path="/user-pages/error-500" component={Error500} />

          <Redirect to="/dashboard" />
        </Switch>
      </Suspense>
    );
  }
}

export default AppRoutes;
